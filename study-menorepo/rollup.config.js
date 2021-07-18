import ts from 'rollup-plugin-typescript2'; // 解析 ts 插件
import resolvePlugin from '@rollup/plugin-node-resolve'; // 解析第三方模块
import path from 'path';

// 获取 packages 目录绝对路径
const packagesDir = path.resolve(__dirname, 'packages');
// 获取打包路径
const packageDir = path.resolve(packagesDir, process.env.TARGET);
// 获取打包路径的最后一个名字 (e.g. reactivity / shared)
const name = path.basename(packageDir);
// 根据参数, 获取打包路径下的文件路径
const resolve = (fileName) => path.resolve(packageDir, fileName);
// 拿到 package.json
const pkg = require(resolve('package.json'));
// 拿到打包参数
const packageOptions = pkg.buildOptions;

// rollup 输出配置
const outputConfig = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: 'es',
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs',
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: 'iife',
  },
};

function createConfig(format, output) {
  output.name = packageOptions.name; // 用于 iife 在 window 上挂载的属性
  output.sourcemap = true;

  return {
    input: resolve(`src/index.ts`), // 文件入口
    output,
    plugins: [
      ts({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      }),
      resolvePlugin(),
    ],
  };
}

// 根据每个包的 buildOptions 去生成配置
export default packageOptions.formats.map((format) => createConfig(format, outputConfig[format]));

// 一个包要打包多个格式, esModule, commonjs, iife
