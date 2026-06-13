const briefDate = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

const dataStamp = "截至北京时间 2026-06-13 12:05 查询";

const yesterdayResults = [
  {
    home: "加拿大",
    away: "波黑",
    score: "1 - 1",
    stage: "B 组首轮｜北京时间 6 月 13 日 03:00",
    note: "据 Guardian 现场战报与赛后报道交叉核对，波黑第 21 分钟由卢基奇利用定位球先拔头筹；加拿大全场持续施压，第 78 分钟拉林替补登场后很快扳平，拿到队史首个男足世界杯积分。",
  },
  {
    home: "美国",
    away: "巴拉圭",
    score: "4 - 1",
    stage: "D 组首轮｜北京时间 6 月 13 日 09:00",
    note: "据 Guardian 现场战报与赛后报道交叉核对，美国半场已建立 3 比 0 优势：麦肯尼早段折射破门、巴洛贡梅开二度，雷纳补时锁定 4 球；巴拉圭由毛里西奥在第 73 分钟追回一球。",
  },
];

const waitingMatches = [
  {
    match: "卡塔尔 vs 瑞士",
    stage: "B 组首轮",
    time: "6 月 14 日 03:00 北京时间",
    note: "截至北京时间 2026 年 6 月 13 日 12:05 仍未开赛。卡塔尔主帅洛佩特吉赛前强调球队不是来陪跑；但从公开实力面和赛事经验看，瑞士的结构完整度仍更稳，平局保护仍有必要。",
  },
  {
    match: "巴西 vs 摩洛哥",
    stage: "C 组首轮",
    time: "6 月 14 日 06:00 北京时间",
    note: "截至北京时间 2026 年 6 月 13 日 12:05 仍未开赛。Guardian 赛前分析显示安切洛蒂首战面临较大压力，内马尔因小腿问题缺席首战；摩洛哥延续近年大赛韧性，这场不宜把主胜看得过满。",
  },
  {
    match: "海地 vs 苏格兰",
    stage: "C 组首轮",
    time: "6 月 14 日 09:00 北京时间",
    note: "截至北京时间 2026 年 6 月 13 日 12:05 仍未开赛。Guardian 报道显示苏格兰的麦克托米奈已恢复训练，球队目标是打破世界杯小组赛心魔；海地排名与纸面实力仍弱，但反击速度值得提防。",
  },
  {
    match: "澳大利亚 vs 土耳其",
    stage: "D 组首轮",
    time: "6 月 14 日 12:00 北京时间",
    note: "截至北京时间 2026 年 6 月 13 日 12:05 仍未开赛。Guardian 的球队前瞻认为澳大利亚年轻化后不再只求守住，土耳其则拥有更强技术中前场，但防线与定位球保护仍是隐患。",
  },
];

const previews = [
  {
    match: "卡塔尔 vs 瑞士",
    time: "6 月 14 日 03:00 北京时间",
    context: "卡塔尔主帅洛佩特吉公开表态不是来凑数，球队执行力与比赛韧性不会差；但从阵容成熟度、欧洲大赛经验和整体稳定性看，瑞士仍是更完整的一侧。",
    form: "这类首轮比赛通常节奏谨慎。卡塔尔更可能压缩空间后等转换，瑞士则会通过更成型的中后场出球与二线跟进寻找机会。",
    squad: "观察卡塔尔前场单点推进是否能持续撕开瑞士肋部；瑞士这边更看重中轴对抗和定位球效率，只要先手进球，比赛会明显更利于他们的控局。",
    tactic: "更合理的处理是先站在瑞士不败，保留平局兜底，避免把首轮陌生对位直接做成单边强压。",
    pick: "瑞士不败，防平局",
    score: "1 - 1",
    conservative: "瑞士平/胜",
    aggressive: "瑞士胜",
    confidence: 56,
    factors: ["首轮谨慎", "卡塔尔韧性", "瑞士结构更稳"],
  },
  {
    match: "巴西 vs 摩洛哥",
    time: "6 月 14 日 06:00 北京时间",
    context: "Guardian 赛前分析提到安切洛蒂首战压力很大，且内马尔因小腿问题缺席揭幕战。巴西纸面上限依旧更高，但摩洛哥的大赛组织度和转换质量足以让比赛保持紧绷。",
    form: "巴西仍会尝试通过边路和前场个人能力制造持续压迫，摩洛哥则更适合用中低位站位压缩空间，再在反击里找第一脚出球后的推进质量。",
    squad: "重点看维尼修斯、恩德里克一线的单兵突破能否把巴西优势兑现成高质量射门；摩洛哥这边的关键是防线宽度保护与反击第一脚处理。",
    tactic: "不建议把这场做成无保护的单挑主胜。更稳的路径仍是巴西不败框架下偏向主胜，同时预防摩洛哥把比赛拖进一球差甚至平局。",
    pick: "巴西不败，防平局",
    score: "2 - 1",
    conservative: "巴西平/胜",
    aggressive: "巴西胜",
    confidence: 55,
    factors: ["内马尔缺席", "摩洛哥韧性", "巴西上限更高"],
  },
  {
    match: "海地 vs 苏格兰",
    time: "6 月 14 日 09:00 北京时间",
    context: "Guardian 赛前报道显示苏格兰时隔 28 年重返世界杯，麦克托米奈已恢复训练；海地排名和阵容深度吃亏，但冲击型前场和直接打法会制造波动。",
    form: "苏格兰大概率会在身体对抗、二点和定位球层面占优，不过其历史包袱决定了首战不宜高估。海地如果前 20 分钟顶住，比赛会转向更胶着的低比分。",
    squad: "关注罗伯逊、麦克托米奈、麦金等核心能否把中场控制权尽快拿稳；海地方面则主要看反击速度和单点突进给苏格兰身后制造的麻烦。",
    tactic: "方向仍偏苏格兰，但需要防平。首轮心态、久违世界杯舞台和对手冲击力叠加后，净胜两球以上不宜作为默认预期。",
    pick: "苏格兰胜，防平局",
    score: "0 - 1",
    conservative: "苏格兰平/胜",
    aggressive: "苏格兰胜",
    confidence: 62,
    factors: ["麦克托米奈恢复", "海地反击", "苏格兰首战压力"],
  },
  {
    match: "澳大利亚 vs 土耳其",
    time: "6 月 14 日 12:00 北京时间",
    context: "Guardian 的澳大利亚前瞻认为球队已不再满足于守住，年轻化后节奏与冲击力更强；土耳其则拥有更成熟的技术中前场配置，但后防并不无懈可击。",
    form: "这场更像互相试探中的对冲局。澳大利亚会把比赛带到身体对抗和纵向冲刺，土耳其会尝试用脚下和中场组织把球权拉回自己脚下。",
    squad: "澳大利亚需要新一代边路和锋线把回合数打出来；土耳其则看居莱尔、伊尔迪兹、恰尔汗奥卢等核心是否能持续把优势送进禁区。",
    tactic: "赔率思路更适合把土耳其放在不败一侧，同时给平局留足空间。若临场发现澳大利亚首发过于保守，土耳其方向可适当上调。",
    pick: "土耳其不败，防平局",
    score: "1 - 1",
    conservative: "土耳其平/胜",
    aggressive: "土耳其胜",
    confidence: 52,
    factors: ["澳洲年轻化", "土耳其技术优势", "防线波动"],
  },
];

const matchBanners = [
  {
    time: "6 月 13 日 03:00 北京时间｜已完赛",
    match: "加拿大 vs 波黑",
    venue: "B 组｜小组首轮｜多伦多",
    score: "终场 1-1",
    angle: "加拿大平局打出，为两张胜平负串关奠定命中基础",
    left: "CAN",
    right: "BIH",
  },
  {
    time: "6 月 13 日 09:00 北京时间｜已完赛",
    match: "美国 vs 巴拉圭",
    venue: "D 组｜小组首轮｜洛杉矶",
    score: "终场 4-1",
    angle: "美国主胜打出，6 月 12 日两张胜平负 2 串 1 已转为中奖",
    left: "USA",
    right: "PAR",
  },
  {
    time: "6 月 14 日 03:00 北京时间",
    match: "卡塔尔 vs 瑞士",
    venue: "B 组｜小组首轮｜旧金山湾区",
    score: "预测 1-1",
    angle: "瑞士不败，优先防平",
    left: "QAT",
    right: "SUI",
  },
  {
    time: "6 月 14 日 06:00 北京时间",
    match: "巴西 vs 摩洛哥",
    venue: "C 组｜小组首轮｜纽约新泽西",
    score: "预测 2-1",
    angle: "巴西不败，但不建议裸压单边",
    left: "BRA",
    right: "MAR",
  },
  {
    time: "6 月 14 日 09:00 北京时间",
    match: "海地 vs 苏格兰",
    venue: "C 组｜小组首轮｜波士顿",
    score: "预测 0-1",
    angle: "苏格兰胜，防平局",
    left: "HAI",
    right: "SCO",
  },
  {
    time: "6 月 14 日 12:00 北京时间",
    match: "澳大利亚 vs 土耳其",
    venue: "D 组｜小组首轮｜温哥华",
    score: "预测 1-1",
    angle: "土耳其不败，比赛波动偏大",
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
    title: "稳健主推 2 串 1",
    type: "主推",
    recommended: true,
    picks: [
      "海地 vs 苏格兰：苏格兰平 / 胜",
      "卡塔尔 vs 瑞士：瑞士平 / 胜",
    ],
    reason: "两场都把更完整的一侧放在不败面，同时尊重首轮谨慎节奏。苏格兰有人员利好，瑞士整体结构更稳，适合作为主组合底仓。",
    stake: "适合作为主组合，优先控制首轮平局带来的断点风险。",
  },
  {
    title: "均衡对冲 2 串 1",
    type: "均衡",
    recommended: false,
    picks: [
      "巴西 vs 摩洛哥：巴西平 / 胜",
      "澳大利亚 vs 土耳其：土耳其平 / 胜",
    ],
    reason: "两场都不追求极端方向。巴西仍有上限优势但摩洛哥难缠，土耳其技术面更优但澳大利亚身体冲击不可低估，保护平局更合理。",
    stake: "中等仓位即可，作为主组合外的补充，不宜重压。",
  },
  {
    title: "进取强势 2 串 1",
    type: "进取",
    recommended: false,
    picks: [
      "巴西 vs 摩洛哥：巴西胜",
      "海地 vs 苏格兰：苏格兰胜",
    ],
    reason: "直接押巴西和苏格兰兑现纸面实力与阶段性准备优势，赔率更主动，但巴西场的强强对话属性和苏格兰首战心理波动都是真实风险。",
    stake: "只适合小于主组合仓位，不作为唯一主仓。",
  },
  {
    title: "比分进取小注",
    type: "高赔小注",
    recommended: false,
    picks: [
      "卡塔尔 vs 瑞士：1-1 / 1-2",
      "巴西 vs 摩洛哥：2-1 / 1-1",
      "海地 vs 苏格兰：0-1 / 1-1",
      "澳大利亚 vs 土耳其：1-1 / 1-2",
    ],
    reason: "四场都优先保留首轮常见的低比分与一球差分支，避免在信息不完全的情况下追过深的大比分剧本。",
    stake: "严格小注，只作赔率增强，不替代主组合。",
  },
  {
    title: "算法风控线",
    type: "规则",
    recommended: false,
    picks: [
      "串关先找结构最稳的两场，不强行把 4 场全串",
      "首轮优先防平，强强对话与陌生对位不做裸压",
    ],
    reason: "继续保留硬风控：已开球不推荐、关键伤停降权、串关出现任一失手关立即整票判负；今天尤其避免把巴西场和澳大利亚场同时做成高风险主胜串。",
    stake: "进取不等于加仓，主组合、小注补充、放弃高噪声场次仍是基本纪律。",
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

一、最近 24 小时赛果
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
