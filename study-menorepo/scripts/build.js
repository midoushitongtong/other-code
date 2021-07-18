// 针对 monorepo 进行编译项目

const fs = require('fs');
const execa = require('execa');

// 拿到 packages 下的需要打包的目录
const dirs = fs.readdirSync('packages').filter((item) => {
  // 确保拿到的只是目录, 而不是文件
  return fs.statSync(`packages/${item}`).isDirectory();
});

// 并行打包所有目录
async function build(target) {
  // rollup -c --environment TARGET:reactivity
  await execa('rollup', ['-c', '--environment', `TARGET:${target}`], {
    stdio: 'inherit', // 父进程打印子进程的日志
  });
}

async function runParallel(dirs, iterFn) {
  let result = [];
  for (const item of dirs) {
    result.push(iterFn(item));
  }
  return Promise.all(result);
}

runParallel(dirs, build).then(() => {
  console.log('成功');
});
