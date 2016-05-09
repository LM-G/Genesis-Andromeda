'use strict';
// Dépendances ====================================================================================
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulpSequence = require('gulp-sequence');
var wrap = require('gulp-wrap');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files'); // a delete
var angularFilesort = require('gulp-angular-filesort');
var filter = require('gulp-filter'); // a delete
var templateCache = require('gulp-angular-templatecache');
var gulpNgConfig = require('gulp-ng-config');
var livereload = require('gulp-livereload');
var rename = require("gulp-rename");

// Variables =====================================================================================

var PATH_SCRIPTS = './app/**/*.js';
var PATH_INDEX = './app/index.html';
var PATH_FAVICON = './app/assets/img/favicon.ico';
var PATH_CSS = './app/**/*.css';
var PATH_HTML = './app/**/*.html';
var PATH_DIST = '../server/public/';
var PATH_DIST_JS = PATH_DIST + 'js/';
var PATH_DIST_CSS = PATH_DIST + 'css/';
var PATH_DIST_FONTS = PATH_DIST + 'fonts/';
var PATH_DIST_HTML = PATH_DIST + 'html/';
var PATH_DIST_LANG = PATH_DIST + 'lang/';
var PATH_DIST_IMG = PATH_DIST + 'img/';

// Tâches =========================================================================================

// Suppression du dossier public
gulp.task('clean', function() {
  return gulp
    .src(PATH_DIST)
    .pipe(clean({
      force: true
    }));
});

// concatenations des librairies bower
gulp.task('publish-bower-components', function() {

  var bower_components = [
    'bower_components/angular/angular.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-translate/angular-translate.js',
    'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
    'bower_components/angular-bootstrap/ui-bootstrap.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    'bower_components/a0-angular-storage/dist/angular-storage.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-jwt/dist/angular-jwt.js'
  ];

  return gulp
    .src(bower_components)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest(PATH_DIST_JS))
    .pipe(livereload());
});

// concaténation des scripts
gulp.task('publish-components', function() {
  return gulp
    .src(PATH_SCRIPTS)
    .pipe(wrap('(function(){\n\'use strict\';\n<%= contents %>\n})();'))
    .pipe(angularFilesort())
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(PATH_DIST_JS))
    .pipe(livereload());
});

// concatene les css
gulp.task('publish-css', function() {
  var cssFiles = [
    PATH_CSS,
    'bower_components/components-font-awesome/css/font-awesome.css',
    'bower_components/bootstrap-css-only/css/bootstrap-theme.css',
    'bower_components/bootstrap-css-only/css/bootstrap.css',
    'bower_components/animate.css/animate.css'
  ];

  return gulp
    .src(cssFiles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(PATH_DIST_CSS))
    .pipe(livereload());
});

// Suppression du dossier public
gulp.task('publish-fonts', function() {
  return gulp
    .src(['bower_components/bootstrap-css-only/fonts/**'])
    .pipe(gulp.dest(PATH_DIST_FONTS));
});

gulp.task('publish-css-map', function() {
  return gulp
    .src('bower_components/bootstrap-css-only/css/bootstrap.css.map')
    .pipe(gulp.dest(PATH_DIST_CSS));
});

// copie les templates html
gulp.task('publish-html', function() {
  var cacheOptions = {
    module: 'genesis.templates',
    root: '/'
  };

  return gulp
    .src([PATH_HTML, '!index.html'])
    .pipe(templateCache(cacheOptions))
    .pipe(gulp.dest(PATH_DIST_HTML))
    .pipe(livereload());
});

// copie l'index html
gulp.task('publish-entrypoint', function() {
  return gulp
    .src('app/index.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest(PATH_DIST))
    .pipe(livereload());
});

// copie du l'htaccess
gulp.task('publish-htaccess', function() {
  return gulp
    .src('.htaccess')
    .pipe(gulp.dest(PATH_DIST))
    .pipe(livereload());
});

// traductions i18n angular
gulp.task('publish-i18n-lang', function() {
  return gulp
    .src([
      'bower_components/angular-i18n/angular-locale_fr*.js',
      'bower_components/angular-i18n/angular-locale_en*.js'
    ])
    .pipe(gulp.dest(PATH_DIST_LANG + '/i18n/'))
    .pipe(livereload());
});

// traductions
gulp.task('publish-lang', function() {
  return gulp
    .src('app/assets/lang/locale*.json')
    .pipe(gulp.dest(PATH_DIST_LANG))
    .pipe(livereload());
});

// mocks des données
gulp.task('mocks', function() {
  return gulp
    .src('app/assets/mock/*.json')
    .pipe(gulp.dest('dist/mock/'))
    .pipe(livereload());
});

// images
gulp.task('publish-images', function() {
  return gulp.src(['!' + PATH_FAVICON, 'app/assets/img/**'])
    .pipe(gulp.dest(PATH_DIST_IMG))
    .pipe(livereload());
});

// favicon
gulp.task('publish-favicon', function() {
  return gulp.src(PATH_FAVICON)
    .pipe(gulp.dest(PATH_DIST))
    .pipe(livereload());
});


gulp.task('publish-config-dev', function() {
  return gulp.src(['./config/dev.json'])
    .pipe(gulpNgConfig('genesis.config'))
    .pipe(rename('config.js'))
    .pipe(gulp.dest(PATH_DIST_JS))
});

// Recompile automatiquement si changement sur un fichier
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/**/*.js', ['publish-components']);
  gulp.watch('app/**/*.css', ['publish-css']);
  gulp.watch('app/**/*.html', ['publish-html', 'publish-entrypoint']);
  gulp.watch('app/assets/img/**', ['publish-images', 'publish-favicon']);
  gulp.watch('app/assets/lang/**', ['publish-lang']);
});

// Tâche par défaut
gulp.task('default',
  gulpSequence('clean', [
      'publish-components',
      'publish-bower-components',
      'publish-html',
      'publish-fonts',
      'publish-css',
      'publish-css-map',
      'publish-images',
      'publish-favicon',
      'publish-entrypoint',
      'publish-htaccess',
      'publish-config-dev'
    ], [
      'publish-i18n-lang',
      'publish-lang'
    ],
    'mocks',
    'watch'
  )
);