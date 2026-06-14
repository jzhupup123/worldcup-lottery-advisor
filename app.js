const briefDate = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

const dataStamp = "截至北京时间 2026-06-14 16:53 查询";

const yesterdayResults = [
  {
    home: "卡塔尔",
    away: "瑞士",
    score: "1 - 1",
    stage: "B 组首轮｜北京时间 6 月 14 日 03:00",
    note: "据公开赛后报道核对，恩博洛第 17 分钟点球为瑞士先开纪录，卡塔尔第 95 分钟头球绝平；瑞士控场时间更长，但终结效率不足，最终只拿到 1 分。",
  },
  {
    home: "巴西",
    away: "摩洛哥",
    score: "1 - 1",
    stage: "C 组首轮｜北京时间 6 月 14 日 06:00",
    note: "据公开赛后战报核对，赛巴里第 21 分钟为摩洛哥破门，维尼修斯第 32 分钟扳平；巴西控球占优但推进效率一般，摩洛哥的反击和防守韧性再次兑现。",
  },
  {
    home: "海地",
    away: "苏格兰",
    score: "0 - 1",
    stage: "C 组首轮｜北京时间 6 月 14 日 09:00",
    note: "据 Guardian 现场页与赛后稿核对，麦金第 28 分钟打进全场唯一进球。苏格兰场面并不轻松，但防线顶住了海地后段持续施压，先拿到关键 3 分。",
  },
  {
    home: "澳大利亚",
    away: "土耳其",
    score: "2 - 0",
    stage: "D 组首轮｜北京时间 6 月 14 日 12:00",
    note: "据 Guardian 赛后报道核对，伊兰昆达与梅特卡夫先后破门，澳大利亚在明显少控球的情况下用防守纪律和反击效率打穿土耳其，今天最大的公开冷门由此出现。",
  },
];

const waitingMatches = [
  {
    match: "科特迪瓦 vs 厄瓜多尔",
    stage: "E 组首轮",
    time: "北京时间 6 月 15 日 03:00",
    note: "两队都更像先稳后找反击的结构，厄瓜多尔防守质量和大赛稳定性略好，科特迪瓦身体对抗与前场冲击不可低估，低比分、防平是主线。",
  },
  {
    match: "德国 vs 库拉索",
    stage: "E 组首轮",
    time: "北京时间 6 月 15 日 06:00",
    note: "德国实力和阵容厚度优势明显，库拉索首次世界杯正赛容错很低。方向偏德国胜，比分区间以 3-0、4-0 这种强弱分明局为主。",
  },
  {
    match: "荷兰 vs 日本",
    stage: "F 组首轮",
    time: "北京时间 6 月 15 日 09:00",
    note: "这是下一窗口最值得谨慎处理的一场。荷兰身体和中后场强度占优，日本体系成熟、逼抢和转换质量高，不宜裸压大胜。",
  },
  {
    match: "瑞典 vs 突尼斯",
    stage: "F 组首轮",
    time: "北京时间 6 月 15 日 12:00",
    note: "瑞典纸面实力略高，但突尼斯防守纪律和杯赛韧性强。更像一球差或平局边缘局，胜平保护优于单边冒进。",
  },
];

const previews = [
  {
    match: "科特迪瓦 vs 厄瓜多尔",
    time: "6 月 15 日 03:00 北京时间",
    context: "这场更像 E 组第二名竞争的直接对话。厄瓜多尔防线和中场对抗更稳定，科特迪瓦的优势在前场身体冲击和边路推进。",
    form: "两队首轮都不会愿意把空间完全打开，厄瓜多尔更适合低失误节奏，科特迪瓦如果先丢球会被迫加速。",
    squad: "厄瓜多尔依赖整体防守和快速推进，科特迪瓦需要前场核心把个人能力转化为禁区机会。",
    tactic: "优先看低比分。若临场厄瓜多尔防线主力齐整，厄瓜多尔不败权重上调；若科特迪瓦边路速度配置更激进，平局权重上调。",
    pick: "厄瓜多尔不败，防平",
    score: "1 - 1 / 0 - 1",
    conservative: "平/厄瓜多尔胜",
    aggressive: "厄瓜多尔胜",
    confidence: 54,
    factors: ["低比分", "防守稳定性", "首轮谨慎"],
  },
  {
    match: "德国 vs 库拉索",
    time: "6 月 15 日 06:00 北京时间",
    context: "德国是本窗口最清晰的强弱分明场。库拉索首次世界杯正赛经验不足，若前 25 分钟被压住，很容易进入连续防守状态。",
    form: "德国近期公开热身和预期状态都较强，库拉索防线面对高压和二次进攻的压力会非常大。",
    squad: "德国中前场持球点和终结点都更丰富，库拉索需要依赖低位密集防守和定位球争取少输。",
    tactic: "主线是德国胜。比分更倾向 3 球左右差距，但首轮大热也可能下半场轮换控节奏。",
    pick: "德国胜",
    score: "3 - 0 / 4 - 0",
    conservative: "德国胜",
    aggressive: "德国让胜方向",
    confidence: 78,
    factors: ["实力差距", "阵容厚度", "强队首秀"],
  },
  {
    match: "荷兰 vs 日本",
    time: "6 月 15 日 09:00 北京时间",
    context: "这是下一窗口技术含量最高的一场。荷兰更强在身体、后场出球和禁区高度，日本更强在体系流畅度、逼抢和转换速度。",
    form: "公开前瞻普遍认为日本是暗线强队，但如果缺少关键边路爆点，荷兰的防线和定位球优势会更容易兑现。",
    squad: "荷兰锋线和后防明星质量更高，日本的优势在整体性和边中结合，双方都有进球路径。",
    tactic: "不建议把荷兰当成稳胆大热，最好做荷兰不败并防双方进球；比分以 2-1 或 1-1 为主。",
    pick: "荷兰不败，防平",
    score: "2 - 1 / 1 - 1",
    conservative: "荷兰胜/平",
    aggressive: "荷兰胜",
    confidence: 58,
    factors: ["强强对冲", "日本体系", "荷兰高度优势"],
  },
  {
    match: "瑞典 vs 突尼斯",
    time: "6 月 15 日 12:00 北京时间",
    context: "瑞典纸面更强，但突尼斯在世界杯首轮通常不会轻易崩盘，这场不适合过度追大比分。",
    form: "瑞典需要用定位球和边路传中打开局面，突尼斯会尽量压低节奏，把比赛拖到一球差甚至平局。",
    squad: "瑞典锋线和高点更有威胁，突尼斯的防守纪律会让比赛变得很碎。",
    tactic: "主线是瑞典不败，比分 1-0、1-1；如果临场瑞典锋线主力齐整，可小幅上调主胜。",
    pick: "瑞典不败，防平",
    score: "1 - 0 / 1 - 1",
    conservative: "瑞典胜/平",
    aggressive: "瑞典胜",
    confidence: 55,
    factors: ["一球差", "定位球", "突尼斯防守韧性"],
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
    time: "6 月 14 日 09:00 北京时间｜已完赛",
    match: "海地 vs 苏格兰",
    venue: "C 组｜小组首轮｜波士顿",
    score: "终场 0-1",
    angle: "苏格兰低消耗拿到 3 分，稳健方向偏向客队不败有效",
    left: "HAI",
    right: "SCO",
  },
  {
    time: "6 月 14 日 12:00 北京时间｜已完赛",
    match: "澳大利亚 vs 土耳其",
    venue: "D 组｜小组首轮｜温哥华",
    score: "终场 2-0",
    angle: "澳大利亚反击兑现，土耳其不败与平局保护同时失效",
    left: "AUS",
    right: "TUR",
  },
];

const reviewTicketIdeas = [
  {
    title: "稳健双保险",
  },
  {
    title: "进取单边",
  },
  {
    title: "比分进取小注",
  },
];

const ticketIdeas = [
  {
    title: "稳健主推 2 串 1",
    type: "主推",
    recommended: true,
    picks: [
      "德国 vs 库拉索：德国胜",
      "荷兰 vs 日本：荷兰胜/平",
    ],
    reason: "德国是下一窗口最清晰的强弱差场，适合做胆；荷兰对日本不宜裸胜，但荷兰不败仍是更稳的组合保护。",
    stake: "建议作为主线小额组合，避免再叠加太多不确定场次。",
  },
  {
    title: "中风险 3 串 1",
    type: "进取",
    recommended: false,
    picks: [
      "德国 vs 库拉索：德国胜",
      "科特迪瓦 vs 厄瓜多尔：平/厄瓜多尔胜",
      "瑞典 vs 突尼斯：瑞典胜/平",
    ],
    reason: "这组把德国做稳定腿，另外两场都用不败思路降低波动。缺点是赔率可能不够漂亮，但更贴合首轮冷门频发后的风控。",
    stake: "只适合轻仓，体彩终端若赔率过低可放弃。",
  },
  {
    title: "比分进取小注",
    type: "高赔小注",
    recommended: false,
    picks: [
      "德国 vs 库拉索：3-0 / 4-0",
      "荷兰 vs 日本：2-1 / 1-1",
      "瑞典 vs 突尼斯：1-0 / 1-1",
    ],
    reason: "比分玩法不建议重仓，只抓德国大胜和另外两场一球差/平局的小比分结构。",
    stake: "严格小注，不和主推组合互相加码。",
  },
  {
    title: "算法风控线",
    type: "规则",
    recommended: false,
    picks: [
      "德国可以做胆，但不要把让胜当成稳胆",
      "荷兰、日本这类强强对冲局必须防平",
      "科特迪瓦/厄瓜多尔、瑞典/突尼斯优先低比分",
    ],
    reason: "今天澳大利亚 2-0 土耳其提醒我们：首轮不要只看纸面技术优势。下一窗口只把德国作为相对稳定腿，其余场次以防平和低比分处理。",
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
  const firstOutcome = outcome(scores.first);
  const secondOutcome = outcome(scores.second);
  const firstScore = exactScore(scores.first);
  const secondScore = exactScore(scores.second);

  if (!scores.first || !scores.second) {
    return { status: "待补全", hit: false };
  }

  if (idea.title === "稳健双保险") {
    return {
      status: firstOutcome === "负" && includesAny(secondOutcome, ["平", "负"]) ? "命中" : "未中",
      hit: firstOutcome === "负" && includesAny(secondOutcome, ["平", "负"]),
    };
  }

  if (idea.title === "进取单边") {
    const hit = firstOutcome === "负" && secondOutcome === "负";
    return { status: hit ? "命中" : "未中", hit };
  }

  if (idea.title === "比分进取小注") {
    const hit = includesAny(firstScore, ["0-1", "1-1"]) && includesAny(secondScore, ["1-1", "1-2"]);
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
      <h4>${review.date}｜${review.scores.firstText}，${review.scores.secondText}</h4>
      ${review.results.map((result) => `<p>${result.title}：${result.status}</p>`).join("")}
      <p>${review.note || "未填写备注"}</p>
    </article>
  `).join("");
}

function saveCurrentReview() {
  const firstText = document.getElementById("scoreFirstMatch").value.trim();
  const secondText = document.getElementById("scoreSecondMatch").value.trim();
  const scores = {
    first: parseScore(firstText),
    second: parseScore(secondText),
  };

  if (!scores.first || !scores.second) {
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
      firstText: `海地 ${firstText} 苏格兰`,
      secondText: `澳大利亚 ${secondText} 土耳其`,
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
  const firstText = document.getElementById("scoreFirstMatch").value.trim();
  const secondText = document.getElementById("scoreSecondMatch").value.trim();
  const scores = {
    first: parseScore(firstText),
    second: parseScore(secondText),
  };
  const container = document.getElementById("liveEvaluation");

  if (!firstText && !secondText) {
    container.innerHTML = "";
    return;
  }

  if (!scores.first || !scores.second) {
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
bindIfPresent("scoreFirstMatch", "input", renderLiveEvaluation);
bindIfPresent("scoreSecondMatch", "input", renderLiveEvaluation);
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
