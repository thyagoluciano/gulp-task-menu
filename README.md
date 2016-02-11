## gulp-task-menu
[![NPM](https://nodei.co/npm/gulp-task-menu.png?downloads=true&downloadRank=true)](https://nodei.co/npm/gulp-task-menu/)



> task menu plugin for [gulp](http://gulpjs.com/)



### Install

```shell
npm install gulp-task-menu --save
```

### gulpfile.js

```javascript
var gulp = require('gulp'),
    menu = require('gulp-task-menu');

gulp.task('default', function (done) {
    /*
     * @param gulp
     * @param ignoreList []
     */
    menu(this, ['default']);
});

gulp.task('genHTML', function () {});
gulp.task('genJS', function () {});
gulp.task('genController', function () {});
gulp.task('genSQL', function () {});
```

### Usage

First install gulp-task-menu as dependency

```
npm install gulp-task-menu --save
```

Then, add it to yout gulpfile.js

```javascript
var menu = require("gulp-task-menu");

gulp.task('default', function () {
    menu(this, ['default']);
});

gulp.task('genHTML', function () {});
gulp.task('genJS', function () {});
gulp.task('genSQL', function () {});
```

![](https://raw.githubusercontent.com/thyagoluciano/gulp-task-menu/master/gulp-task-menu.gif)
