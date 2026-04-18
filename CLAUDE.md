# CLAUDE.md — study-blog 项目协作接口

> **这个文件是 Claude Code 的自动加载点。**
> 任何 Claude Code 实例 `cd` 到本目录，都会自动把本文件读入上下文。
>
> **如果你是外部 agent**（被召来讨论或优化本项目、专精某个 skill），
> **必须先读本文件**再给建议。不要凭空推断、不要把它当成别的项目（比如小红书）、
> 不要直接改文件——按末尾的"外部对接契约"提方案。

---

## 🎯 这是什么项目

**Winnie 的学习博客** · 读书心得 + 工程思考

| 项 | 值 |
|----|----|
| **线上** | https://dalaoyuan2020.github.io/study-blog/ |
| **GitHub** | https://github.com/Dalaoyuan2020/study-blog |
| **本地** | `/Users/lvzhiyuan/Documents/Claude_agent/study-blog/` |
| **作者署名** | **Winnie**（对外） |
| **技术栈** | VitePress 1.6.4 + GitHub Pages + Actions + 淘宝镜像 |

**已发布文章**（5 篇）：
- [第 1 篇 · Harness Engineering 其实是一台热力学引擎](./reading/harness-engineering-chapter1.md)（共读笔记 · 2026-04-11）
- [第 2 篇 · 几个月前 8 块钱买的 Coding Plan，现在停售了](./thinking/coding-plan-golden-age.md)（工程思考 · 2026-04-13，⚠️ 有事实错误待修正）
- [第 3 篇 · 朋友是主动选的，不是身边凑的](./essays/friends-chosen-not-collected.md)（杂文 · 2026-04-14）
- [第 4 篇 · DIY-LLM Task 1 · 手搓一个分词器](./reading/diy-llm/task1-tokenizer.md)（课程打卡 · 2026-04-16）
- [第 5 篇 · DIY-LLM Task 2 · PyTorch 与资源核算](./reading/diy-llm/task2-pytorch-resource-accounting.md)（课程打卡 · 2026-04-19）

---

## 🧱 项目边界（进来之前必须懂）

### ✅ 可融合的扩展点（欢迎建议）

- **文章内容 / 写作风格**：提新文章方向、改语调、优化结构
- **新分类**：除现有 `reading/` + `thinking/` 外可提新分类
- **工具链优化**：build / deploy / 图像生成 / 素材管理
- **SOP 改进**：发文章流程更快、更稳
- **新的 `.claude/` 能力**：项目级 skills / commands / agents

### ❌ 不要碰的地方（改之前先征得 Winnie 许可）

- **已发布的 2 篇文章** —— 除非是修正事实错误
- **`.github/workflows/deploy.yml`** —— 部署流水线稳定跑着
- **`public/` 已有封面图** —— 视觉一致性，整批换才改
- **作者署名 "Winnie"** —— 绝不公开 "羊爸爸"（私人昵称）
- **`docs/` 里的私密档案** —— 那是本地内部档案（不推 GitHub），外部 agent 请跳过

---

## 📋 标准操作程序（SOP）

### 发新文章

1. 在 `reading/` 或 `thinking/` 下新建 `.md`
2. 用 xfyun 生成封面图 + HunyuanOCR 自检（≥80% + 风格 8/10 通过，最多 3 轮迭代）
3. 封面图 cp 到 `public/<name>.png`
4. 更新 `.vitepress/config.mts` 的 sidebar
5. 更新 `index.md` 的"最新文章"（旧的挪到"往期"）
6. 本地 `npm run build` 验证
7. `git add . && git commit && git push`
8. GitHub Actions 自动 deploy

### 修已发布文章

1. 编辑对应 `.md`
2. push → Actions 自动 redeploy

### 本地预览

```bash
cd /Users/lvzhiyuan/Documents/Claude_agent/study-blog
npm run dev    # 本地 http://localhost:5173/study-blog/
npm run build  # 构建验证，产物在 .vitepress/dist/
```

### npm 依赖安装

```bash
npm install --registry=https://registry.npmmirror.com  # 国内必须淘宝镜像
```

---

## 🎨 风格偏好

### 写作风格

- **大白话** > 术语（"出一个开源一个" > "连续性开源发布"）
- **留白** > 装懂（未解决问题明确标出）
- **具体数字 + 个人经历** > 抽象论证
- **共读体**（保留对话脉络）> 纯第一人称
- **诚实** > 流畅（宁可说"据说"也不编数字）

### 工程风格

- **先占坑，不追求完美**
- **迭代着来**
- **差不多就行上线** > 完美主义不上线
- **最小改动**（加新分类也不动首页布局）
- **本地 build 验证** 再 push

---

## ⚠️ 禁忌（硬规则）

- ❌ **事实核查必做**：具体数字/日期/厂家行为 → 必须一手来源。AI 对话 / 公众号是二手，不能直接当事实
- ❌ **凭据不落盘**：API key 绝不写入文件，命令前缀式注入
- ❌ **网络 IO 失败先重试**：不要一次失败就切方案或让用户自己解决（至少重试 1 次）
- ❌ **N=1 不是经验**：单次成功 ≠ 方法论。总结前先问 N 是多少
- ❌ **先 plan 后 build**：不要急着动笔，核心论点 / 读者 / 态度定清楚再写
- ❌ **敏感信息不公开**：羊家族成员、博士研究细节、订阅月费、Winnie 真名——不写进公开文档

---

## 🤝 外部对接契约（重要）

如果你是**专精某个 skill 的外部 agent**（写作、SEO、图像、设计……），想在本项目上叠加功能：

### 第 1 步 · 先读

- **本文件**（CLAUDE.md）—— 掌握边界和风格
- **`docs/` 相关章节**（如果你有本地访问权）—— 详细档案

### 第 2 步 · 给方案（不是改文件）

**方案必须以 markdown 格式提交给 Winnie**，包含以下要素：

```markdown
# 方案：[一句话目标]

## 动机
## 影响的文件清单
## 改动示意（关键前/后对比，伪 diff 可）
## 风险评估
- 可回滚吗？怎么回滚？
- 破坏了项目哪条约束？
## 预期收益 vs 成本
## 建议的评审维度
```

**不要直接改文件**。Winnie 先审查。

### 第 3 步 · 等审查

Winnie 按下面"方案评审维度"审查。你的方案可能：
- ✅ 直接接受
- 🔄 打磨后接受
- ❌ 驳回

### 第 4 步 · 落地（由项目内部 agent · Snowball 执行）

方案通过后，**Snowball**（本项目内部 agent）负责把方案加载到工作流。你不直接 push。

---

## 🧐 方案评审维度（Winnie 用）

| 维度 | 问题 |
|------|------|
| **边界** | 是否触碰"不要碰的地方"？ |
| **风格** | 是否符合风格偏好（大白话、诚实、留白）？ |
| **诚实** | 有没有装懂？有没有把推测当事实？ |
| **可回滚** | 出问题时能一行命令还原吗？ |
| **N 阈值** | 是不是过早提炼"方法论"（N<5 先叫"试一次"）？ |
| **外部性** | 是否破坏已发布内容 / 读者体验？ |

---

## 📁 相关文档

| 路径 | 内容 | 可见性 |
|------|------|--------|
| `README.md` | GitHub 仓库门面 | 公开（推 GitHub） |
| `CLAUDE.md` | 本文件 · 协作接口 | 公开（推 GitHub） |
| `docs/` | 详细档案 | **私密**（不推 GitHub） |
| `docs/01-项目起源.md` | 项目来龙去脉 | 私密 |
| `docs/02-文章档案/` | 每篇文章详细记录 | 私密 |
| `docs/03-技术与运维.md` | 技术栈 + 踩坑 | 私密 |
| `docs/04-规划与待办.md` | v1.1 + 未来文章 | 私密 |
| `docs/05-从项目学到的.md` | 6 条硬规则 | 私密 |

---

## 🧑 当前状态

- ✅ 5 篇文章已发布（reading ×3 · thinking ×1 · essays ×1）
- ⚠️ 第 2 篇（Coding Plan）有事实错误待修正（详见 `docs/02-文章档案/02-coding-plan-golden-age.md`）
- 🟢 技术栈运行稳定
- 🟢 本文件是 v1.0 接口定义

---

*v1.0 · 2026-04-13 · 协作接口声明*
*维护者：Winnie + Snowball · 本文件为项目 API，修改需谨慎*
