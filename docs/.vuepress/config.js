module.exports = {
  base: '/vue-analysis/',
  title: 'Vue.js 源码分析',
  description: '大道无形，不止于行',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: 'Home', link: '/' },
      { text: '团队', link: '/team/' },
      { text: 'GitHub', link: 'https://github.com/jd-smart-fe/vue-analysis' },
    ],
    sidebar: [
      {
        title: '准备工作',
        collapsable: false,
        children: [
            ['prepare/', 'Introduction'],
            'prepare/flow',
        ]
      }
    ]
  }
}
