module.exports = {
  title: 'Vue analysis',
  description: 'Just playing around',
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
