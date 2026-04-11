import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Winnie 的学习博客',
  description: '共读笔记 · 工程思考 · 项目心得',
  lang: 'zh-CN',
  base: '/study-blog/',
  cleanUrls: true,
  lastUpdated: true,

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
