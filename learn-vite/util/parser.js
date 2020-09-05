const { Readable } = require('stream');
const path = require('path');

async function readBody(stream) {
  if (stream instanceof Readable) {
    return new Promise((resolve, reject) => {
      let res = '';

      stream.on('data', (data) => (res += data));

      stream.on('end', () => resolve(res));
    });
  }
  return stream.toString();
}

function resolvedVue(root) {
  // 需要获取
  // runtime-dom, runtime-core, compiler-sfc(后端解析.vue文件) reactivity, shared
  // 的路径

  const compilerPkgPath = path.join(root, 'node_modules', '@vue/compiler-sfc/package.json');
  const compilerPkg = require(compilerPkgPath);
  // node_modues/@vue/compiler-sfc/package.json
  const compilerPath = path.join(path.dirname(compilerPkgPath), compilerPkg.main);

  const resolvePath = (name) =>
    path.resolve(root, 'node_modules', `@vue/${name}/dist/${name}.esm-bundler.js`);

  // node_modues/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  const runtimeDomPath = resolvePath('runtime-dom');
  // node_modues/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  const runtimeCorePath = resolvePath('runtime-core');
  // node_modues/@vue/reactivity/dist/reactivity.esm-bundler.js
  const reactivityPath = resolvePath('reactivity');
  // node_modues/@vue/shared/dist/shared.esm-bundler.js
  const sharedPath = resolvePath('shared');

  return {
    compiler: compilerPath,
    '@vue/runtime-dom': runtimeDomPath,
    '@vue/runtime-core': runtimeCorePath,
    '@vue/reactivity': reactivityPath,
    '@vue/shared': sharedPath,
    vue: runtimeDomPath,
  };
}

module.exports.readBody = readBody;
module.exports.resolvedVue = resolvedVue;
