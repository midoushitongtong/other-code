const static = require('koa-static');
const path = require('path');

function koaStatic({ app, root }) {
  // vite 所在的当前目录
  app.use(static(root));

  // vite 所在的当前目录下的 public 目录
  app.use(static(path.join(root, 'public')));
}

module.exports.koaStatic = koaStatic;
