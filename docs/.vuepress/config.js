module.exports = {
  title: 'Hi Fluid',
  description: 'Born to be elegent',
  base: "/hexo-fluid-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/go/' },
      { text: '配置', link: '/common/' },
      { text: 'Github', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
    ],
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'fluid-dev/hexo-fluid-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}