const briefDate = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

const dataStamp = "截至北京时间 2026-06-14 09:12 查询";

const yesterdayResults = [
  {
    home: "卡塔尔",
    away: "瑞士",
    score: "1 - 1",
    stage: "B 组首轮｜北京时间 6 月 14 日 03:00",
    note: "据 Guardian 现场页与赛后稿核对，恩博洛第 17 分钟点球破门，瑞士长时间占优却未能锁定胜局；卡塔尔补时第 95 分钟由胡希头球绝平，拿到队史首个男足世界杯积分。",
  },
  {
    home: "巴西",
    away: "摩洛哥",
    score: "1 - 1",
    stage: "C 组首轮｜北京时间 6 月 14 日 06:00",
    note: "据 Guardian 赛后战报核对，赛巴里第 21 分钟为摩洛哥先开纪录，维尼修斯第 32 分钟扳平；下半场双方门将都有关键扑救，巴西控球更多但仍未能完成反超。",
  },
];

const waitingMatches = [
  {
    match: "海地 vs 苏格兰",
    stage: "C 组首轮",
    time: "6 月 14 日 09:00 北京时间｜09:12 查询时进行中",
    note: "本场已于北京时间 6 月 14 日 09:00 开球，当前查询窗口内尚未完赛，公开推荐已自动停止，不再给出新出票方向，只保留赛后复盘与结果更新。",
  },
  {
    match: "澳大利亚 vs 土耳其",
    stage: "D 组首轮",
    time: "6 月 14 日 12:00 北京时间｜未开赛",
    note: "截至北京时间 2026 年 6 月 14 日 09:12 仍未开赛。公开信息显示澳大利亚年轻化后节奏更直接，土耳其中前场技术与创造力更强，但防线并非没有波动，仍应把平局纳入主路径。",
  },
];

const previews = [
  {
    match: "澳大利亚 vs 土耳其",
    time: "6 月 14 日 12:00 北京时间",
    context: "当前可售公开场次只剩这一场。澳大利亚年轻化后更愿意把比赛带到纵向冲刺和身体对抗，土耳其则拥有更成熟的技术中前场与更强的阵地战创造力。",
    form: "这类首轮对冲局通常很难早早一边倒。澳大利亚会尝试把回合数和二点球打起来，土耳其则要靠中场传控和肋部配合把优势送进禁区。",
    squad: "重点看居莱尔、伊尔迪兹、恰尔汗奥卢一线是否能持续把土耳其的脚下优势兑现出来；澳大利亚则更依赖边路推进、定位球和高强度回抢。",
    tactic: "更稳的做法仍是站土耳其不败并防平，不建议在首轮直接裸压大热单边。若临场首发显示澳大利亚中后场过于保守，土耳其胜可小幅上调。",
    pick: "土耳其不败，防平局",
    score: "1 - 1",
    conservative: "土耳其平/胜",
    aggressive: "土耳其胜",
    confidence: 53,
    factors: ["首轮试探", "土耳其技术优势", "澳洲身体冲击"],
  },
];

const matchBanners = [
  {
    time: "6 月 14 日 03:00 北京时间｜已完赛",
    match: "卡塔尔 vs 瑞士",
    venue: "B 组｜小组首轮｜旧金山湾区",
    score: "终场 1-1",
    angle: "卡塔尔补时绝平，瑞士不败方向命中但主胜未出",
    left: "QAT",
    right: "SUI",
  },
  {
    time: "6 月 14 日 06:00 北京时间｜已完赛",
    match: "巴西 vs 摩洛哥",
    venue: "C 组｜小组首轮｜纽约新泽西",
    score: "终场 1-1",
    angle: "摩洛哥强硬逼平巴西，巴西单边主胜思路落空",
    left: "BRA",
    right: "MAR",
  },
  {
    time: "6 月 14 日 09:00 北京时间｜进行中",
    match: "海地 vs 苏格兰",
    venue: "C 组｜小组首轮｜波士顿",
    score: "09:12 查询时比赛进行中",
    angle: "已开球，停止新出票推荐，待赛后更新",
    left: "HAI",
    right: "SCO",
  },
  {
    time: "6 月 14 日 12:00 北京时间",
    match: "澳大利亚 vs 土耳其",
    venue: "D 组｜小组首轮｜温哥华",
    score: "预测 1-1",
    angle: "土耳其不败，平局保护优先",
    left: "AUS",
    right: "TUR",
  },
];

const reviewTicketIdeas = [
  {
    title: "稳健主推 2 串 1",
  },
  {
    title: "进取强势 2 串 1",
  },
  {
    title: "比分进取小注",
  },
];

const ticketIdeas = [
  {
    title: "单场保守方向",
    type: "主推",
    recommended: true,
    picks: [
      "澳大利亚 vs 土耳其：土耳其平 / 胜",
    ],
    reason: "当前未开赛公开场次只剩澳大利亚 vs 土耳其，最稳思路仍是把土耳其放在不败面，同时把首轮最常见的平局留在保护路径里。",
    stake: "若必须参与，宜轻仓单场处理，不建议强凑串关。",
  },
  {
    title: "单场进取方向",
    type: "进取",
    recommended: false,
    picks: [
      "澳大利亚 vs 土耳其：土耳其胜",
    ],
    reason: "如果临场首发确认土耳其中前场主力齐整，且澳大利亚摆出更保守的后场配置，可以把不败思路上调到客胜，但容错率会明显下降。",
    stake: "仅适合小注尝试，不替代保守主线。",
  },
  {
    title: "比分进取小注",
    type: "高赔小注",
    recommended: false,
    picks: [
      "澳大利亚 vs 土耳其：1-1 / 1-2",
    ],
    reason: "这场更像低比分对冲局，平局与一球差仍是更贴合公开信息的分支，不建议追过深的大比分剧本。",
    stake: "严格小注，只作赔率增强。",
  },
  {
    title: "算法风控线",
    type: "规则",
    recommended: false,
    picks: [
      "已开球场次不再推荐，不为凑单跨时段强行串关",
      "只剩单场时优先轻仓或放弃，继续把平局纳入主路径",
    ],
    reason: "当前赛程窗口里，海地 vs 苏格兰已开球，澳大利亚 vs 土耳其是唯一仍可售的公开焦点战；这类局面最怕为了凑串而放大噪声，纪律上宁可少做也不硬做。",
    stake: "预测只作公开信息复盘，不保证结果，更不应替代风控。",
  },
];

const disclaimer = "预测只基于公开信息和概率分析，不保证结果，不构成投注建议；实际玩法、赔率、让球数和截止时间以中国体育彩票官方销售终端为准。";
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
  const canadaOutcome = outcome(scores.canada);
  const usaOutcome = outcome(scores.usa);
  const canadaScore = exactScore(scores.canada);
  const usaScore = exactScore(scores.usa);

  if (!scores.canada || !scores.usa) {
    return { status: "待补全", hit: false };
  }

  if (idea.title === "稳健主推 2 串 1") {
    return {
      status: includesAny(canadaOutcome, ["平", "胜"]) && includesAny(usaOutcome, ["平", "胜"]) ? "命中" : "未中",
      hit: includesAny(canadaOutcome, ["平", "胜"]) && includesAny(usaOutcome, ["平", "胜"]),
    };
  }

  if (idea.title === "进取强势 2 串 1") {
    const hit = canadaOutcome === "胜" && usaOutcome === "胜";
    return { status: hit ? "命中" : "未中", hit };
  }

  if (idea.title === "比分进取小注") {
    const hit = includesAny(canadaScore, ["1-1", "1-0"]) && includesAny(usaScore, ["2-1", "3-1"]);
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
      <h4>${review.date}｜${review.scores.canadaText}，${review.scores.usaText}</h4>
      ${review.results.map((result) => `<p>${result.title}：${result.status}</p>`).join("")}
      <p>${review.note || "未填写备注"}</p>
    </article>
  `).join("");
}

function saveCurrentReview() {
  const canadaText = document.getElementById("scoreCanada").value.trim();
  const usaText = document.getElementById("scoreUsa").value.trim();
  const scores = {
    canada: parseScore(canadaText),
    usa: parseScore(usaText),
  };

  if (!scores.canada || !scores.usa) {
    const toast = document.getElementById("toast");
    toast.textContent = "请按 2-1 格式填写两场比分";
    toast.classList.add("show");
    window.setTimeout(() => {
      toast.classList.remove("show");
      toast.textContent = "已复制";
    }, 1800);
    return;
  }

  const results = reviewTicketIdeas.map((idea) => ({
    title: idea.title,
    ...evaluateTicketIdea(idea, scores),
  }));

  const reviews = loadReviews();
  reviews.push({
    date: new Date().toLocaleString("zh-CN"),
    scores: {
      canadaText: `加拿大 ${canadaText} 波黑`,
      usaText: `美国 ${usaText} 巴拉圭`,
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
    { match: "加拿大 vs 波黑", home: "加拿大", away: "波黑" },
    { match: "美国 vs 巴拉圭", home: "美国", away: "巴拉圭" },
    { match: "卡塔尔 vs 瑞士", home: "卡塔尔", away: "瑞士" },
    { match: "巴西 vs 摩洛哥", home: "巴西", away: "摩洛哥" },
    { match: "海地 vs 苏格兰", home: "海地", away: "苏格兰" },
    { match: "澳大利亚 vs 土耳其", home: "澳大利亚", away: "土耳其" },
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
    { play: "比分", pick: "2-1", pattern: /\(?2[:：-]1\)?@?\s*([0-9]+\.[0-9]+)/g },
    { play: "比分", pick: "1-0", pattern: /\(?1[:：-]0\)?@?\s*([0-9]+\.[0-9]+)/g },
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

function combinations(items, size) {
  if (size === 1) return items.map((item) => [item]);
  const result = [];
  items.forEach((item, index) => {
    combinations(items.slice(index + 1), size - 1).forEach((tail) => {
      result.push([item, ...tail]);
    });
  });
  return result;
}

function evaluateLedgerTicket(ticket) {
  const legs = ticket.legs.map(parseLegLine).filter(Boolean);
  const results = ticket.results.map(parseResultLine).filter(Boolean);
  let product = 1;
  let needsManual = false;
  let hasPending = false;
  let hasMiss = false;
  let hitCount = 0;

  const legResults = legs.map((leg) => {
    const result = findResultForLeg(leg, results);
    const actual = resultForPlay(leg, result && result.score);
    if (!actual) {
      hasPending = true;
      return { leg, actual: "待赛果", status: "待赛果", hit: false };
    }
    const hit = leg.picks.includes(actual);
    const odd = hit ? oddForHit(leg, actual) : null;
    if (hit && !odd) needsManual = true;
    if (hit && odd) product *= odd;
    if (hit) {
      hitCount += 1;
    } else {
      hasMiss = true;
    }
    return { leg, actual, status: hit ? "命中" : "未中", hit, odd };
  });

  const completed = legResults.length > 0 && legResults.every((item) => item.status !== "待赛果");
  const allHit = completed && legResults.every((item) => item.hit);
  let calculatedPrize = 0;
  const mixedPass = ticket.passType === "2,3";

  if (completed && !needsManual && ticket.passType === "single") {
    calculatedPrize = legResults.reduce((sum, item) => {
      if (!item.hit) return sum;
      const odd = oddForHit(item.leg, item.actual);
      return sum + (odd ? 2 * ticket.multiple * odd : 0);
    }, 0);
  } else if (completed && !needsManual && mixedPass) {
    const hitLegs = legResults.filter((item) => item.hit && item.odd);
    const pairPrize = combinations(hitLegs, 2).reduce((sum, group) => {
      return sum + 2 * ticket.multiple * group[0].odd * group[1].odd;
    }, 0);
    const triplePrize = combinations(hitLegs, 3).reduce((sum, group) => {
      return sum + 2 * ticket.multiple * group.reduce((total, item) => total * item.odd, 1);
    }, 0);
    calculatedPrize = pairPrize + triplePrize;
  } else if (allHit && !needsManual && ticket.maxPrize && legs.every((leg) => leg.picks.length === 1)) {
    calculatedPrize = ticket.maxPrize;
  } else if (allHit && !needsManual) {
    calculatedPrize = 2 * ticket.multiple * product;
  }

  let status = "待赛果";
  if (ticket.passType === "single") {
    if (completed) {
      status = calculatedPrize > 0 ? "中奖" : "未中奖";
    } else if (hitCount > 0 || hasMiss) {
      status = "进行中";
    }
  } else if (mixedPass) {
    const missedCount = legResults.filter((item) => item.status === "未中").length;
    if (completed) {
      status = calculatedPrize > 0 ? "中奖" : "未中奖";
    } else if (missedCount >= 2) {
      status = "未中奖";
    } else if (hasPending) {
      status = "进行中";
    }
  } else if (completed) {
    status = calculatedPrize > 0 ? "中奖" : "未中奖";
  } else if (hasMiss) {
    status = "未中奖";
  } else if (hasPending && hitCount > 0) {
    status = "进行中";
  }

  let summary = "等待首场赛果。";
  if (ticket.passType === "single" && hasPending && (hitCount > 0 || hasMiss)) {
    const missedCount = legResults.filter((item) => item.status === "未中").length;
    summary = `单关已结算 ${hitCount + missedCount} 场：命中 ${hitCount} 场，未中 ${missedCount} 场，剩余 ${legResults.length - hitCount - missedCount} 场待赛果。`;
  } else if (mixedPass && hasPending) {
    const missedCount = legResults.filter((item) => item.status === "未中").length;
    const pendingCount = legResults.filter((item) => item.status === "待赛果").length;
    summary = `混合过关已结算 ${hitCount + missedCount} 场：命中 ${hitCount} 场，未中 ${missedCount} 场，剩余 ${pendingCount} 场待赛果。`;
  } else if (mixedPass && completed && calculatedPrize > 0) {
    summary = `混合过关命中有效组合，理论奖金 ${calculatedPrize.toFixed(2)} 元。`;
  } else if (mixedPass && completed) {
    summary = "混合过关已全部完赛，未达到中奖条件。";
  } else if (ticket.passType !== "single" && hasMiss) {
    summary = "串关已出现失手场次，整张票已可判定未中奖。";
  } else if (ticket.passType !== "single" && hitCount > 0 && hasPending) {
    summary = `已命中 ${hitCount} 关，剩余 ${legResults.length - hitCount} 关待赛果。`;
  } else if (completed && calculatedPrize > 0) {
    summary = `全部命中，理论奖金 ${calculatedPrize.toFixed(2)} 元。`;
  } else if (completed) {
    summary = "已全部完赛，未达到中奖条件。";
  }

  return {
    legResults,
    status,
    summary,
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

function normalizeTicketDate(ticket) {
  const titleMatch = String(ticket.title || "").match(/\d{4}-\d{2}-\d{2}/);
  if (titleMatch) return titleMatch[0];

  const createdAtMatch = String(ticket.createdAt || "").match(/(\d{4})[/-](\d{1,2})[/-](\d{1,2})/);
  if (!createdAtMatch) return "未分组";

  const [, year, month, day] = createdAtMatch;
  return [
    year,
    month.padStart(2, "0"),
    day.padStart(2, "0"),
  ].join("-");
}

function signedAmount(value) {
  if (value > 0) return `+${value.toFixed(2)} 元`;
  if (value < 0) return `${value.toFixed(2)} 元`;
  return "0.00 元";
}

function profitClassName(value) {
  if (value > 0) return "profit-positive";
  if (value < 0) return "profit-negative";
  return "";
}

function buildLedgerBook(evaluated) {
  const totals = {
    totalStake: 0,
    settledStake: 0,
    settledPrize: 0,
    pendingStake: 0,
    settledCount: 0,
    pendingCount: 0,
  };
  const dailyMap = new Map();

  evaluated.forEach(({ ticket, evaluation }) => {
    const stake = Number(ticket.stake || 0);
    const prize = Number(evaluation.calculatedPrize || 0);
    const pending = ["待赛果", "进行中"].includes(evaluation.status);
    const dateKey = normalizeTicketDate(ticket);

    totals.totalStake += stake;
    if (pending) {
      totals.pendingStake += stake;
      totals.pendingCount += 1;
    } else {
      totals.settledStake += stake;
      totals.settledPrize += prize;
      totals.settledCount += 1;
    }

    if (!dailyMap.has(dateKey)) {
      dailyMap.set(dateKey, {
        date: dateKey,
        stake: 0,
        prize: 0,
        settledStake: 0,
        pendingStake: 0,
        settledCount: 0,
        pendingCount: 0,
        wonCount: 0,
        lostCount: 0,
      });
    }

    const bucket = dailyMap.get(dateKey);
    bucket.stake += stake;
    bucket.prize += prize;
    if (pending) {
      bucket.pendingStake += stake;
      bucket.pendingCount += 1;
    } else {
      bucket.settledStake += stake;
      bucket.settledCount += 1;
      if (evaluation.status === "中奖") {
        bucket.wonCount += 1;
      } else if (evaluation.status === "未中奖") {
        bucket.lostCount += 1;
      }
    }
  });

  const daily = Array.from(dailyMap.values())
    .map((bucket) => ({
      ...bucket,
      settledProfit: Number((bucket.prize - bucket.settledStake).toFixed(2)),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    totals: {
      ...totals,
      settledProfit: Number((totals.settledPrize - totals.settledStake).toFixed(2)),
    },
    daily,
  };
}

function renderProfitBook(evaluated) {
  const { totals, daily } = buildLedgerBook(evaluated);

  document.getElementById("profitMetrics").innerHTML = `
    <div class="metric-card"><span>累计投入</span><strong>${totals.totalStake.toFixed(2)}</strong></div>
    <div class="metric-card"><span>已返奖金</span><strong>${totals.settledPrize.toFixed(2)}</strong></div>
    <div class="metric-card"><span>已结算盈亏</span><strong class="${profitClassName(totals.settledProfit)}">${signedAmount(totals.settledProfit)}</strong></div>
    <div class="metric-card"><span>待结算本金</span><strong>${totals.pendingStake.toFixed(2)}</strong></div>
  `;

  const history = document.getElementById("profitHistory");
  if (!daily.length) {
    history.innerHTML = `<div class="history-card"><h4>暂无账本记录</h4><p>保存票据后，这里会按日期自动汇总投入、返奖和盈亏。</p></div>`;
    return;
  }

  history.innerHTML = daily.slice().reverse().map((bucket) => `
    <article class="history-card">
      <h4>${bucket.date}｜已结算盈亏 <span class="${profitClassName(bucket.settledProfit)}">${signedAmount(bucket.settledProfit)}</span></h4>
      <p>投入 ${bucket.stake.toFixed(2)} 元；已返奖金 ${bucket.prize.toFixed(2)} 元；待结算本金 ${bucket.pendingStake.toFixed(2)} 元。</p>
      <p>已结算 ${bucket.settledCount} 张，待结算 ${bucket.pendingCount} 张；中奖 ${bucket.wonCount} 张，未中奖 ${bucket.lostCount} 张。</p>
    </article>
  `).join("");
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
    renderProfitBook([]);
    history.innerHTML = `<div class="history-card"><h4>暂无票据</h4><p>你每天把彩票发给我后，我会按票面内容录入这里，赛后再核奖。</p></div>`;
    return;
  }

  renderProfitBook(evaluated);

  history.innerHTML = evaluated.slice().reverse().map(({ ticket, evaluation }) => `
    <article class="history-card">
      <h4>${ticket.title}｜${evaluation.status}</h4>
      <p>识别：${ticket.recognitionStatus || "待系统识别"}；过关：${ticket.passType}；理论奖金：${evaluation.calculatedPrize.toFixed(2)} 元</p>
      <p>核销说明：${evaluation.summary}</p>
      <p>投入：${ticket.stake || 0} 元；倍数：${ticket.multiple || 0}；最高奖：${ticket.maxPrize || 0} 元；录入：${ticket.createdAt}</p>
      ${ticket.games && ticket.games.length ? `<p>比赛：${ticket.games.map((game) => game.match).join("，")}</p>` : ""}
      ${ticket.picks && ticket.picks.length ? `<p>选项：${ticket.picks.map((pick) => `${pick.play} ${pick.pick}@${pick.odd}`).join("，")}</p>` : ""}
      ${evaluation.legResults.map((item) => `<p>${item.leg.match}：${item.leg.play} ${item.leg.picks.join("/")}，赛果判断 ${item.actual}，${item.status}</p>`).join("")}
    </article>
  `).join("");
}

function buildTicketSummaryLines() {
  const tickets = loadTickets().map((ticket) => ({ ticket, evaluation: evaluateLedgerTicket(ticket) }));
  if (!tickets.length) {
    return ["- 暂无公开票据需要核销"];
  }

  return tickets.map(({ ticket, evaluation }) => {
    const waiting = evaluation.legResults
      .filter((item) => item.status === "待赛果")
      .map((item) => `${item.leg.match} ${item.leg.play} ${item.leg.picks.join("/")}`)
      .join("、");
    const suffix = waiting ? `；剩余条件：${waiting}` : "";
    return `- ${ticket.title}｜${evaluation.status}｜${evaluation.summary}${suffix}`;
  });
}

function buildProfitSummaryLines() {
  const evaluated = loadTickets().map((ticket) => ({ ticket, evaluation: evaluateLedgerTicket(ticket) }));
  const { totals, daily } = buildLedgerBook(evaluated);

  if (!evaluated.length) {
    return [
      "- 暂无票据账本记录",
    ];
  }

  const lines = [
    `- 累计投入 ${totals.totalStake.toFixed(2)} 元，已返奖金 ${totals.settledPrize.toFixed(2)} 元，已结算盈亏 ${signedAmount(totals.settledProfit)}，待结算本金 ${totals.pendingStake.toFixed(2)} 元。`,
  ];

  daily.slice().reverse().forEach((bucket) => {
    lines.push(
      `- ${bucket.date}：投入 ${bucket.stake.toFixed(2)} 元，返奖 ${bucket.prize.toFixed(2)} 元，已结算盈亏 ${signedAmount(bucket.settledProfit)}，待结算 ${bucket.pendingCount} 张。`
    );
  });

  return lines;
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
  const canadaText = document.getElementById("scoreCanada").value.trim();
  const usaText = document.getElementById("scoreUsa").value.trim();
  const scores = {
    canada: parseScore(canadaText),
    usa: parseScore(usaText),
  };
  const container = document.getElementById("liveEvaluation");

  if (!canadaText && !usaText) {
    container.innerHTML = "";
    return;
  }

  if (!scores.canada || !scores.usa) {
    container.innerHTML = `<div class="eval-row"><strong>自动判断</strong><span class="manual">等待完整比分</span></div>`;
    return;
  }

  container.innerHTML = reviewTicketIdeas.map((idea) => {
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

  const waitingText = waitingMatches.map((item) => (
    `- ${item.match}｜${item.stage}｜${item.time}\n  ${item.note}`
  )).join("\n");

  const ticketStatusText = buildTicketSummaryLines().join("\n");
  const profitBookText = buildProfitSummaryLines().join("\n");

  return `主题：世界杯每日赛果与当日赛前预测｜${briefDate}

你好，

以下是今日世界杯简报：

数据口径：${dataStamp}

一、本比赛日新增赛果
${resultText}

二、仍在等待的比赛
${waitingText}

三、票据核销变化
${ticketStatusText}

四、收益记账
${profitBookText}

五、今日/下一比赛日赛前预测
${previewText}

六、当日彩票组合推荐
${ticketText}

七、提示
${disclaimer}
实际玩法、赔率、让球数和截止时间以中国体育彩票官方销售终端为准。`;
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

function bindIfPresent(id, eventName, handler) {
  const element = document.getElementById(id);
  if (element) element.addEventListener(eventName, handler);
}

bindIfPresent("copyBrief", "click", copyBrief);
bindIfPresent("copyBriefSmall", "click", copyBrief);
bindIfPresent("saveReview", "click", saveCurrentReview);
bindIfPresent("scoreCanada", "input", renderLiveEvaluation);
bindIfPresent("scoreUsa", "input", renderLiveEvaluation);
bindIfPresent("saveTicket", "click", saveCurrentTicket);
bindIfPresent("clearTicketForm", "click", clearTicketForm);
bindIfPresent("ticketImages", "change", handleTicketImageUpload);

renderResults();
renderMatchBanners();
renderAngles();
renderPreviews();
renderTicketIdeas();
renderEmail();
renderReviewStats();
renderTicketHistory();
