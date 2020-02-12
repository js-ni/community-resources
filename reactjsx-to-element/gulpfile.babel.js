const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  react: {
    src: './src/**/*.jsx',
    dest: './build',
    watch: './src/**/*.jsx'
  }
};

const scripts = () => {
  return gulp.src(paths.react.src)
    .pipe(babel({
      presets: ["@babel/preset-react"]
    }))
    .pipe(gulp.dest(paths.react.dest));
};

const watch = () => {
  gulp.watch(paths.react.watch, scripts);
};

const build = gulp.series(gulp.parallel(scripts));
const dev = gulp.series(build, gulp.parallel(watch));

gulp.task('dev', dev);
gulp.task('buid', build);
gulp.task('default', build);
