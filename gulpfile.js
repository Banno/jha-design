const util = require('./config/util');
const gulp = require('gulp');
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const postcss = require('gulp-postcss');
const fractal = require('./fractal.js');
const logger = fractal.cli.console;
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const del = require('del');
const merge = require('merge-stream');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const header = require('gulp-header');
const uglify = require('gulp-uglify');

const pkg = require('./package.json');

function frontMatter(done) {
  util.logIntroduction();
  util.logMessage('Creating development environment');
  done()
}

// Copy

//TODO: Consider renaming this task
//TODO: Consider consolidating this with other task groups
function copy() {
  const manifest = gulp.src('src/manifest.json').pipe(gulp.dest('dist/'));
  const favicon = gulp.src('src/favicon.ico').pipe(gulp.dest('dist'));
  return merge(manifest, favicon);
}

// Styles

//TODO: Clean up formatting of banner
const banner = [
  '/*!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  '*/',
  '',
].join('\n');

//TODO: Try to consolidate dev and prod style tasks
function stylesDev() {
  util.logMessage('Compiling development CSS');
  return gulp
    .src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles/'));
}

function stylesProd() {
  util.logMessage('Compiling production CSS.');
  const plugins = [autoprefixer()];
  return (
    gulp
      .src('src/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gcmq())
      //TODO: Verify browser compatibility requirements for autoprefixing
      .pipe(postcss(plugins))
      //TODO: Verify minification preferences with Josh
      .pipe(csscomb('.csscomb.min.json'))
      .pipe(header(banner, {pkg: pkg}))
      .pipe(gulp.dest('dist/styles/'))
  );
}

// Images

const svgSettings = [
  {
    plugins: [
      {
        removePrefixedAttributes: {
          type: 'perItem',
          fn: (item) => {
            item.eachAttr((attr) => {
              if (attr.prefix && attr.local) {
                item.removeAttr(attr.name);
              }
            });
          },
        },
      },
      {
        removeAttrs: {
          attrs: '(xmlns)',
        },
      },
    ],
  },
];

function imagesCompress() {
  util.logMessage('Compressing images');
  return gulp
    .src('src/images/*')
    .pipe(
      imagemin([
        mozjpeg({
          progressive: true,
        }),
      ])
    )
    .pipe(gulp.dest('dist/images'));
}

function imagesAppIcons() {
  util.logMessage('Compressing app icons');
  return gulp
    .src('src/images/icons/**/*')
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest('dist/images/icons'));
}

function imagesIcons() {
  util.logMessage('Compressing and compiling icons');
  return gulp
    .src('src/icons/*.svg')
    .pipe(svgmin(svgSettings))
    .pipe(gulp.dest('dist/icons'))
    .pipe(svgstore())
    .pipe(gulp.dest('dist/images'));
}

function imagesSvg() {
  util.logMessage('Compressing SVGs');
  return gulp
    .src('src/images/**/*.svg')
    .pipe(svgmin(svgSettings))
    .pipe(gulp.dest('dist/images'));
}

// Scripts

function scriptsCompress() {
  util.logMessage('Compressing and copying scripts to distribution directory');
  return gulp
    .src('src/scripts/**/*.js')
    .pipe(
      uglify({
        mangle: false,
      })
    )
    .pipe(gulp.dest('dist/scripts'));
}

// UI

function fractalStart() {
  const server = fractal.web.server({
    sync: true,
  });
  server.on('error', (err) => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
}

function fractalBuild() {
  util.logMessage('Generating patterns and user interface');
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info')
  );
  builder.on('error', (err) => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
}

function themeCopy() {
  util.logMessage('Copying UI theme');
  return gulp
    .src([
      'src/themes/custom-mandelbrot/**/*',
      '!src/themes/custom-mandelbrot/assets/styles/**/*',
    ])
    .pipe(gulp.dest('dist/themes/custom-mandelbrot/'));
}

function themeSass() {
  util.logMessage('Compiling UI theme');
  return gulp
    .src('src/themes/custom-mandelbrot/assets/styles/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('dist/themes/custom-mandelbrot/assets/styles/'));
}

// Watch

function watch(done) {
  gulp.watch(['src/*'], copy);
  gulp.watch(['src/styles/**/*.scss'], stylesDev);
  gulp.watch(['src/icons/*.svg'], imagesIcons);
  gulp.watch(['src/images/icons/**/*'], imagesAppIcons);
  gulp.watch(['src/images/**/*.svg'], imagesSvg);
  gulp.watch(['src/images/*'], imagesCompress);
  gulp.watch('src/scripts/**/*', scriptsCompress);
  gulp.watch(
    'src/themes/custom-mandelbrot/**/*',
    gulp.parallel(themeCopy, themeSass)
  );
  done();
}

// Builds

function clean() {
  util.logMessage('Cleaning distribution directories');
  return del(['dist/**/*', 'build/**/*']);
}

exports.buildDev = gulp.series(
  frontMatter,
  clean,
  copy,
  themeCopy,
  themeSass,
  stylesDev,
  imagesIcons,
  imagesAppIcons,
  imagesSvg,
  imagesCompress,
  scriptsCompress,
  fractalStart,
  watch
);

exports.buildProd = gulp.series(
  clean,
  themeCopy,
  themeSass,
  stylesProd,
  imagesIcons,
  imagesAppIcons,
  imagesSvg,
  imagesCompress,
  scriptsCompress,
  fractalBuild
);
