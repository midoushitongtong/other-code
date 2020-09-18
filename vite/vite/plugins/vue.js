const path = require('path');
const fs = require('fs');
const { resolvedVue } = require('../util/parser');
const defaultExportRegexp = /((?:^|\n|;)\s*)export default/;

function vue({ app, root }) {
  app.use(async (ctx, next) => {
    if (!ctx.path.endsWith('.vue')) {
      return next();
    }

    // vue 文件处理
    const filePath = path.join(root, ctx.path);
    const fileContent = fs.readFileSync(filePath, {
      encoding: 'utf-8',
    });

    // 解析 vue 文件
    const { parse, compileTemplate } = require(resolvedVue(root).compiler);
    const { descriptor } = parse(fileContent);

    if (!ctx.query.type) {
      let code = ``;
      if (descriptor.script) {
        const content = descriptor.script.content;
        const replaced = content.replace(defaultExportRegexp, '$1const __script =');
        code += replaced;
      }
      if (descriptor.template) {
        const templateRequest = ctx.path + `?type=template`;
        code += `\nimport {render as __render} from ${JSON.stringify(templateRequest)}`;
        code += `\n__script.render = __render`;
      }
      ctx.type = 'js';
      code += `\nexport default __script`;
      ctx.body = code;
    }
    if (ctx.query.type === 'template') {
      ctx.type = 'js';
      let content = descriptor.template.content;
      const { code } = compileTemplate({
        source: content,
      });
      ctx.body = code;
    }
  });
}

module.exports.vue = vue;
