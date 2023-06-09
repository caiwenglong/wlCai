import type { NavLink } from '../components/type'

interface NavData {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '框架',
    items: [
      {
        icon: 'https://api.iowen.cn/favicon/mobiview.pro.png',
        title: 'Mobiview.pro',
        desc: 'Preview and share your site with mobile style',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9tb2Jpdmlldy5wcm8v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/julesblom.com.png',
        title: 'React API 地图',
        desc: '一种学习 React API 的方法，即通过将其组织成一个空间地图来帮助理解。作者将 React 的不同部分联系在一起，形成了一个可供探索的结构，并在 “推荐阅读” 部分中添加了一些经过筛选的优质博客文章链接，以便更好地理解 React API',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9qdWxlc2Jsb20uY29tL3dyaXRpbmcvbWFwLW9mLXJlYWN0LWFwaQ%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.techempower.com.png',
        title: '框架性能对比',
        desc: '前端技术选型工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cudGVjaGVtcG93ZXIuY29tL2JlbmNobWFya3MvI3NlY3Rpb249ZGF0YS1yMjE%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openbase.com.png',
        title: '前端技术选型工具',
        desc: '&nbsp;',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9vcGVuYmFzZS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/regexr.com.png',
        title: 'RegExr',
        desc: 'RegExr: Learn, Build, &amp; Test RegEx 好用的正则工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9yZWdleHIuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/vue-next-template-explorer.netlify.app.png',
        title: 'vue3模板解析',
        desc: 'Vue 3 Template Explorer vue3模板解析',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly92dWUtbmV4dC10ZW1wbGF0ZS1leHBsb3Jlci5uZXRsaWZ5LmFwcA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/microsoft.github.io.png',
        title: 'monaco-editor',
        desc: 'Monaco Editor 是一个浏览器端的代码编辑器库，同时它也是 VS Code 所使用的编辑器。Monaco Editor 可以看作是一个编辑器控件，只提供了基础的编辑器与语言相关的接口，可以被用于任何基于 Web 技术构建的项目中，而 VS Code 包含了文件管理、版本控制、插件等功能，是一款桌面软件。Monaco Editor 的 GitHub 仓库中不包含任何实际功能代码，因为其源代码与 VS Code 在同一个仓库，只是在版本发布时会构建出独立的编辑器代码',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL21vbmFjby1lZGl0b3IvaW5kZXguaHRtbA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/babeljs.io.png',
        title: '在线尝试Babel编译',
        desc: '在线尝试Babel编译',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iYWJlbGpzLmlvL3JlcGw%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/prettier.io.png',
        title: 'Prettier Playground',
        desc: 'Prettier Playground代码美化',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9wcmV0dGllci5pby9wbGF5Z3JvdW5kLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/npm.runkit.com.png',
        title: 'NPM Runkit',
        desc: 'NPM Runkit在浏览器中快速学习及尝试Node.js模块',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9ucG0ucnVua2l0LmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/latentflip.com.png',
        title: '在线看代码流程loupe',
        desc: '可以在线看代码流程的网站：loupe',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2xhdGVudGZsaXAuY29tL2xvdXBl'
      },
      {
        icon: 'https://api.iowen.cn/favicon/animista.net.png',
        title: '按需定制 CSS 动画效果',
        desc: '按需定制 CSS 动画效果',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9hbmltaXN0YS5uZXQvP3NwbT1hMmM2aC4xMjg3MzYzOS5hcnRpY2xlLWRldGFpbC4xOS4yN2Q5NjNhM0hIbXd0SQ%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lhammer.cn.png',
        title: 'css的各种效果实现',
        desc: 'css的各种效果实现（尤其是动画效果）',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9saGFtbWVyLmNuL1lvdS1uZWVkLXRvLWtub3ctY3NzLyMv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/loading.io.png',
        title: 'loading.io',
        desc: '各种各样的loading效果',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2xvYWRpbmcuaW8v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cssgrid-generator.netlify.app.png',
        title: 'cssgrid-generator',
        desc: 'css grid网格布局生成器',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jc3NncmlkLWdlbmVyYXRvci5uZXRsaWZ5LmFwcC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/9elements.github.io.png',
        title: '花式半径生成器',
        desc: '通过拖拽的形式生成需要的border radius',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly85ZWxlbWVudHMuZ2l0aHViLmlvL2ZhbmN5LWJvcmRlci1yYWRpdXMv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/shadows.brumm.af.png',
        title: 'Smooth Shadow',
        desc: '通过拖拽的形式生成需要的border radius',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zaGFkb3dzLmJydW1tLmFmLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.mipcode.com.png',
        title: 'Mipcode在线编码',
        desc: 'Mipcode是一款面向开发者、艺术家、设计师、创作者的社交开发环境，助力我们一起用编码连接想法与创意。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5taXBjb2RlLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/sentry.io.png',
        title: 'sentry监控系统',
        desc: 'sentry是一个开源的监控系统,能支持服务端与客户端的监控,还有个强大的后台错误分析、报警平台',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zZW50cnkuaW8vd2VsY29tZS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'awesome-vite',
        desc: '⚡️ A curated list of awesome things related to Vite.js',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy9hd2Vzb21lLXZpdGU%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.cs.usfca.edu.png',
        title: '数据结构可视化',
        desc: '数据结构可视化',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuY3MudXNmY2EuZWR1L35nYWxsZXMvdmlzdWFsaXphdGlvbi9BbGdvcml0aG1zLmh0bWw%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '200行代码实现区块链',
        desc: '简单，适合练习基础语法、理解区块链概念',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL2xoYXJ0aWtrL25haXZlY2hhaW4%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '50个纯原生练手小网站',
        desc: '简单、碎片化，可以查看 demo、自由选择适合自己的网站，适合新手练手',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL2JyYWR0cmF2ZXJzeS81MHByb2plY3RzNTBkYXlz'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'monaco-editor',
        desc: 'A browser based code editor',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9y'
      },
      {
        icon: 'https://api.iowen.cn/favicon/chinese.freecodecamp.org.png',
        title: 'freeCodeCamp 的课程',
        desc: '免费学习编程 - Python、JavaScript、Java、Git 等',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jaGluZXNlLmZyZWVjb2RlY2FtcC5vcmcvbGVhcm4v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/vue-apollo.netlify.app.png',
        title: 'Vue Apollo',
        desc: '? 在你的 Vue.js 应用中集成 GraphQL！',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly92dWUtYXBvbGxvLm5ldGxpZnkuYXBwL3poLWNuLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/graphql.cn.png',
        title: 'graphql中文文档',
        desc: 'GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9ncmFwaHFsLmNuLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'CloudBase一站式云端内容管理系统',
        desc: '一站式云端内容管理系统 - An open source Node.js headless cms based on CloudBase',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL1RlbmNlbnRDbG91ZEJhc2UvY2xvdWRiYXNlLWV4dGVuc2lvbi1jbXM%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/webify.cloudbase.net.png',
        title: '云开发 Webify',
        desc: '云开发 Webify：专为 Web 开发者打造的应用托管平台，极速开发、部署、上线',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93ZWJpZnkuY2xvdWRiYXNlLm5ldC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/docs.cloudbase.net.png',
        title: '云开发 CloudBase',
        desc: '首页 | 云开发 CloudBase - 一站式后端云服务',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kb2NzLmNsb3VkYmFzZS5uZXQv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '腾讯云开发云原生一体化部署工具',
        desc: '腾讯云开发云原生一体化部署工具 ? CloudBase Framework：一键部署，不限框架语言，云端一体化开发，基于Serverless 架构',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL1RlbmNlbnQvY2xvdWRiYXNlLWZyYW1ld29yaw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/lowcode-engine.cn.png',
        title: '阿里低代码引擎',
        desc: '基于 Low-Code Engine 快速打造高生产力的低代码研发平台',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9sb3djb2RlLWVuZ2luZS5jbi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/serverlesscloud.cn.png',
        title: 'serverless中文网',
        desc: 'serverlesscloud中文网',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zZXJ2ZXJsZXNzY2xvdWQuY24v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cnodejs.org.png',
        title: 'Node专业中文社区',
        desc: 'CNode：Node.js专业中文社区',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbm9kZWpzLm9yZy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cool-js.com.png',
        title: 'COOL',
        desc: '一个项目用COOL就够了',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jb29sLWpzLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/procomponents.ant.design.png',
        title: 'ProComponents',
        desc: 'ProComponents 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD 页面的效率，更加专注于页面',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9wcm9jb21wb25lbnRzLmFudC5kZXNpZ24vY29tcG9uZW50cw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/antv.gitee.io.png',
        title: 'antv文档',
        desc: 'antv产品中文文档',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9hbnR2LmdpdGVlLmlvL3po'
      },
      {
        icon: 'https://api.iowen.cn/favicon/gitpod.io.png',
        title: 'Gitpod运行Github代码',
        desc: 'Gitpod 是一个基于 Chorom Cloud 平台的在线 IDE，它可以快速的启动一个基于大多数流行语言的开发环境，并且可以很顺畅的进行开发。无论您只是想要修改代码、查看代码，还是想在 GitHub 上尝试新东西，Gitpod 都可以通过单击启动一个现成的代码开发环境。  因为 Gitpod 是基于 VS Code、Docker 和 Kubernetes 等 OSS 技术，所以它熟悉、全面、可扩展且易于使用。通过深入的 GitHub 集成、用于共享的工具和对可用性的关注，Gitpod 将您的整个开发工作流程包含在一个浏览器选项卡中。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRwb2QuaW8v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cn.aliyun.com.png',
        title: '阿里Node性能监控平台',
        desc: 'Node.js 性能平台（Node.js Performance Platform）是面向中大型 Node.js 应用提供性能监控、安全提醒、故障排查、性能优化等服务的整体性解决方案。凭借对 Node.js 内核深入的理解，我们提供完善的工具链和服务，协助客户主动、快速发现和定位线上问题',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbi5hbGl5dW4uY29tL3Byb2R1Y3Qvbm9kZWpz'
      },
      {
        icon: 'https://api.iowen.cn/favicon/guide.aotu.io.png',
        title: '前端代码规范',
        desc: 'Front-End Coding Guidelines',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9ndWlkZS5hb3R1LmlvLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '一个很棒的Flutter学习资源',
        desc: 'https://github.com/crazycodeboy/awesome-flutter-cn',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL2NyYXp5Y29kZWJveS9hd2Vzb21lLWZsdXR0ZXItY24%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.zhihu.com.png',
        title: '前端开发mac配置',
        desc: '2022年前端开发mac配置 Mac Setup for Web Development [2022]',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuemhpaHUuY29tL3F1ZXN0aW9uLzI0NTAxNjYzL2Fuc3dlci8yNTEzMTI0NTYy'
      },
      {
        icon: 'https://api.iowen.cn/favicon/baseline.is.png',
        title: 'CSS Photo Filters',
        desc: 'CSS Photo Filters 是一个CSS图片滤镜工具，提供了 36 个 CSS 过滤器供我们使用。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iYXNlbGluZS5pcy90b29scy9jc3MtcGhvdG8tZmlsdGVycy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/textpop3d.web.app.png',
        title: '3DPop',
        desc: '可以使用 CSS 生成很棒的 3D 文本效果。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90ZXh0cG9wM2Qud2ViLmFwcC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/gra.dient.art.png',
        title: 'CRADIENT.ART',
        desc: 'CRADIENT.ART 是一个高级 CSS 渐变编辑器，使用带有分层、设计工具和免费云存储的功能丰富的编辑器设计插图、图案、图标等。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9ncmEuZGllbnQuYXJ0Lw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.minifier.org.png',
        title: 'Minifier',
        desc: 'Minifier 可以对 JavaScript 和 CSS 代码进行压缩，通过缩小可以提高网站加载速度。Minifier 通过删除 .js 和 .css 文件中的空白并重新格式化它们以减小大小。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cubWluaWZpZXIub3JnLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/unminify.com.png',
        title: 'Unminify',
        desc: '使用 Unminify 可以使 .js 或 .css 文件可读。这两种工具都非常容易使用。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly91bm1pbmlmeS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/svgwave.in.png',
        title: '创建 SVG 波形背景',
        desc: 'Generate SVG Waves 可以用来创建 SVG 波形背景。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zdmd3YXZlLmluLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.wavesnippets.com.png',
        title: 'Wavesnippets',
        desc: 'Wavesnippets 可以将代码分步设置为动画、视频或 GIF。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cud2F2ZXNuaXBwZXRzLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bgjar.com.png',
        title: 'BGJar',
        desc: 'BGJar 是一个在线工具，可以轻松快速地为网站创建 SVG 背景。只需编辑必要的信息，它将自动导出图像或代码供我们应用到网站。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iZ2phci5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/svg-path-visualizer.netlify.app.png',
        title: 'SVG Path Visualizer',
        desc: 'SVG Path Visualizer 可以帮助我们通过输入 SVG 路径数据来快速直观地查看 SVG 图像。此外，该工具还提供了详细的说明，以便了解如何创建基本的 SVG 形状，如直线、曲线、三角形等。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zdmctcGF0aC12aXN1YWxpemVyLm5ldGxpZnkuYXBwLyNNMTQwJTIwMjBDNzMlMjAyMCUyMDIwJTIwNzQlMjAyMCUyMDE0MGMwJTIwMTM1JTIwMTM2JTIwMTcwJTIwMjI4JTIwMzAzJTIwODgtMTMyJTIwMjI5LTE3MyUyMDIyOS0zMDMlMjAwLTY2LTU0LTEyMC0xMjAtMTIwLTQ4JTIwMC05MCUyMDI4LTEwOSUyMDY5LTE5LTQxLTYwLTY5LTEwOC02OXo%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pavellaptev.github.io.png',
        title: 'Wrap SVG Online',
        desc: 'Wrap SVG Online 通过拖放从计算机上传图像，可以轻松地编辑网页的 SVG 图像。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9wYXZlbGxhcHRldi5naXRodWIuaW8vd2FycC1zdmcv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/runjs.app.png',
        title: 'RUNJS',
        desc: 'RunJS 是一个桌面应用程序，可帮助我们编写专门的 Javascript 和 Typescript 代码。它的一些优势是可以快速测试代码，轻松导入和测试库代码，并且能够修改界面、主题和字体以适应偏好。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9ydW5qcy5hcHAv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/latentflip.com.png',
        title: 'JS调用栈如何执行可视化',
        desc: 'Loupe 是一个可视化工具，可帮助我们了解 JavaScript 的调用堆栈/事件循环/回调队列是如何执行的。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2xhdGVudGZsaXAuY29tL2xvdXBlLz9jb2RlPUpDNXZiaWduWW5WMGRHOXVKeXdnSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnYjI1RGJHbGpheWdwSUhzS0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRnZEdsdFpYSW9LU0I3Q2lBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb0oxbHZkU0JqYkdsamEyVmtJSFJvWlNCaWRYUjBiMjRoSnlrN0lDQWdJQW9nSUNBZ2ZTd2dNakF3TUNrN0NuMHBPd29LWTI5dWMyOXNaUzVzYjJjb0lraHBJU0lwT3dvS2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQjBhVzFsYjNWMEtDa2dld29nSUNBZ1kyOXVjMjlzWlM1c2IyY29Ja05zYVdOcklIUm9aU0JpZFhSMGIyNGhJaWs3Q24wc0lEVXdNREFwT3dvS1kyOXVjMjlzWlM1c2IyY29JbGRsYkdOdmJXVWdkRzhnYkc5MWNHVXVJaWs3ISEhUEdKMWRIUnZiajVEYkdsamF5QnRaU0U4TDJKMWRIUnZiajQlM0Q%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/regex-vis.com.png',
        title: '正则可视化编辑',
        desc: '正则表达式可视化器和编辑器。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9yZWdleC12aXMuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/websemantics.uk.png',
        title: 'Fluid-responsive font-size calculator',
        desc: 'Fluid-responsive font-size calculator 即响应式字体计算器，可以轻松创建流畅的排版体验。它有更广泛的支持，可以用几行 CSS 来实现。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93ZWJzZW1hbnRpY3MudWsvdG9vbHMvcmVzcG9uc2l2ZS1mb250LWNhbGN1bGF0b3Iv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/layout.bradwoods.io.png',
        title: 'CSS Layout Generator',
        desc: 'CSS Layout Generator 布局生成器可以为布局组件创建 CSS 和 HTML 的工具。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9sYXlvdXQuYnJhZHdvb2RzLmlvLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cssgrid-generator.netlify.app.png',
        title: 'Grid 布局生成器',
        desc: 'Grid Generator 是一个 Grid 布局生成器，通过这个工具可以快速创建自定义CSS Grid布局',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jc3NncmlkLWdlbmVyYXRvci5uZXRsaWZ5LmFwcC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bennettfeely.com.png',
        title: '裁剪路径生成器',
        desc: 'CSS cli-path 功能能够构建复杂的形状，该工具让我们可以轻松地以交互方式构建该多边形。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iZW5uZXR0ZmVlbHkuY29tL2NsaXBweS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mybrandnewlogo.com.png',
        title: 'My Brand New Logo',
        desc: 'My Brand New Logo 是一个CSS 调色板生成器，用来创建一致的调色板方案。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9teWJyYW5kbmV3bG9nby5jb20vY29sb3ItcGFsZXR0ZS1nZW5lcmF0b3I%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/html-css-js.com.png',
        title: 'css generator',
        desc: '这是一个实用的 CSS 生成器，可以实时查看调试效果。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9odG1sLWNzcy1qcy5jb20vY3NzL2dlbmVyYXRvci8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/ui.dev.png',
        title: 'Am I Responsive测试设备响应式',
        desc: 'Am I Responsive 用来测试响应式网页。输入链接即可生成预览，Am I Responsive 能帮我们测试出页面在手机、平板电脑、笔记本电脑和桌面端设备上的浏览体验。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly91aS5kZXYvYW1pcmVzcG9uc2l2ZQ%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.cssmatic.com.png',
        title: 'CSS matic',
        desc: 'CSS matic 是一个 CSS 工具，目前包含4个很有用的工具，分别是：支持各种颜色和透明度的渐变工具，使用渐变工具，可以创建渐变平滑的色彩变化效果和微妙的透明胶片；边框圆角工具可以帮助你方便的实现需要的圆角效果；噪声纹理可以帮助你创造奇妙的背景图案，能够实时预览结果；盒阴影工具可以控制模糊半径的变化，颜色变化，阴影大小，可以实现你想要的任何效果。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuY3NzbWF0aWMuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cssgradient.io.png',
        title: 'CSS Gradient',
        desc: 'CSS Gradient 是一个用来快速方便的创建 CSS 渐变的网站。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jc3NncmFkaWVudC5pby8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bansal.io.png',
        title: 'pattern-css',
        desc: 'pattern-css可以用漂亮的图案填充空白背景。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iYW5zYWwuaW8vcGF0dGVybi1jc3M%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/omatsuri.app.png',
        title: 'Omatsuri',
        desc: 'Omatsuri 是一个开源项目，包含12个实用的前端工具。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9vbWF0c3VyaS5hcHAv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/keyframes.app.png',
        title: 'Keyframes创建动画',
        desc: 'Keyframes 可以用来创建动画、阴影和使用颜色，帮助我们编写更好的CSS。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9rZXlmcmFtZXMuYXBwLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/openbase.com.png',
        title: '前端技术选型神器',
        desc: 'Openbase 的使命就是帮助开发人员在数百万个开源包中进行选择。它是第一个为软件包提供用户评论、强大的洞察力和开源软件包分类的平台。Openbase 的搜索引擎使开发人员能够根据他们使用的特定框架过滤搜索结果，例如 React、Vue , Node等。目前 Openbase 支持六种编程语言（Go、Java、JavaScript、Python、Rust 和 Swift）。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9vcGVuYmFzZS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '低代码平台集合',
        desc: '国内低代码平台从业者交流',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL3Rhb3dlbi9hd2Vzb21lLWxvd2NvZGU%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cn.windicss.org.png',
        title: 'windicss',
        desc: 'Windi CSS 下一代工具类 CSS 框架。Windi CSS 是从零开始编写的 Tailwind CSS 的替代方案。它的零依赖，也不要求用户安装 PostCSS 和 Autoprefixer。更为重要的是，它支持 按需生成。Windi CSS 不会一次生成所有的 CSS，而是只会生成你在代码中实际使用到的原子化 CSS。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbi53aW5kaWNzcy5vcmcv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tailwindcss.com.png',
        title: 'tailwindcss',
        desc: 'tailwindcss 原子化css框架',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90YWlsd2luZGNzcy5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.jsons.cn.png',
        title: 'Json在线解析格式化',
        desc: 'Json在线解析格式化工具:提供Json在线解析器,Json格式化,Json序列化,Json解析,Json校验,Json压缩,Json转xml,在线Json格式化,并提供多种Json在线解析格式化工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5qc29ucy5jbi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/landing.ant.design.png',
        title: 'Ant Design Landing低代码生成首页等',
        desc: 'Ant Design Landing 平台拥有丰富的各类首页模板，下载模板代码包，即可快速使用，也可使用首页编辑器，快速搭建一个属于你的专属首页',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9sYW5kaW5nLmFudC5kZXNpZ24vaW5kZXgtY24%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'roadmap学习路线',
        desc: '编程学习路线',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL2thbXJhbmFobWVkc2UvZGV2ZWxvcGVyLXJvYWRtYXA%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/xrender.fun.png',
        title: 'xrender表单解决方案',
        desc: '阿里巴巴 - 飞猪中后台「表单/表格/图表」开箱即用解决方案',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly94cmVuZGVyLmZ1bi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/jeecg.com.png',
        title: 'JeecgBoot低代码平台',
        desc: 'JeecgBoot是一款基于BPM的低代码平台！前后端分离架构 SpringBoot 2.x，SpringCloud，Ant Design&amp;Vue，Mybatis-plus，Shiro，JWT，支持微服务。强大的代码生成器让前后端代码一键生成，实现低代码开发！ JeecgBoot引领新低代码开发模式 OnlineCoding-&gt; 代码生成器-&gt; 手工MERGE， 帮助Java项目解决70%的重复工作，让开发更多关注业务，既能快速提高效率，节省研发成本，同时又不失灵活性！一系列低代码能力：Online表单、Online报表、Online图表、表单设计、流程设计、报表设计、大屏设计 等等...',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2plZWNnLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.imgcook.com.png',
        title: 'imgcook 设计稿智能生成代码',
        desc: 'imgcook 由设计稿一键智能生成代码的大厨',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuaW1nY29vay5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/code.fun.png',
        title: 'codeFun设计稿智能生成前端源代码',
        desc: 'UI 设计稿智能生成前端源代码 8 小时工作量，10 分钟完成',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jb2RlLmZ1bi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/microsoft.github.io.png',
        title: 'monaco-editor',
        desc: '代码编辑、高亮、格式化等功能',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL21vbmFjby1lZGl0b3Iv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.finclip.com.png',
        title: 'finclip',
        desc: '让你的APP具备微信才拥有的小程序技术能力',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuZmluY2xpcC5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/aisuda.bce.baidu.com.png',
        title: '百度amis低代码生成',
        desc: 'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9haXN1ZGEuYmNlLmJhaWR1LmNvbS9hbWlzL3poLUNOL2RvY3MvaW5kZXg%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/beta.reactjs.org.png',
        title: 'react 交互式学习',
        desc: 'reactjs交互式文档学习',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9iZXRhLnJlYWN0anMub3JnL2xlYXJu'
      },
      {
        icon: 'https://api.iowen.cn/favicon/sfc.vuejs.org.png',
        title: 'vue sfc在线编程',
        desc: 'vue sfc',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zZmMudnVlanMub3JnLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tool.lu.png',
        title: '时间戳(Unix timestamp)转换工具',
        desc: '时间戳(Unix timestamp)转换工具 - 在线工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90b29sLmx1L3RpbWVzdGFtcC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tool.lu.png',
        title: 'curl命令转代码',
        desc: 'curl命令转代码 - 在线工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90b29sLmx1L2N1cmwv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/text-compare.com.png',
        title: '在线文本对比',
        desc: '文本比较！——一个可以找出两个文本文件差异的在线差异比较工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90ZXh0LWNvbXBhcmUuY29tL3poLWhhbnMv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tool.lu.png',
        title: '在线代码测试',
        desc: '在线代码测试',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90b29sLmx1L2NvZGVydW5uZXIv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tool.lu.png',
        title: '图片base64编码 - 在线工具',
        desc: '图片base64编码 - 在线工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90b29sLmx1L2Jhc2U2NGltYWdlLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.lingdaima.com.png',
        title: '零代码工具箱 - 专为前端打造',
        desc: '各种前端实用的好工具，杜绝造轮子，每款工具都经过精心打磨，帮助所有程序员提高前端开发效率',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cubGluZ2RhaW1hLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/stackblitz.com.png',
        title: 'stackblitz编辑器',
        desc: '在线编辑器，可以运行node、vue、react等',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zdGFja2JsaXR6LmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: '冴羽的博客',
        desc: '冴羽写博客的地方，预计写四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL21xeXFpbmdmZW5nL0Jsb2c%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/next.umijs.org.png',
        title: 'umi4文档',
        desc: '一款 插件化 的 企业级前端应用框架 以路由为基础，同时支持配置式路由和约定式路由，配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9uZXh0LnVtaWpzLm9yZy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.recoiljs.cn.png',
        title: 'Recoil 中文文档',
        desc: 'Recoil 是一个 React 状态管理库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cucmVjb2lsanMuY24v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/serverlessdevs.resume.net.cn.png',
        title: '阿里云serverless devs文档',
        desc: '阿里云 serverless devs',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zZXJ2ZXJsZXNzZGV2cy5yZXN1bWUubmV0LmNuL3poLWNuL2RvY3MvaW50cm8uaHRtbA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cn.serverless.com.png',
        title: '腾讯云Serverless',
        desc: 'Serverless 基于腾讯云的一站式开发工具 &amp; 自动扩容的应用监控平台',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbi5zZXJ2ZXJsZXNzLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tdesign.tencent.com.png',
        title: 'tdesign',
        desc: 'TDesign - 腾讯开源的企业级设计体系',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90ZGVzaWduLnRlbmNlbnQuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mqyqingfeng.gitee.io.png',
        title: 'learn-typescript',
        desc: '冴羽的TypeScript4 中文文档',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9tcXlxaW5nZmVuZy5naXRlZS5pby9sZWFybi10eXBlc2NyaXB0Lw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/v2.vuepress.vuejs.org.png',
        title: 'vuepress v2版本',
        desc: 'vuepress v2版本',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly92Mi52dWVwcmVzcy52dWVqcy5vcmcvemgv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/flutterchina.club.png',
        title: 'Flutter',
        desc: '谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9mbHV0dGVyY2hpbmEuY2x1Yi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.w3cschool.cn.png',
        title: 'Swift API 文档',
        desc: 'Swift API 文档',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cudzNjc2Nob29sLmNuL3N3aWZ0Lw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/developer.apple.com.png',
        title: 'iOS API 文档',
        desc: 'iOS API 文档',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/flutterawesome.com.png',
        title: 'Flutter Awesome',
        desc: '一个有用的Flutter 框架、库和源码的集合。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9mbHV0dGVyYXdlc29tZS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        title: 'varlet',
        desc: 'Varlet是一个基于Vue3开发的Material风格移动端组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9naXRodWIuY29tL2hhb3ppcWFxL3ZhcmxldA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bugly.qq.com.png',
        title: 'Bugly',
        desc: '腾讯Bugly。为移动开发者提供专业的异常上报和运营统计，帮助开发者快速发现并解决异常，同时掌握产品运营动态，及时跟进用户反馈。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9idWdseS5xcS5jb20vdjIv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/hippyjs.org.png',
        title: 'Hippy',
        desc: '为前端开发人员设计的跨端框架，支持 React 和 Vue 两种语法。Hippy 可以理解为一个精简版的浏览器，从底层做了大量工作，抹平了 iOS 和 Android 双端差异，提供了接近 Web 的开发体验，目前上层支持了 React 和 Vue 两套界面框架，前端开发人员可以通过它，将前端代码转换为终端的原生指令，进行原生终端 App 的开发。  同时，Hippy 从底层进行了大量优化，在启动速度、可复用列表组件、渲染效率、动画速度、网络通信等等都提供了业内顶尖的性能表现。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9oaXBweWpzLm9yZy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.teamcube.cn.png',
        title: 'teamcube',
        desc: '低代码开发平台。协助企业团队提升效能，降低研发生产成本；赋能企业升级沟通方式，降低协作沟通成本。对于企业的更多需求，我们提供极速无代码应用开发平台，无码搭建，极速开发，极速迭代，极速交付，优质体验，对企业需求极速响应、极速反馈。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy50ZWFtY3ViZS5jbi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/remaxjs.org.png',
        title: 'Remax',
        desc: '使用真正的 React 构建跨平台小程序。Remax 将 React 运行在小程序环境中，让你可以使用完整的 React 进行小程序开发。 真正的 React - 不同于静态编译的方案，在 Remax 中使用 React 没有任何限制，包括 React Hooks。你可以把 Remax 理解为针对小程序的 React Native。 多端支持 - 使用 Remax 把代码转换到多个小程序平台。 TypeScript - 完整的 TypeScript 支持，给你满满的安全感。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9yZW1heGpzLm9yZy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tencent.github.io.png',
        title: 'https://tencent.github.io/omi/',
        desc: '前端跨平台开发框架，可以开发桌面 Web、移动 H5、小程序等',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90ZW5jZW50LmdpdGh1Yi5pby9vbWkv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/wepyjs.gitee.io.png',
        title: 'WePY',
        desc: '腾讯开源的小程序组件化开发框架',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93ZXB5anMuZ2l0ZWUuaW8vd2VweS1kb2NzLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/mpvue.com.png',
        title: 'mpvue',
        desc: '使用 Vue.js 开发小程序的前端框架。框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL21wdnVlLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/megalojs.org.png',
        title: 'Megalo',
        desc: '基于 Vue.js 的小程序框架。持微信小程序、支付宝小程序、百度智能小程序',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9tZWdhbG9qcy5vcmcv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cml.js.org.png',
        title: 'Chameleon 变色龙',
        desc: ' 支持平台：web、微信小程序、支付宝小程序、百度小程序、android(weex)、ios(weex)、qq 小程序、字节跳动小程序、快应用，持续更新中。 一端所见即多端所见——多端高度一致，无需关注各端文档。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbWwuanMub3JnLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/eeui.app.png',
        title: 'EEUI',
        desc: '使用 Vue.js 跨平台开发高质量原生（Android/iOS）应用',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9lZXVpLmFwcC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/developers.weixin.qq.com.png',
        title: '微信学院',
        desc: '高校大赛系列课程之 “微信小程序开发实战”，是由清华大学和微信团队共制作的小程序学习教程。通过需求分析、原型设计、小程序前端实现、后台接口开发、小程序对接接口，逐步教大家如何“从无到有”完成小程序项目。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2J1c2luZXNzL2RvYy8wMDBlNjQyZGQxODljODUxZDg1YWY0NzZiNTZjMGQ%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/developers.weixin.qq.com.png',
        title: '小程序云开发',
        desc: '开发者可以使用云开发快速开发小程序、小游戏、公众号网页等，并且原生打通微信开放能力。 开发者无需搭建服务器，可免鉴权直接使用平台提供的 API 进行业务开发。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaXByb2dyYW0vZGV2L3d4Y2xvdWQvYmFzaXMvZ2V0dGluZy1zdGFydGVkLmh0bWw%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.cloudbase.net.png',
        title: '云开发学习指南',
        desc: '腾讯官方出品，体系化快速学习掌握腾讯云开发的使用，让更多人享受编程的快乐！',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuY2xvdWRiYXNlLm5ldC9jb21tdW5pdHkvZ3VpZGVzLmh0bWw%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cloud.tencent.com.png',
        title: '小程序学习路径课',
        desc: '腾讯云大学重磅打造，从微信小程序到小程序云开发体系化课程，玩转小程序不同案例场景！',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbG91ZC50ZW5jZW50LmNvbS9lZHUvcGF0aHMvc2VyaWVzL2FwcGxldA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.w3cschool.cn.png',
        title: '小程序云开发高级教程',
        desc: 'w3cschool 提供的小程序云开发在线教程',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cudzNjc2Nob29sLmNuL2Nsb3VkYmFzZWhhbmRib29rcHJvLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/wechat-miniprogram.github.io.png',
        title: 'kbone',
        desc: 'kbone 是一个致力于微信小程序和 Web 端同构的解决方案。微信小程序的底层模型和 Web 端不同，我们想直接把 Web 端的代码挪到小程序环境内执行是不可能的。kbone 的诞生就是为了解决这个问题，它实现了一个适配器，在适配层里模拟出了浏览器环境，让 Web 端的代码可以不做什么改动便可运行在小程序里。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93ZWNoYXQtbWluaXByb2dyYW0uZ2l0aHViLmlvL2tib25lL2RvY3Mv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.bilibili.com.png',
        title: '微信小程序开发课程',
        desc: '腾讯NEXT团队出品',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL0JWMXA1NHkxaDdlQg%3D%3D'
      }
    ]
  }
]
