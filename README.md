# study-blog

> **Winnie 的学习博客** · 读书心得 + 工程思考
>
> 📍 **[https://dalaoyuan2020.github.io/study-blog/](https://dalaoyuan2020.github.io/study-blog/)**

---

## 这是什么

一个学习过程的记录。目前两个分类：

- 📖 **共读笔记**（`/reading/`）— 和 AI 协作者一起拆解书的过程
- ⚙️ **工程思考**（`/thinking/`）— 做项目时长出来的想法

---

## 已发布文章

| # | 标题 | 分类 | 日期 |
|---|------|------|------|
| 1 | [Harness Engineering 其实是一台热力学引擎](https://dalaoyuan2020.github.io/study-blog/reading/harness-engineering-chapter1) | 共读笔记 | 2026-04-12 |
| 2 | [几个月前 8 块钱买的 Coding Plan，现在停售了](https://dalaoyuan2020.github.io/study-blog/thinking/coding-plan-golden-age) | 工程思考 | 2026-04-13 |

---

## 技术栈

- **静态生成**：VitePress 1.6.4
- **托管**：GitHub Pages
- **自动部署**：GitHub Actions（push 到 main 即 deploy）
- **封面图**：xfyun 文生图（Qwen-Image / Z-Image-Turbo）+ HunyuanOCR 自检迭代

---

## 本地开发

```bash
git clone https://github.com/Dalaoyuan2020/study-blog
cd study-blog
npm install --registry=https://registry.npmmirror.com  # 国内必须淘宝镜像

npm run dev    # 本地预览
npm run build  # 构建验证
```

---

## 写作哲学

- **先占坑，不追求完美**
- **迭代着来，低效没关系**
- **诚实大于流畅**
- **N=1 不是经验**（写完一次不等于方法论）

---

## Claude Code 协作

如果你是 Claude Code 用户想在本项目上叠加能力或给建议，**请先读 [CLAUDE.md](./CLAUDE.md)**——那是本项目的协作接口，定义了边界、风格、外部对接契约。

---

## License

CC BY-NC-SA 4.0

---

*作者：Winnie*
