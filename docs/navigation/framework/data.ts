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
        icon: 'http://nav.poetries.top/wp-content/uploads/2023/03/element-ui-1.png',
        title: 'Element Plus',
        desc: 'Element Plus 基于Vue 3,面向设计师和开发者的组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9lbGVtZW50LXBsdXMuZ2l0ZWUuaW8vemgtQ04v'
      },
      {
        icon: 'http://nav.poetries.top/wp-content/uploads/2023/03/element-ui.png',
        title: 'Element UI',
        desc: '网站快速成型工具 Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9lbGVtZW50LmVsZW1lLmlvLyMvemgtQ04%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/procomponents.ant.design.png',
        title: 'ProComponents',
        desc: 'ProComponents 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD 页面的效率，更加专注于页面',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9wcm9jb21wb25lbnRzLmFudC5kZXNpZ24vY29tcG9uZW50cw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/tdesign.tencent.com.png',
        title: 'tdesign',
        desc: 'TDesign - 腾讯开源的企业级设计体系',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly90ZGVzaWduLnRlbmNlbnQuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/nutui.jd.com.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端 Vue 组件库。基于 Taro 对 NutUI 每一个组件进行深度适配支持开发多端小程序',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9udXR1aS5qZC5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/doc.mini.talelin.com.png',
        title: 'Lin UI',
        desc: 'Lin UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kb2MubWluaS50YWxlbGluLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/pro.ant.design.png',
        title: 'ANT DESIGN PRO',
        desc: '开箱即用的中台前端/设计解决方案',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9wcm8uYW50LmRlc2lnbi8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/material-ui.com.png',
        title: 'Material-UI',
        desc: 'React 组件用于更快速、更简便的 web 开发。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vemgv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/semantic-ui-vue.github.io.png',
        title: 'Semantic UI Vue',
        desc: '这是一个集成 Semantic UI 的 Vue.js 框架',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9zZW1hbnRpYy11aS12dWUuZ2l0aHViLmlvLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/newgateway.gitee.io.png',
        title: 'MyUI',
        desc: '基于 Vue + ElementUI 。专注于中台系统快速搭建,搭载代码生成器，可生成底层api调用、vuex管理、模拟数据代码,内置常用超过150个基础UI组',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9uZXdnYXRld2F5LmdpdGVlLmlvL215L2d1aWRlLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.color-ui.com.png',
        title: 'colorUI',
        desc: '小程序-Color Ui注重视觉组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuY29sb3ItdWkuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/didi.github.io.png',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9kaWRpLmdpdGh1Yi5pby9jdWJlLXVpLyMvemgtQ04vZG9jcy9pbnRyb2R1Y3Rpb24%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/nutui.jd.com.png',
        title: 'nutui',
        desc: '京东风格的轻量级移动端 Vue、React 组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9udXR1aS5qZC5jb20vIy8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.iviewui.com.png',
        title: 'iview',
        desc: '一套基于 Vue.js 的高质量 UI 组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuaXZpZXd1aS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/vant-contrib.gitee.io.png',
        title: 'vant移动端UI',
        desc: 'Vant - 轻量、可靠的移动端组件库',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly92YW50LWNvbnRyaWIuZ2l0ZWUuaW8vdmFudC8jL3poLUNOL2hvbWU%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/youzan.github.io.png',
        title: 'vant小程序UI',
        desc: '有赞小程序UI',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly95b3V6YW4uZ2l0aHViLmlvL3ZhbnQtd2VhcHAvIy9pbnRybw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.antdv.com.png',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuYW50ZHYuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.blazeui.com.png',
        title: 'Blaze CSS',
        desc: '开放源码的模块化CSS工具包，为建立网站提供了很好的结构。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cuYmxhemV1aS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/adminlte.io.png',
        title: 'AdminLTE',
        desc: '一个非常流行的基于 Bootstrap 3.x 免费后台UI框架。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9hZG1pbmx0ZS5pby8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/aliqin.github.io.png',
        title: 'Atui',
        desc: '阿里通讯前端部推出的一个基于 Vue.js 2.0 的 UI 组件库。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9hbGlxaW4uZ2l0aHViLmlvL2F0dWkv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/cloudflare.github.io.png',
        title: 'Cf-ui',
        desc: ' Cloudflare 开发的一个 Web UI 框架。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jbG91ZGZsYXJlLmdpdGh1Yi5pby9jZi11aS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/elemental-ui.com.png',
        title: 'Elemental UI',
        desc: ' 一个针对 React.js 的灵活的、漂亮的 UI 框架。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2VsZW1lbnRhbC11aS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.pintuer.com.png',
        title: '拼图Pintuer',
        desc: '拼图是优秀的响应式前端CSS开源框架，国内前端框架先驱及领导者，自动适应手机、平板、电脑等设备，让前端开发像游戏般快乐、简单、灵活、便捷。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5waW50dWVyLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.zui.sexy.png',
        title: 'ZUI',
        desc: '一个基于 Bootstrap 深度定制开源前端实践方案，帮助你快速构建现代跨屏应用。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy56dWkuc2V4eS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/sui.taobao.org.png',
        title: 'SUI',
        desc: 'SUI 是一套基于bootstrap开发的前端组件库，同时她也是一套设计规范。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3N1aS50YW9iYW8ub3JnL3N1aS9kb2NzLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/webjike.com.png',
        title: 'BUI',
        desc: ' BUI是基于jQuery，兼容KISSY的UI类库，专致于解决后台系统的框架方案。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93ZWJqaWtlLmNvbS93ZWIuaHRtbA%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/bootflat.github.io.png',
        title: 'Bootflat',
        desc: 'Bootflat - 基于bootstrap 3.2.0 的扁平化风格的UI组件的开源项目。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2Jvb3RmbGF0LmdpdGh1Yi5pby8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.getuikit.net.png',
        title: 'UIKit中文网',
        desc: 'UIkit是YOOtheme团队开发的一款轻量级、模块化的前端框架，可快速构建强大的前端web界面。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5nZXR1aWtpdC5uZXQv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/ccforward.github.io.png',
        title: 'Rubik UI',
        desc: ' Rubik UI 是一个基于 Vue.js 2.0+ 的开源 UI 组件库，在交互和视觉设计上遵循 Material Design 规范，适用于 PC 端和 mobile 端。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9jY2ZvcndhcmQuZ2l0aHViLmlvL3J1YmlrLyMv'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.layui.com.png',
        title: 'Layui Layui',
        desc: '是一款采用自身模块规范编写的情怀型前端UI框架，遵循原生HTML/CSS/JS的书写与组织形式，门槛极低，拿来即用。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5sYXl1aS5jb20v'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.jeasyui.net.png',
        title: 'Jquery EasyUI',
        desc: ' easyui是一种基于jQuery的用户界面插件集合。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3d3dy5qZWFzeXVpLm5ldC8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/jqueryui.com.png',
        title: 'jQuery UI',
        desc: '是建立在 jQuery JavaScript 库上的一组用户界面交互、特效、小部件及主题。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2pxdWVyeXVpLmNvbS8%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/ant.design.png',
        title: 'Ant Design',
        desc: '一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观，通过模块化的解决方案，让设计者专注于更好的用户体验。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9hbnQuZGVzaWduL2luZGV4LWNu'
      },
      {
        icon: 'https://api.iowen.cn/favicon/semantic-ui.cn.png',
        title: 'Semantic UI',
        desc: '中文官方网站 Semantic 是一个用来帮助创建漂亮、响应化、人性化的开发框架',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3NlbWFudGljLXVpLmNuLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/element-cn.eleme.io.png',
        title: 'Element',
        desc: '饿了么前端团队开发的基于 Vue 2.0 的桌面端组件库。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL2VsZW1lbnQtY24uZWxlbWUuaW8vIy96aC1DTg%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/foundation.zurb.com.png',
        title: 'Foundation Foundation',
        desc: '是一个易用、强大而且灵活的框架,用于构建基于任何设备上的 Web 应用。',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9mb3VuZGF0aW9uLnp1cmIuY29tLw%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/v3.bootcss.com.png',
        title: 'Bootstrap',
        desc: '最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。',
        link: 'http://nav.poetries.top/go/?url=aHR0cDovL3YzLmJvb3Rjc3MuY29tLw%3D%3D'
      }
    ]
  }
]
