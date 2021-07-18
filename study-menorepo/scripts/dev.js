const execa = require('execa');

async function build(target) {
  // rollup -c --environment TARGET:reactivity
  await execa('rollup', ['-c', '-w', '--environment', `TARGET:${target}`], {
    stdio: 'inherit', // 父进程打印子进程的日志
  });
}

build('reactivity');
build('shared');
