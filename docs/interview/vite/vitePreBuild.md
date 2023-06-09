### Vite 预构建
开发阶段 `Vite` 会对项目中使用的第三方依赖如 `lodash-es` 等做`预构建`操作。
之所有要做`预构建`，是因为`Vite`是居于浏览器原生的[ESM规范](https://juejin.cn/post/7147610165997469703)来实现的，这就要求整个项目的代码必须符合`ESM规范`。

而我们在开发中无法保证第三方依赖依赖会严格按照`ESM规范`来做，所以这就需要我们通过预构建功能将非`ESM规范`转为符合`ESM规范`的代码。

另外，就算有些第三方依赖已经符合`ESM规范`，但它可能由多个子文件组成，如`lodash-es`,如果不做处理直接使用，那么就会引发请求瀑布流（`如果对lodash-es进行处理， 那么浏览器会发起几百次请求`），这将会非常影响页面性能，因此，通过`Vite`的`预构建`功能，将第三方依赖内部的多个文件合并为一个，来减少`http`请求的数量，从而优化页面加载速度。

**综上所述，`预构建`主要做了两件事：**
**1. 将非`ESM规范`的代码转成符合`ESM规范`的代码**
**2. 将第三方依赖内部的多个文件合并为一个，减少`http`请求数量**

**示例：**
在`vite.config.ts`配置文件中，我们将`optimizeDeps.exclude`的值设置为['lodash-es'],也就是说我们将不对`lodash-es`进行预构建
```ts
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['lodash-es']
  },
  
})
```
发送请求如下：

![2022-09-26_200527.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84bb36dfd8e844f79227814da012b096~tplv-k3u1fbpfcp-watermark.image?)

如果我们将`optimizeDeps`去掉，`Vite`默认会对第三方依赖进行预构建，发送请求次数如下：

![2022-09-26_201142.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b291e4e92a54097aa35da63b014ad23~tplv-k3u1fbpfcp-watermark.image?)

对比可发现，进行预构建的效果是非常显著的。

默认情况下，`预构建`结果会保存到 `node_modules` 的 `.vite/deps` 目录下。
当我们重复启动项目时，那么 `Vite` 会复用上一次`预构建`的结果。如果不想让 `Vite` 复用上一次`预构建`的结构，我们可以配置 `optimizeDeps.force` 为 `true`，使得 `dev server` 每次启动的时候都强制进行`预构建`。


### `Vite`是怎么做到快速识别项目中的第三方依赖呢？
`预构建`，最关键的一步就是找到项目中所有的第三方依赖。 那 `Vite` 是怎么做到快速获取项目中所有的第三方依赖呢？

`Vite` 借助 `ESbuild` 快速打包的能力，对整个项目进行一个全量打包，打包的时候通过分析 `依赖关系`，得到项目中所有源文件的URL，然后分离出第三方依赖，流程大致如下：
1.  找到入口文件 `entry` 对应的 `url`, 这个 `url` 一般为相对路径；
2.  将 `url` 解析为绝对路径，找到源文件在本地磁盘的位置，并构建一个 `module` 对象；
3.  读取源文件的内容；
4.  将源文件内容解析为 `AST` 对象，分析 `AST` 对象，找到源文件中的`静态依赖`(import xxx from 'xxx') 和`动态依赖`(import('xx'))对应的 `url`, 并收集到 `module` 对象中；
5.  遍历第 4 步收集到的`静态依赖`、`动态依赖`对应的 `url`，重复 2 - 5 步骤，直到项目中所有的源文件都遍历完成。

这样，`Vite` 就可以对找到的第三方依赖做转化、合并操作了。

`预构建`功能非常棒，但在实际的项目中，并不能保证所有的第三方依赖都可以被找到。如果出现下面的这两种情况， `Esbuild` 也无能为力:

-   `plugin` 在运行过程中，动态给源码注入了新的第三方依赖；
-   `动态依赖`在代码运行时，才可以确定最终的 `url`；

当出现这两种情况时，`Vite` 会触发`二次预构建`：
1.   `plugin` 在运行过程中，动态给源码注入了新的第三方依赖；
2.   `动态依赖`在代码运行时，才可以确定最终的 `url`；

\
作者：百应前端团队\
链接：https://juejin.cn/post/7128212841064038414\
来源：稀土掘金