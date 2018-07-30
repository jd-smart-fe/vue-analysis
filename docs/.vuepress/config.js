module.exports = {
  base: '/vue-analysis/',
  title: 'Vue.js 源码分析',
  description: '大道无形，不止于行',
  head: [
    ['link', { rel: 'icon', href: '/jd.jpg' }]
  ],
  themeConfig: {
    repo: 'jd-smart-fe/vue-analysis',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: '上次更新',
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: 'Home', link: '/' },
      { text: '团队', link: '/team/' },
      { text: 'issues', link: 'https://github.com/jd-smart-fe/vue-analysis/issues/new' }
    ],
    sidebar: [
      {
        title: '准备工作',
        collapsable: false,
        children: [
            ['prepare/', 'Introduction'],
            'prepare/structure',
            'prepare/flow',
        ]
      },
      {
        title: '数据驱动',
        collapsable: false,
        children: [
            ['chapter1/', 'Introduction'],
            'chapter1/section1.1',
        ]
      },
      {
        title: '组件化',
        collapsable: false,
        children: [
            ['chapter2/', 'Introduction'],
            'chapter2/section1.1',
        ]
      },
      {
        title: '响应式原理',
        collapsable: false,
        children: [
            ['chapter3/', 'Introduction'],
            'chapter3/section1.1',
        ]
      },
      {
        title: '编译',
        collapsable: false,
        children: [
            ['chapter4/', 'Introduction'],
            'chapter4/section1.1',
        ]
      },
      {
        title: '扩展',
        collapsable: false,
        children: [
            ['chapter5/', 'Introduction'],
            'chapter5/section1.1',
        ]
      },
      {
        title: 'Vue Router',
        collapsable: false,
        children: [
            ['chapter6/', 'Introduction'],
            'chapter6/section1.1',
        ]
      },
      {
        title: 'Vuex',
        collapsable: false,
        children: [
            ['chapter7/', 'Introduction'],
            'chapter7/section1.1',
        ]
      }
    ]
  }
}
