const briefDate = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

const dataStamp = "截至北京时间 2026-06-11 16:51 查询";

const yesterdayResults = [
  {
    home: "6 月 10 日",
    away: "无正赛",
    score: "-",
    stage: "世界杯开赛前一天",
    note: "2026 世界杯于 6 月 11 日开赛，因此前一天没有可汇总的正式比赛结果。",
  },
];

const previews = [
  {
    match: "墨西哥 vs 南非",
    time: "6 月 12 日 03:00 北京时间",
    context: "揭幕战在墨西哥城进行，墨西哥拥有主场、海拔和熟悉环境优势。",
    form: "墨西哥近期热身赛状态较好，南非需要适应客场环境和揭幕战强度。",
    squad: "关注墨西哥的劳尔-希门尼斯、埃德森-阿尔瓦雷斯，以及南非的莱尔-福斯特。",
    tactic: "墨西哥会尝试用边路推进和定位球制造压力，南非更可能先稳住防线再打反击。",
    pick: "墨西哥胜",
    score: "2 - 1",
    conservative: "墨西哥不败",
    aggressive: "墨西哥胜",
    confidence: 66,
    factors: ["主场优势", "揭幕战压力", "定位球"],
  },
  {
    match: "韩国 vs 捷克",
    time: "6 月 12 日清晨 北京时间",
    context: "同属 A 组首轮，韩国需要抢开局积分，捷克重返世界杯后的第一场也会非常谨慎。",
    form: "韩国进攻端有孙兴慜、李刚仁等核心，捷克整体对抗和防守纪律更强。",
    squad: "关注韩国前场核心状态，以及捷克中后场对韩国速度的限制效果。",
    tactic: "韩国更可能主动提速，捷克会用身体对抗和中场压迫降低比赛节奏。",
    pick: "韩国不败",
    score: "1 - 1",
    conservative: "韩国不败",
    aggressive: "平局",
    confidence: 58,
    factors: ["前场速度", "中场对抗", "首轮谨慎"],
  },
];

const matchBanners = [
  {
    time: "6 月 12 日 03:00 北京时间",
    match: "墨西哥 vs 南非",
    venue: "A 组｜揭幕战｜墨西哥城",
    score: "预测 2-1",
    angle: "墨西哥胜，谨慎追让胜",
    left: "MEX",
    right: "RSA",
  },
  {
    time: "6 月 12 日清晨 北京时间",
    match: "韩国 vs 捷克",
    venue: "A 组｜小组首轮",
    score: "预测 1-1",
    angle: "韩国不败，重点防平",
    left: "KOR",
    right: "CZE",
  },
];

const ticketIdeas = [
  {
    title: "稳健 2 串 1",
    type: "主推",
    recommended: true,
    picks: [
      "墨西哥 vs 南非：胜平负选墨西哥胜",
      "韩国 vs 捷克：胜平负双选韩国胜 / 平",
    ],
    reason: "用墨西哥主场优势做胆，韩国场防平。双选会增加注数，但比单挑韩国胜更稳。",
    stake: "建议低倍参与；按 2 元基础注计算，韩国双选会拆成 2 注。",
  },
  {
    title: "进球数 2 串 1",
    type: "中风险",
    recommended: false,
    picks: [
      "墨西哥 vs 南非：总进球 2 / 3",
      "韩国 vs 捷克：总进球 1 / 2",
    ],
    reason: "两场都是小组首轮，谨慎开局概率不低。墨西哥场更可能 2-1 或 2-0，韩国场更偏 1-1、1-0、0-1。",
    stake: "总进球容错比比分高，但多选会明显增加注数。",
  },
  {
    title: "比分小注组合",
    type: "高风险",
    recommended: false,
    picks: [
      "墨西哥 vs 南非：2-1 / 2-0",
      "韩国 vs 捷克：1-1 / 1-0",
    ],
    reason: "比分玩法赔率高但命中率低，只适合作为娱乐小注，不适合作为主仓。",
    stake: "严格小额，错一场即影响整张组合。",
  },
  {
    title: "让球观察组合",
    type: "条件单",
    recommended: false,
    picks: [
      "若墨西哥官方让 -1：优先看让平，其次让负",
      "若韩国官方让 -1：不追让胜，倾向放弃或看让负",
    ],
    reason: "世界杯揭幕和首轮通常不宜过度追穿盘。让球数必须以销售终端实时显示为准。",
    stake: "只有当赔率和让球数匹配预期时再考虑。",
  },
];

const disclaimer = "预测只基于公开信息和概率分析，不保证结果，不构成投注建议。";
const reviewStorageKey = "worldCupTicketReviews";
const ticketStorageKey = "worldCupTicketLedger";
let selectedTicketImages = [];
let currentRecognizedTicket = null;

document.getElementById("briefDate").textContent = briefDate;

function renderMatchBanners() {
  const container = document.getElementById("matchBannerTrack");
  container.innerHTML = matchBanners.map((banner) => `
    <article class="match-banner">
      <div class="banner-meta">
        <span>${banner.time}</span>
        <strong>${banner.venue}</strong>
      </div>
      <div class="banner-teams">
        <span>${banner.left}</span>
        <h3>${banner.match}</h3>
        <span>${banner.right}</span>
      </div>
      <div class="banner-bottom">
        <strong>${banner.score}</strong>
        <span>${banner.angle}</span>
      </div>
    </article>
  `).join("");
}

function renderResults() {
  const container = document.getElementById("resultsList");
  container.innerHTML = yesterdayResults.map((result) => `
    <div class="result-card">
      <div class="club">
        <strong>${result.home}</strong>
        <span>${result.stage}</span>
      </div>
      <div class="score">${result.score}</div>
      <div class="club">
        <strong>${result.away}</strong>
        <span>${result.note}</span>
      </div>
    </div>
  `).join("");
}

function renderAngles() {
  const container = document.getElementById("angleList");
  container.innerHTML = previews.map((preview) => `
    <div class="angle-card">
      <div class="angle-head">
        <div>
          <h3>${preview.match}</h3>
          <p class="meta">${preview.time} 开赛 · 预测 ${preview.score}</p>
        </div>
        <span class="risk">${preview.pick}</span>
      </div>
      <p class="reason">保守：${preview.conservative}。激进：${preview.aggressive}。${preview.context}</p>
      <div class="confidence">
        <span>信心指数</span>
        <div class="bar"><span style="width:${preview.confidence}%"></span></div>
        <strong>${preview.confidence}%</strong>
      </div>
    </div>
  `).join("");
}

function renderPreviews() {
  const container = document.getElementById("previewList");
  container.innerHTML = previews.map((preview) => `
    <div class="preview-card">
      <div class="preview-head">
        <div>
          <h3>${preview.match}</h3>
          <p class="meta">${preview.time} · 胜负角度：${preview.pick} · 预测比分：${preview.score}</p>
        </div>
        <span class="risk">${preview.confidence}%</span>
      </div>
      <p class="reason"><strong>背景：</strong>${preview.context}</p>
      <p class="reason"><strong>状态：</strong>${preview.form}</p>
      <p class="reason"><strong>阵容：</strong>${preview.squad}</p>
      <p class="reason"><strong>战术：</strong>${preview.tactic}</p>
      <div class="factors">
        ${preview.factors.map((factor) => `<span>${factor}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderTicketIdeas() {
  const container = document.getElementById("ticketBoard");
  container.innerHTML = ticketIdeas.map((idea) => `
    <section class="ticket-card ${idea.recommended ? "recommended" : ""}">
      <div class="ticket-top">
        <h3>${idea.title}</h3>
        <span class="ticket-type">${idea.type}</span>
      </div>
      <ul class="ticket-picks">
        ${idea.picks.map((pick) => `<li>${pick}</li>`).join("")}
      </ul>
      <p class="reason">${idea.reason}</p>
      <p class="reason"><strong>资金：</strong>${idea.stake}</p>
    </section>
  `).join("");
}

function parseScore(value) {
  const match = value.trim().match(/^(\d+)\s*[-:：]\s*(\d+)$/);
  if (!match) return null;
  return {
    home: Number(match[1]),
    away: Number(match[2]),
  };
}

function outcome(score) {
  if (!score) return null;
  if (score.home > score.away) return "胜";
  if (score.home === score.away) return "平";
  return "负";
}

function totalGoals(score) {
  return score ? score.home + score.away : null;
}

function exactScore(score) {
  return score ? `${score.home}-${score.away}` : null;
}

function includesAny(value, candidates) {
  return candidates.includes(value);
}

function evaluateTicketIdea(idea, scores) {
  const mexicoOutcome = outcome(scores.mexico);
  const koreaOutcome = outcome(scores.korea);
  const mexicoGoals = totalGoals(scores.mexico);
  const koreaGoals = totalGoals(scores.korea);
  const mexicoScore = exactScore(scores.mexico);
  const koreaScore = exactScore(scores.korea);

  if (!scores.mexico || !scores.korea) {
    return { status: "待补全", hit: false };
  }

  if (idea.title === "稳健 2 串 1") {
    return {
      status: mexicoOutcome === "胜" && includesAny(koreaOutcome, ["胜", "平"]) ? "命中" : "未中",
      hit: mexicoOutcome === "胜" && includesAny(koreaOutcome, ["胜", "平"]),
    };
  }

  if (idea.title === "进球数 2 串 1") {
    const hit = includesAny(mexicoGoals, [2, 3]) && includesAny(koreaGoals, [1, 2]);
    return { status: hit ? "命中" : "未中", hit };
  }

  if (idea.title === "比分小注组合") {
    const hit = includesAny(mexicoScore, ["2-1", "2-0"]) && includesAny(koreaScore, ["1-1", "1-0"]);
    return { status: hit ? "命中" : "未中", hit };
  }

  return { status: "需人工复核", hit: false };
}

function loadReviews() {
  try {
    return JSON.parse(localStorage.getItem(reviewStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveReviews(reviews) {
  localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
}

function renderReviewStats() {
  const reviews = loadReviews();
  const graded = reviews.flatMap((review) => review.results).filter((result) => result.status !== "需人工复核");
  const hitCount = graded.filter((result) => result.hit).length;
  const hitRate = graded.length ? Math.round((hitCount / graded.length) * 100) : 0;

  document.getElementById("metricGrid").innerHTML = `
    <div class="metric-card"><span>复盘场次</span><strong>${reviews.length}</strong></div>
    <div class="metric-card"><span>组合判断</span><strong>${graded.length}</strong></div>
    <div class="metric-card"><span>命中率</span><strong>${hitRate}%</strong></div>
  `;

  const history = document.getElementById("reviewHistory");
  if (!reviews.length) {
    history.innerHTML = `<div class="history-card"><h4>暂无记录</h4><p>比赛结束后录入比分，这里会自动生成命中复盘。</p></div>`;
    return;
  }

  history.innerHTML = reviews.slice().reverse().map((review) => `
    <article class="history-card">
      <h4>${review.date}｜${review.scores.mexicoText}，${review.scores.koreaText}</h4>
      ${review.results.map((result) => `<p>${result.title}：${result.status}</p>`).join("")}
      <p>${review.note || "未填写备注"}</p>
    </article>
  `).join("");
}

function saveCurrentReview() {
  const mexicoText = document.getElementById("scoreMexico").value.trim();
  const koreaText = document.getElementById("scoreKorea").value.trim();
  const scores = {
    mexico: parseScore(mexicoText),
    korea: parseScore(koreaText),
  };

  if (!scores.mexico || !scores.korea) {
    const toast = document.getElementById("toast");
    toast.textContent = "请按 2-1 格式填写两场比分";
    toast.classList.add("show");
    window.setTimeout(() => {
      toast.classList.remove("show");
      toast.textContent = "已复制";
    }, 1800);
    return;
  }

  const results = ticketIdeas.map((idea) => ({
    title: idea.title,
    ...evaluateTicketIdea(idea, scores),
  }));

  const reviews = loadReviews();
  reviews.push({
    date: new Date().toLocaleString("zh-CN"),
    scores: {
      mexicoText: `墨西哥 ${mexicoText} 南非`,
      koreaText: `韩国 ${koreaText} 捷克`,
    },
    results,
    note: document.getElementById("reviewNote").value.trim(),
  });
  saveReviews(reviews);
  renderReviewStats();

  const toast = document.getElementById("toast");
  toast.textContent = "复盘已保存";
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
    toast.textContent = "已复制";
  }, 1600);
}

function splitOptions(value) {
  return value
    .split(/[\/、,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLegLine(line) {
  const parts = line.split("｜").map((part) => part.trim());
  if (parts.length < 4) return null;
  const oddsItems = splitOptions(parts[3]).map((item) => {
    const [label, odd] = item.split("@").map((part) => part && part.trim());
    return {
      label: odd ? label : null,
      odd: Number(odd || item),
    };
  });
  return {
    match: parts[0],
    play: parts[1],
    picks: splitOptions(parts[2]),
    odds: oddsItems.filter((item) => Number.isFinite(item.odd) && item.odd > 0),
    raw: line,
  };
}

function parseCurrency(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return Number(match[1].replace(/,/g, ""));
  }
  return 0;
}

function normalizeOcrText(text) {
  return text
    .replace(/[|｜]/g, "｜")
    .replace(/[：﹕]/g, ":")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 65248))
    .replace(/\s+/g, " ")
    .trim();
}

function extractTicketDataFromText(rawText) {
  const text = normalizeOcrText(rawText);
  const passType = (text.match(/过关方式\s*([0-9]+x[0-9]+)/i) || [])[1] || "待复核";
  const multiple = parseCurrency(text, [/([0-9]+)\s*倍/]);
  const stake = parseCurrency(text, [/合计\s*([0-9,.]+)\s*元/, /投注金额\s*([0-9,.]+)\s*元/]);
  const maxPrize = parseCurrency(text, [/最高可能固定奖金[:：]?\s*([0-9,.]+)\s*元/, /最[高髙].{0,8}奖金[:：]?\s*([0-9,.]+)\s*元/]);
  const games = [];
  const knownMatches = [
    { match: "墨西哥 vs 南非", home: "墨西哥", away: "南非" },
    { match: "韩国 vs 捷克", home: "韩国", away: "捷克" },
  ];

  knownMatches.forEach((known) => {
    if (text.includes(known.home) && text.includes(known.away)) {
      games.push(known);
    }
  });

  const picks = [];
  const pickPatterns = [
    { play: "胜平负", pick: "胜", pattern: /胜@?\s*([0-9]+\.[0-9]+)/g },
    { play: "胜平负", pick: "平", pattern: /平@?\s*([0-9]+\.[0-9]+)/g },
    { play: "胜平负", pick: "负", pattern: /负@?\s*([0-9]+\.[0-9]+)/g },
    { play: "比分", pick: "3-0", pattern: /\(?3[:：-]0\)?@?\s*([0-9]+\.[0-9]+)/g },
    { play: "比分", pick: "3-1", pattern: /\(?3[:：-]1\)?@?\s*([0-9]+\.[0-9]+)/g },
    { play: "比分", pick: "1-1", pattern: /\(?1[:：-]1\)?@?\s*([0-9]+\.[0-9]+)/g },
    { play: "比分", pick: "0-0", pattern: /\(?0[:：-]0\)?@?\s*([0-9]+\.[0-9]+)/g },
  ];

  pickPatterns.forEach((item) => {
    let match = item.pattern.exec(text);
    while (match) {
      picks.push({ play: item.play, pick: item.pick, odd: Number(match[1]) });
      match = item.pattern.exec(text);
    }
  });

  return {
    rawText,
    title: `${briefDate} 自动识别票据`,
    passType,
    multiple,
    stake,
    maxPrize,
    games,
    picks,
    legs: [],
    results: [],
    recognitionStatus: rawText ? "已识别，需核对" : "识别失败",
  };
}

function parseResultLine(line) {
  const parts = line.split("｜").map((part) => part.trim());
  if (parts.length < 2) return null;
  return {
    match: parts[0],
    score: parseScore(parts[1]),
    rawScore: parts[1],
  };
}

function findResultForLeg(leg, results) {
  const compactLeg = leg.match.replace(/\s/g, "");
  return results.find((result) => {
    const compactResult = result.match.replace(/\s/g, "");
    return compactResult.includes(compactLeg) || compactLeg.includes(compactResult);
  });
}

function resultForPlay(leg, score) {
  if (!score) return null;

  if (leg.play.includes("让球胜平负")) {
    const handicapMatch = leg.play.match(/[-+]?\d+/);
    const handicap = handicapMatch ? Number(handicapMatch[0]) : 0;
    const adjusted = { home: score.home + handicap, away: score.away };
    const adjustedOutcome = outcome(adjusted);
    return `让${adjustedOutcome}`;
  }

  if (leg.play.includes("胜平负")) {
    return outcome(score);
  }

  if (leg.play.includes("比分")) {
    return exactScore(score);
  }

  if (leg.play.includes("总进球")) {
    return String(totalGoals(score));
  }

  return null;
}

function oddForHit(leg, hitPick) {
  if (leg.odds.length === 1) return leg.odds[0].odd;
  const matched = leg.odds.find((item) => item.label && item.label === hitPick);
  return matched ? matched.odd : null;
}

function evaluateLedgerTicket(ticket) {
  const legs = ticket.legs.map(parseLegLine).filter(Boolean);
  const results = ticket.results.map(parseResultLine).filter(Boolean);
  let product = 1;
  let needsManual = false;

  const legResults = legs.map((leg) => {
    const result = findResultForLeg(leg, results);
    const actual = resultForPlay(leg, result && result.score);
    if (!actual) {
      needsManual = true;
      return { leg, actual: "待赛果", status: "待赛果", hit: false };
    }
    const hit = leg.picks.includes(actual);
    const odd = hit ? oddForHit(leg, actual) : null;
    if (hit && !odd) needsManual = true;
    if (hit && odd) product *= odd;
    return { leg, actual, status: hit ? "命中" : "未中", hit };
  });

  const completed = legResults.length > 0 && legResults.every((item) => item.status !== "待赛果");
  const allHit = completed && legResults.every((item) => item.hit);
  let calculatedPrize = 0;

  if (completed && !needsManual && ticket.passType === "single") {
    calculatedPrize = legResults.reduce((sum, item) => {
      if (!item.hit) return sum;
      const odd = oddForHit(item.leg, item.actual);
      return sum + (odd ? 2 * ticket.multiple * odd : 0);
    }, 0);
  } else if (allHit && !needsManual) {
    calculatedPrize = 2 * ticket.multiple * product;
  }

  return {
    legResults,
    status: !completed ? "待赛果" : calculatedPrize > 0 ? "中奖" : "未中奖",
    calculatedPrize: Number(calculatedPrize.toFixed(2)),
    needsManual,
  };
}

function readTicketForm() {
  const createdAt = new Date().toLocaleString("zh-CN");
  const recognized = currentRecognizedTicket || {};
  return {
    id: `ticket-${Date.now()}`,
    createdAt,
    title: recognized.title || (selectedTicketImages.length ? `${briefDate} 上传票据` : "未上传票据"),
    passType: recognized.passType || "待系统识别",
    multiple: recognized.multiple || 0,
    stake: recognized.stake || 0,
    maxPrize: recognized.maxPrize || 0,
    legs: recognized.legs || [],
    results: recognized.results || [],
    games: recognized.games || [],
    picks: recognized.picks || [],
    rawText: recognized.rawText || "",
    recognitionStatus: recognized.recognitionStatus || (selectedTicketImages.length ? "识别中" : "等待上传票据"),
  };
}

function loadTickets() {
  const seedTickets = Array.isArray(window.ticketDataSeed) ? window.ticketDataSeed : [];
  try {
    const localTickets = JSON.parse(localStorage.getItem(ticketStorageKey)) || [];
    const localIds = new Set(localTickets.map((ticket) => ticket.id));
    return [
      ...seedTickets.filter((ticket) => !localIds.has(ticket.id)),
      ...localTickets,
    ];
  } catch {
    return seedTickets;
  }
}

function saveTickets(tickets) {
  localStorage.setItem(ticketStorageKey, JSON.stringify(tickets));
}

function renderTicketEvaluation() {
  const ticket = readTicketForm();
  const evaluation = evaluateLedgerTicket(ticket);
  const container = document.getElementById("ticketEvaluation");
  if (!selectedTicketImages.length && !ticket.rawText) {
    container.innerHTML = "";
    return;
  }
  const html = `
    <div class="eval-row"><strong>识别状态</strong><span class="manual">${ticket.recognitionStatus}</span></div>
    <div class="eval-row"><strong>过关方式</strong><span class="hit">${ticket.passType}</span></div>
    <div class="eval-row"><strong>金额/倍数</strong><span class="hit">${ticket.stake || 0} 元 / ${ticket.multiple || 0} 倍</span></div>
    <div class="eval-row"><strong>最高奖金</strong><span class="hit">${ticket.maxPrize || 0} 元</span></div>
    <div class="eval-row"><strong>识别比赛</strong><span class="hit">${ticket.games && ticket.games.length ? ticket.games.map((game) => game.match).join("，") : "待复核"}</span></div>
    <div class="eval-row"><strong>识别选项</strong><span class="hit">${ticket.picks && ticket.picks.length ? ticket.picks.map((pick) => `${pick.pick}@${pick.odd}`).join("，") : "待复核"}</span></div>
    ${evaluation.legResults.map((item) => `<div class="eval-row"><strong>${item.leg.match}</strong><span class="${item.hit ? "hit" : item.status === "未中" ? "miss" : "manual"}">${item.leg.play}：${item.actual} / ${item.status}</span></div>`).join("")}
  `;
  container.innerHTML = "";
  document.getElementById("ticketAutoFields").innerHTML = html;
}

function renderTicketHistory() {
  const tickets = loadTickets();
  const evaluated = tickets.map((ticket) => ({ ticket, evaluation: evaluateLedgerTicket(ticket) }));
  const won = evaluated.filter((item) => item.evaluation.status === "中奖");
  const totalPrize = won.reduce((sum, item) => sum + item.evaluation.calculatedPrize, 0);
  const totalStake = tickets.reduce((sum, ticket) => sum + Number(ticket.stake || 0), 0);

  document.getElementById("ledgerMetrics").innerHTML = `
    <div class="metric-card"><span>票据数</span><strong>${tickets.length}</strong></div>
    <div class="metric-card"><span>总投入</span><strong>${totalStake.toFixed(0)}</strong></div>
    <div class="metric-card"><span>已算奖金</span><strong>${totalPrize.toFixed(0)}</strong></div>
  `;

  const history = document.getElementById("ticketHistory");
  if (!tickets.length) {
    history.innerHTML = `<div class="history-card"><h4>暂无票据</h4><p>你每天把彩票发给我后，我会按票面内容录入这里，赛后再核奖。</p></div>`;
    return;
  }

  history.innerHTML = evaluated.slice().reverse().map(({ ticket, evaluation }) => `
    <article class="history-card">
      <h4>${ticket.title}｜${evaluation.status}</h4>
      <p>识别：${ticket.recognitionStatus || "待系统识别"}；过关：${ticket.passType}；理论奖金：${evaluation.calculatedPrize.toFixed(2)} 元</p>
      <p>投入：${ticket.stake || 0} 元；倍数：${ticket.multiple || 0}；最高奖：${ticket.maxPrize || 0} 元；录入：${ticket.createdAt}</p>
      ${ticket.games && ticket.games.length ? `<p>比赛：${ticket.games.map((game) => game.match).join("，")}</p>` : ""}
      ${ticket.picks && ticket.picks.length ? `<p>选项：${ticket.picks.map((pick) => `${pick.play} ${pick.pick}@${pick.odd}`).join("，")}</p>` : ""}
      ${evaluation.legResults.map((item) => `<p>${item.leg.match}：${item.leg.play} ${item.leg.picks.join("/")}，赛果判断 ${item.actual}，${item.status}</p>`).join("")}
    </article>
  `).join("");
}

function saveCurrentTicket() {
  const ticket = readTicketForm();
  if (!ticket.rawText) {
    const toast = document.getElementById("toast");
    toast.textContent = "请先上传并识别票据";
    toast.classList.add("show");
    window.setTimeout(() => {
      toast.classList.remove("show");
      toast.textContent = "已复制";
    }, 1600);
    return;
  }

  const tickets = loadTickets();
  tickets.push(ticket);
  saveTickets(tickets);
  renderTicketEvaluation();
  renderTicketHistory();

  const toast = document.getElementById("toast");
  toast.textContent = "票据已保存";
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
    toast.textContent = "已复制";
  }, 1600);
}

function clearTicketForm() {
  selectedTicketImages = [];
  currentRecognizedTicket = null;
  document.getElementById("ticketImages").value = "";
  renderTicketImagePreview();
  document.getElementById("ticketAutoFields").innerHTML = `
    <div class="eval-row"><strong>识别状态</strong><span class="manual">等待上传票据</span></div>
    <div class="eval-row"><strong>核销状态</strong><span class="manual">待赛果</span></div>
  `;
  renderTicketEvaluation();
}

function resizeImage(file, maxWidth = 1200, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const scale = Math.min(1, maxWidth / image.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve({
          name: file.name,
          dataUrl: canvas.toDataURL("image/jpeg", quality),
        });
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderTicketImagePreview() {
  const container = document.getElementById("ticketImagePreview");
  if (!selectedTicketImages.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = selectedTicketImages.map((image) => (
    `<img class="ticket-image" src="${image.dataUrl}" alt="${image.name}">`
  )).join("");
}

async function handleTicketImageUpload(event) {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;

  try {
    selectedTicketImages = await Promise.all(files.slice(0, 6).map((file) => resizeImage(file)));
    renderTicketImagePreview();
    document.getElementById("ticketAutoFields").innerHTML = `
      <div class="eval-row"><strong>识别状态</strong><span class="manual">正在识别...</span></div>
      <div class="eval-row"><strong>核销状态</strong><span class="manual">等待识别结果</span></div>
    `;
    const rawTextParts = [];
    if (!window.Tesseract) {
      throw new Error("OCR library unavailable");
    }
    for (const file of files.slice(0, 6)) {
      const result = await window.Tesseract.recognize(file, "chi_sim+eng");
      rawTextParts.push(result.data.text);
    }
    currentRecognizedTicket = extractTicketDataFromText(rawTextParts.join("\n"));
    renderTicketEvaluation();
    const toast = document.getElementById("toast");
    toast.textContent = "票据已识别";
    toast.classList.add("show");
    window.setTimeout(() => {
      toast.classList.remove("show");
      toast.textContent = "已复制";
    }, 1400);
  } catch {
    const toast = document.getElementById("toast");
    toast.textContent = "图片读取失败";
    toast.classList.add("show");
    window.setTimeout(() => {
      toast.classList.remove("show");
      toast.textContent = "已复制";
    }, 1600);
  }
}

function renderLiveEvaluation() {
  const mexicoText = document.getElementById("scoreMexico").value.trim();
  const koreaText = document.getElementById("scoreKorea").value.trim();
  const scores = {
    mexico: parseScore(mexicoText),
    korea: parseScore(koreaText),
  };
  const container = document.getElementById("liveEvaluation");

  if (!mexicoText && !koreaText) {
    container.innerHTML = "";
    return;
  }

  if (!scores.mexico || !scores.korea) {
    container.innerHTML = `<div class="eval-row"><strong>自动判断</strong><span class="manual">等待完整比分</span></div>`;
    return;
  }

  container.innerHTML = ticketIdeas.map((idea) => {
    const result = evaluateTicketIdea(idea, scores);
    const className = result.status === "命中" ? "hit" : result.status === "未中" ? "miss" : "manual";
    return `<div class="eval-row"><strong>${idea.title}</strong><span class="${className}">${result.status}</span></div>`;
  }).join("");
}

function buildEmail() {
  const resultText = yesterdayResults.map((result) => (
    `- ${result.home} ${result.score} ${result.away}｜${result.stage}\n  ${result.note}`
  )).join("\n");

  const previewText = previews.map((preview) => (
    `- ${preview.match}｜${preview.time}\n` +
    `  胜负角度：${preview.pick}；保守：${preview.conservative}；激进：${preview.aggressive}\n` +
    `  预测比分：${preview.score}\n` +
    `  分析：${preview.context}${preview.form}${preview.tactic}`
  )).join("\n\n");

  const ticketText = ticketIdeas.map((idea) => (
    `- ${idea.title}｜${idea.type}\n` +
    `  ${idea.picks.join("；")}\n` +
    `  理由：${idea.reason}\n` +
    `  资金：${idea.stake}`
  )).join("\n\n");

  return `主题：世界杯每日赛果与当日赛前预测｜${briefDate}

你好，

以下是今日世界杯简报：

数据口径：${dataStamp}

一、昨日赛果
${resultText}

二、今日/下一比赛日赛前预测
${previewText}

三、当日彩票组合推荐
${ticketText}

四、提示
${disclaimer}`;
}

function renderEmail() {
  document.getElementById("emailBody").textContent = buildEmail();
}

function showPanel(panelName) {
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.panel === panelName);
  });

  document.querySelectorAll("[data-view]").forEach((panel) => {
    if (panelName === "summary") {
      panel.classList.toggle("hidden", panel.dataset.view !== "summary");
    } else {
      panel.classList.toggle("hidden", panel.dataset.view !== panelName);
    }
  });
}

async function copyBrief() {
  const text = buildEmail();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1500);
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => showPanel(button.dataset.panel));
});

document.querySelectorAll(".utility-link").forEach((button) => {
  button.addEventListener("click", () => {
    showPanel(button.dataset.panel);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("copyBrief").addEventListener("click", copyBrief);
document.getElementById("copyBriefSmall").addEventListener("click", copyBrief);
document.getElementById("saveReview").addEventListener("click", saveCurrentReview);
document.getElementById("scoreMexico").addEventListener("input", renderLiveEvaluation);
document.getElementById("scoreKorea").addEventListener("input", renderLiveEvaluation);
document.getElementById("saveTicket").addEventListener("click", saveCurrentTicket);
document.getElementById("clearTicketForm").addEventListener("click", clearTicketForm);
document.getElementById("ticketImages").addEventListener("change", handleTicketImageUpload);

renderResults();
renderMatchBanners();
renderAngles();
renderPreviews();
renderTicketIdeas();
renderEmail();
renderReviewStats();
renderTicketHistory();
