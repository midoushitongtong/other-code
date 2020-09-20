const { src, dest, watch } = require('gulp');
const gulpSass = require('gulp-sass');

/**
 * 监听 scss 文件变化重写编译成 css
 */
function watchBuildScssTask() {
  watch(['src/**/*.scss'], function () {
    return buildScssTask();
  });
}

function buildScssTask() {
  return src('src/**/*.scss').pipe(gulpSass()).pipe(dest('../../../dist/css/'));
}

console.log(module);

module.exports.watchBuildScssTask = watchBuildScssTask;
module.exports.buildScssTask = buildScssTask;
