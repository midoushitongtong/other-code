const Koa = require('koa');
const { koaStatic } = require('../plugins/koaStatic');
const { moduleRewrite } = require('../plugins/moduleRewrite');
const { moduleResolve } = require('../plugins/moduleResolve');
const { htmlRewrite } = require('../plugins/htmlRewrite');
const { vue } = require('../plugins/vue');

function createServer() {
  const app = new Koa();
  const root = process.cwd();

  const context = {
    app,
    root,
  };

  // 加载 koa 插件
  const resolvePlugins = [
    // 解析 js 文件内的 import 路径, 如果此路径是第三方包, 将前缀替换为 @/modules/
    moduleRewrite,
    // 解析 /@modules/ 开头的路径, 从 node_modules 找到对应的内容并返回
    moduleResolve,
    // 注入环境变量
    htmlRewrite,
    // 解析 vue 文件
    vue,
    // 静态服务
    koaStatic,
  ];
  resolvePlugins.forEach((plugin) => plugin(context));

  return app;
}

module.exports = createServer;
