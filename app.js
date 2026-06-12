const briefDate = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

const dataStamp = "截至北京时间 2026-06-12 14:25 查询";

const yesterdayResults = [
  {
    home: "墨西哥",
    away: "南非",
    score: "2 - 0",
    stage: "A 组首轮｜揭幕战｜北京时间 6 月 12 日 03:00",
    note: "据 Guardian 终场稿与赛后综述交叉核对，最近 24 小时新增已完赛 2 场中的首场。墨西哥在主场 2 比 0 取胜，劳尔·希门尼斯收获个人世界杯首球；南非有 2 人被罚下，墨西哥补时阶段也吃到红牌，比赛尾声对抗强度明显上升。",
  },
  {
    home: "韩国",
    away: "捷克",
    score: "2 - 1",
    stage: "A 组首轮｜北京时间 6 月 12 日 10:00",
    note: "据 AP 与 Guardian 终场稿核对，捷克第 59 分钟由拉迪斯拉夫·克雷伊奇头球先开纪录；韩国第 67 分钟由黄仁范扳平，第 80 分钟由替补吴贤揆完成反超，终场 2 比 1 逆转取胜。",
  },
];

const waitingMatches = [
  {
    match: "加拿大 vs 波黑",
    stage: "B 组首轮",
    time: "6 月 13 日 03:00 北京时间",
    note: "这是当前下一场可关注的比赛。Guardian 赛前报道显示加拿大主场氛围、阵容完整度和如何处理主办国压力是主线；马尔施确认科内、邦比托可出战，并对戴维斯恢复保持乐观。新版算法上调主场胜负方向权重，加拿大胜优先于单纯不败。",
  },
  {
    match: "美国 vs 巴拉圭",
    stage: "D 组首轮",
    time: "6 月 13 日 09:00 北京时间",
    note: "Guardian 赛前发布会信息显示美国 26 人均可出战，波切蒂诺明确强调放松和信任体系。主队大概率更主动压迫，但近期舆论仍把其后场稳定性与转换防守列为隐患；若临场继续采用更冒险的边后卫推进结构，双方进球方向仍需防范。",
  },
];

const previews = [
  {
    match: "加拿大 vs 波黑",
    time: "6 月 13 日 03:00 北京时间",
    context: "加拿大坐镇多伦多，速度、身体对抗和主场氛围占优。公开赛前报道显示科内、邦比托可以出战，戴维斯恢复进展更积极，但是否首发仍要等临场名单。",
    form: "Guardian 的赛前特写认为加拿大比 2022 年成熟得多，但近期进球转化还不是稳定强项。若主队上半场迟迟打不穿第一层防线，比赛仍容易落入低比分胶着区间。",
    squad: "重点看乔纳森·戴维与拉林能否持续压住禁区，以及戴维斯若进入名单后，对左路推进和反抢强度能带来多少提升。",
    tactic: "加拿大预计会主动压上并持续冲击二点，但在确认戴维斯出场时间之前，比赛逻辑仍更像先求控制、再争效率的阵地战。",
    pick: "加拿大胜，防小比分",
    score: "2 - 1",
    conservative: "加拿大不败",
    aggressive: "加拿大胜",
    confidence: 61,
    factors: ["主场开局", "戴维斯恢复进展", "低比分倾向"],
  },
  {
    match: "美国 vs 巴拉圭",
    time: "6 月 13 日 09:00 北京时间",
    context: "美国主场声量和锋线纸面更强，Guardian 赛前发布会信息显示 26 人都可出战；但公开前瞻仍普遍把后防稳定性和门将环节列为隐患。",
    form: "波切蒂诺体系更强调主动进攻与高位施压，巴拉圭则更适合中低位防守后直接打肋部和身后，比赛节奏很可能出现明显拉扯。",
    squad: "关注普利希奇、巴洛贡、麦肯尼的前场联动，以及巴拉圭的恩西索、戈麦斯能否在转换里持续冲击美国防线。",
    tactic: "美国若先入球，节奏会明显向主队倾斜；若前 30 分钟迟迟打不开，巴拉圭的反击和定位球会把比赛拖进五五开区间。",
    pick: "美国胜，防平局",
    score: "2 - 1",
    conservative: "美国平/胜",
    aggressive: "美国胜",
    confidence: 59,
    factors: ["美国主场", "全员可用", "后场防反风险"],
  },
];

const matchBanners = [
  {
    time: "6 月 12 日 03:00 北京时间｜已完赛",
    match: "墨西哥 vs 南非",
    venue: "A 组｜揭幕战｜墨西哥城",
    score: "终场 2-0",
    angle: "墨西哥赢球兑现首关，公开票据进入最终核销",
    left: "MEX",
    right: "RSA",
  },
  {
    time: "6 月 12 日 10:00 北京时间｜已完赛",
    match: "韩国 vs 捷克",
    venue: "A 组｜小组首轮",
    score: "终场 2-1",
    angle: "韩国逆转后，2 张让球串关命中、2 张比分票未中",
    left: "KOR",
    right: "CZE",
  },
  {
    time: "6 月 13 日 03:00 北京时间",
    match: "加拿大 vs 波黑",
    venue: "B 组｜小组首轮",
    score: "预测 2-1",
    angle: "加拿大胜，防小比分",
    left: "CAN",
    right: "BIH",
  },
  {
    time: "6 月 13 日 09:00 北京时间",
    match: "美国 vs 巴拉圭",
    venue: "D 组｜小组首轮",
    score: "预测 2-1",
    angle: "美国胜，防平局",
    left: "USA",
    right: "PAR",
  },
];

const reviewTicketIdeas = [
  {
    title: "稳健 2 串 1",
  },
  {
    title: "进球数 2 串 1",
  },
  {
    title: "比分小注组合",
  },
];

const ticketIdeas = [
  {
    title: "均衡主推 2 串 1",
    type: "主推",
    recommended: true,
    picks: [
      "加拿大 vs 波黑：加拿大胜",
      "美国 vs 巴拉圭：美国胜 / 平",
    ],
    reason: "算法从纯保守切到均衡偏进取：加拿大用主场和阵容完整度做胜负方向，美国场保留防平来控制串关断点。",
    stake: "适合作为主组合，赔率空间比双不败更好，风险中等。",
  },
  {
    title: "进取 2 串 1",
    type: "进取",
    recommended: false,
    picks: [
      "加拿大 vs 波黑：加拿大胜",
      "美国 vs 巴拉圭：美国胜",
    ],
    reason: "两场都压主队主动权和进攻兑现，收益更好，但美国后防被巴拉圭反击拖平的风险仍然存在。",
    stake: "只建议小于主组合仓位，不适合作唯一重仓。",
  },
  {
    title: "比分进取小注",
    type: "高赔小注",
    recommended: false,
    picks: [
      "加拿大 vs 波黑：2-1 / 1-0",
      "美国 vs 巴拉圭：2-1 / 3-1",
    ],
    reason: "比分模块提高进攻兑现权重，不再只压低比分。美国场保留 3-1，是主场强攻打穿后的赔率补充。",
    stake: "严格小注，作为增强收益，不作为主仓。",
  },
  {
    title: "算法风控线",
    type: "规则",
    recommended: false,
    picks: [
      "优先找胜负方向，其次才用不败兜底",
      "赔率价值、主场强度、进攻兑现权重上调",
    ],
    reason: "新版算法不会默认保守，但仍保留硬风控：已开球不推荐、关键伤停降权、串关第一关失败立即止损判断。",
    stake: "进取不等于加仓，仍按主组合、小注补充、劣质场次放弃来分配。",
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
      status: mexicoOutcome === "胜" && includesAny(koreaOutcome, ["平", "负"]) ? "命中" : "未中",
      hit: mexicoOutcome === "胜" && includesAny(koreaOutcome, ["平", "负"]),
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

  const results = reviewTicketIdeas.map((idea) => ({
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

  let status = "待赛果";
  if (ticket.passType === "single") {
    if (completed) {
      status = calculatedPrize > 0 ? "中奖" : "未中奖";
    } else if (hitCount > 0 || hasMiss) {
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
      .map((item) => item.leg.match)
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

一、昨日赛果
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
