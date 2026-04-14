import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Winnie 的学习博客',
  description: '共读笔记 · 工程思考 · 项目心得',
  lang: 'zh-CN',
  base: '/study-blog/',
  cleanUrls: true,
  lastUpdated: true,

  // 不要把这些当作站点页面编译（CLAUDE/README/docs 是仓库级文件，不是博客内容）
  srcExclude: ['docs/**', 'README.md', 'CLAUDE.md'],

  head: [
    ['link', { rel: 'icon', href: '/study-blog/cover-harness-engine.png' }],
    ['meta', { name: 'author', content: 'Winnie' }],
  ],

  themeConfig: {
    siteTitle: 'Winnie 的学习博客',
    logo: '/cover-harness-engine.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '阅读室', link: '/reading/' },
    ],

    sidebar: {
      '/reading/': [
        {
          text: '🌟 推理王国',
          collapsed: false,
          items: [
            {
              text: '第1章 · Harness Engineering 其实是一台热力学引擎',
              link: '/reading/harness-engineering-chapter1',
            },
          ],
        },
      ],
      '/thinking/': [
        {
          text: '⚙️ 工程思考',
          collapsed: false,
          items: [
            {
              text: '几个月前 8 块钱买的 Coding Plan，现在停售了',
              link: '/thinking/coding-plan-golden-age',
            },
          ],
        },
      ],
      '/essays/': [
        {
          text: '📔 杂文',
          collapsed: false,
          items: [
            {
              text: '朋友是主动选的，不是身边凑的',
              link: '/essays/friends-chosen-not-collected',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dalaoyuan2020/study-blog' },
    ],

    footer: {
      message: '慢慢迭代，不追求完美。',
      copyright: '© 2026 Winnie · CC BY-NC-SA 4.0',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: undefined,
      },
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言',
  },

  markdown: {
    lineNumbers: false,
  },
})
