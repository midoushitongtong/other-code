const { readBody } = require('../util/parser');
const { parse } = require('es-module-lexer');
const MagicString = require('magic-string');

function rewriteImports(source) {
  let imports = parse(source)[0];
  const magicString = new MagicString(source);

  if (imports.length) {
    for (let i = 0; i < imports.length; i++) {
      const { s, e } = imports[i];
      let id = source.substring(s, e);
      // 当前开头不是 \ 或者 . 就需要重写
      if (/^[^\/\.]/.test(id)) {
        id = `/@modules/${id}`;
        magicString.overwrite(s, e, id);
      }
    }
  }

  return magicString.toString();
}

function moduleRewrite({ app, root }) {
  app.use(async (ctx, next) => {
    await next();

    if (ctx.body && ctx.response.is('js')) {
      // 读取 js 文件内容
      let content = await readBody(ctx.body);

      // 重写 import 语法
      const result = rewriteImports(content);

      ctx.body = result;
    }
  });
}

module.exports.moduleRewrite = moduleRewrite;
