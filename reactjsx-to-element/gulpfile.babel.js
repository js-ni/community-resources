const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const del = require('del');


const paths = {
  styles: {
    src: './assets/scss/style.scss',
    dest: './assets/css',
    watch: './assets/scss/**/*.scss'
  },

  react: {
    src: 'web/src/**/*.js',
    dest: 'assets/js',
    watch: 'web/src/**/*.js'
  }
};

const clean = () => del([ 'assets/css' ]);

const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

const scripts = () => {
  return gulp.src(paths.react.src)
    .pipe(babel({
      presets: ["@babel/preset-react"]
    }))
    .pipe(gulp.dest(paths.react.dest));
}

const watch = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.react.watch, scripts);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts));
gulp.task('buid', build)
gulp.task('default', build)

const dev = gulp.series(build, gulp.parallel(watch));
gulp.task('dev', dev)