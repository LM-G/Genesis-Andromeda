'use strict';

// Dépendances ====================================================================================
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulpSequence = require('gulp-sequence');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var gulpNgConfig = require('gulp-ng-config');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var gulpDocs = require('gulp-ngdocs');
var webserver = require('gulp-webserver');

// Variables =====================================================================================

var PATH_SCRIPTS = './app/**/*.js';
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
var PATH_DIST_DOC = PATH_DIST + 'doc/';

// Tâches =========================================================================================

// Suppression du dossier public
gulp.task('clean', function() {
  return gulp
    .src(PATH_DIST)
    .pipe(clean({
      force: true
    }));
});

// compilation de l'application cliente
gulp.task('webpack: build', function() {
  return gulp.src(PATH_SCRIPTS)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(PATH_DIST_JS))
    .pipe(livereload());
});


// concatene les css
gulp.task('publish-css', function() {
  var cssFiles = [
    PATH_CSS,
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/angular-material/angular-material.css',
    'node_modules/animate.css/animate.css'
  ];

  return gulp
    .src(cssFiles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(PATH_DIST_CSS))
    .pipe(livereload());
});

gulp.task('publish-icons', function() {
  return gulp.src('node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest(PATH_DIST_FONTS));
});

// copie les templates html
gulp.task('publish-html', function() {
  var cacheOptions = {
    standalone: true,
    module: 'genesis.templates',
    root: '/'
  };

  return gulp
    .src([PATH_HTML, '!app/index.html'])
    .pipe(templateCache('genesis.tpl.js', cacheOptions))
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

// traductions i18n angular
gulp.task('publish-i18n-lang', function() {
  return gulp
    .src([
      'node_modules/angular-i18n/angular-locale_fr*.js',
      'node_modules/angular-i18n/angular-locale_en*.js'
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
  return gulp.src(['./config/config-dev.json'])
    .pipe(gulpNgConfig('genesis.config'))
    .pipe(rename('config.js'))
    .pipe(gulp.dest(PATH_DIST_JS));
});

gulp.task('publish-config-demo', function() {
  return gulp.src(['./config/config-prod.json'])
    .pipe(gulpNgConfig('genesis.config'))
    .pipe(rename('config.js'))
    .pipe(gulp.dest(PATH_DIST_JS));
});

// Recompile automatiquement si changement sur un fichier
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['app/**/*.js', '!app/**/*test.js'], ['webpack: build']);
  gulp.watch('app/**/*.css', ['publish-css']);
  gulp.watch('app/**/*.html', ['publish-html', 'publish-entrypoint']);
  gulp.watch('app/assets/img/**', ['publish-images', 'publish-favicon']);
  gulp.watch('app/assets/lang/**', ['publish-lang']);
});

// construction de la documentation
gulp.task('documentation: build', function() {
  var options = {
    title: 'Genesis Andromeda Docs',
    html5Mode: false,
    startPage: '/api',
    titleLink: '/api'
  };
  return gulp.src(PATH_SCRIPTS)
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('./doc'));
});

// lancement d'un serveur pour afficher la documentation
gulp.task('documentation: webserver', function() {
  gulp.src('./doc')
    .pipe(webserver({
      port: 3002,
      open: false
    }));
});

gulp.task('documentation',
  gulpSequence('documentation: build', 'documentation: webserver')
);

// Tâche par défaut
gulp.task('default',
  gulpSequence('clean', [
      'publish-html',
      'webpack: build',
      'publish-css',
      'publish-icons',
      'publish-images',
      'publish-favicon',
      'publish-entrypoint',
      'publish-config-dev'
    ], [
      'publish-i18n-lang',
      'publish-lang'
    ],
    'mocks',
    'watch'
  )
);

// pour test d'acces avec ip differente de localhost
gulp.task('demo',
  gulpSequence('clean', [
      'publish-html',
      'webpack: build',
      'publish-css',
      'publish-icons',
      'publish-images',
      'publish-favicon',
      'publish-entrypoint',
      'publish-config-demo'
    ], [
      'publish-i18n-lang',
      'publish-lang'
    ],
    'watch'
  )
);