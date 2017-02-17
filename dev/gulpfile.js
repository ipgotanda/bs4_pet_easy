// パッケージ
// =======================================================
var gulp        = require('gulp'),

    sass        = require('gulp-sass'),
    postcss       = require('gulp-postcss'),
      autoprefixer  = require('autoprefixer'),
      mqpacker      = require('css-mqpacker'),

    sourcemap = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');


// SCSS タスク
// task name: scss
// =======================================================
gulp.task('scss', function(){
  gulp.src('scss/style.scss') //対象SCSSファイル
    .pipe(plumber({
      errorHandler: function(error) {

        // gulp notify
        var lineNumber = (error.line) ? 'LINE ' + error.line + ' -- ' : ''; // エラー取得
        notify.onError({
          title: 'Sassタスク失敗 [<%= error.plugin %>]',
          message: lineNumber + 'コンソールを見てね',
          sound: 'Sosumi'
        })(error);

        // display error
        console.log(error);
        this.emit('end'); // エラーの際のwatchタスク停止を防止する
      }
    }))
    // .pipe(sassbulk()) // sassのフォルダ指定の場合の対応
    .pipe(sass({
      outputStyle: 'compact'
    }))
    // .pipe(browsersync.reload({
    //   stream: true // only diff
    // }))
    .pipe( gulp.dest('../assets/css') );
}); //scss


// 実行, watchタスク実行
// =======================================================
gulp.task('default', ['scss'], function(){
  gulp.watch('scss/**/*.scss', ['scss']);
  // gulp.watch('../*.+(html|php)', ['htmlRefresh']);
}); // default
