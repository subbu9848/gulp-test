# Gulp Example/Starter App

Example gulp application to show how to use plugins and run tasks

### Version

1.0.0

## Dependencies

gulp-imagemin
gulp-concat
gulp-uglify
gulp-sass

## Install Dependencies

```bash
npm install
```

## Run all tasks

```bash
gulp
```

## Watch all tasks/files

```bash
gulp watch
```

<!-- 2

If your 'sass' task compiles it correctly, then you just need a watch task to run that task automatically.

gulp.task('watch', function() {
    gulp.watch(['./**/*.scss'], ['sass'])
});
Make it run automatically when you run gulp by adding it to a 'default' task ....

gulp.task('default', ['sass', 'watch']) -->
