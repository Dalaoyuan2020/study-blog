---
layout: home

hero:
  name: "Winnie 的学习博客"
  text: "共读笔记 · 工程思考"
  tagline: 这里是我边读边想的地方。读得慢，想得杂，慢慢积累。
  image:
    src: /cover-harness-engine.png
    alt: 学习博客封面
  actions:
    - theme: brand
      text: 进入阅读室 →
      link: /reading/
    - theme: alt
      text: GitHub
      link: https://github.com/Dalaoyuan2020/study-blog

features:
  - icon: 📚
    title: 共读笔记
    details: 和 AI 协作者一起拆解的过程记录。不是听书，是带着自己的问题去翻译。
  - icon: ⚙️
    title: 工程思考
    details: 做项目时长出来的想法和教训。Harness Engineering 是我目前在折腾的方向。
  - icon: 🌱
    title: 慢慢迭代
    details: 不追求完美，先占坑，后面慢慢更新。这本身就是设计哲学。
---

## 📌 最新文章

### [**DIY-LLM Task 2 · PyTorch 与资源核算**](/reading/diy-llm/task2-pytorch-resource-accounting)

*DIY-LLM 课程打卡 · 2026-04-19*

> 这章教的不是技能，是**直觉**——看着代码，30 秒估出它烧多少显存、耗多少算力。
>
> 两个公式钉死一切：**训练时间 ≈ 6·N·tokens / (FLOPS·MFU)**、**训练显存 ≈ 16·N 字节**。手动验证了 16 字节公式精确命中；作业题 2 全做完——单卡 A100 训 GPT-2 XL 400K 步要 **6354 天（17 年）** 🤯

## 📚 往期

- 🔬 [**DIY-LLM Task 1 · 手搓一个分词器**](/reading/diy-llm/task1-tokenizer) — *DIY-LLM 打卡 · 2026-04-16*
- 📔 [**朋友是主动选的，不是身边凑的**](/essays/friends-chosen-not-collected) — *杂文 · 2026-04-14*
- ⚙️ [**几个月前 8 块钱买的 Coding Plan，现在停售了**](/thinking/coding-plan-golden-age) — *工程思考 · 2026-04-13*
- 📖 [**Harness Engineering 其实是一台热力学引擎**](/reading/harness-engineering-chapter1) — *推理王国第一章共读心得 · 2026-04-11*
