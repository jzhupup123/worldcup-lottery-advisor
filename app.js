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

document.getElementById("briefDate").textContent = briefDate;
document.getElementById("focusMatch").textContent = "墨西哥 vs 南非";
document.getElementById("focusScore").textContent = "2 - 1";

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

  return `主题：世界杯每日赛果与赛前分析｜${briefDate}

你好，

以下是今日世界杯简报：

数据口径：${dataStamp}

一、昨日赛果
${resultText}

二、今日/下一比赛日赛前分析
${previewText}

三、当日多关组合建议
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

document.getElementById("copyBrief").addEventListener("click", copyBrief);
document.getElementById("copyBriefSmall").addEventListener("click", copyBrief);
document.getElementById("saveReview").addEventListener("click", saveCurrentReview);
document.getElementById("scoreMexico").addEventListener("input", renderLiveEvaluation);
document.getElementById("scoreKorea").addEventListener("input", renderLiveEvaluation);

renderResults();
renderAngles();
renderPreviews();
renderTicketIdeas();
renderEmail();
renderReviewStats();
