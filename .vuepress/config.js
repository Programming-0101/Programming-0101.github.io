module.exports = {
  title: 'Programming 0101',
  description: 'Home of the Hands-On-Tutorial (HOT) Labs', // rendered in <meta>
  markdown: {
    extendMarkdown:md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-mermaid').default) // leave default options
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'Programming-0101',
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last updated on', // string | boolean
    nav: [
        { text: 'The Book', link: 'https://programming-0101.github.io/TheBook/' },
        { text: 'About', link: '/About/' },
    ],
  },
  plugins: [
      {
          '@vuepress/pwa': {
          serviceWorker: true,
          updatePopup: true
          }
      },
      {
          '@vuepress/search': {
          searchMaxSuggestions: 10
          }
      },
      '@vuepress/back-to-top',
      '@vuepress/active-header-links',
      '@vuepress/medium-zoom',
      '@vuepress/nprogress'
  ]
}