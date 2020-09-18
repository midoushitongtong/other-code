const fs = require('fs');
const { resolvedVue } = require('../util/parser');
const moduleRegexp = /\/@modules\//;

function moduleResolve({ app, root }) {
  const vueResolved = resolvedVue(root);

  app.use(async (ctx, next) => {
    if (!moduleRegexp.test(ctx.path)) {
      return next();
    } else {
      // 处理 /@modules/ 开头的内容

      const id = ctx.path.replace(moduleRegexp, '');

      // 设置响应类型是 js
      ctx.type = 'js';

      // 去 node_modules 目录下寻找对应的文件
      const content = fs.readFileSync(vueResolved[id], {
        encoding: 'utf-8',
      });

      ctx.body = content;
    }
  });
}

module.exports.moduleResolve = moduleResolve;
