var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    tsify = require('tsify'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')


var scripts = {
    process: [, './js/src/*.js']
};

var PATH = {
    src: './src',
    demo: './demo',
    demobuilt: './demo/built/',
    release: './release'
}


async function jsBuild(srcPath, destPath) {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [srcPath],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('ltgraphs.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destPath));
}

async function cssBuild(srcPath, destPath) {
    return gulp.src(srcPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(destPath));
}

gulp.task('demoCSSBuild', function() {
    return cssBuild(PATH.demo + '/scss/app.scss', PATH.demobuilt);
});


gulp.task('srcJSBuildToDemo', function() {
    return jsBuild(PATH.src + '/js/ltgraphs.ts', PATH.demobuilt);
});


gulp.task('srcCSSBuildToDemo', function() {
    return cssBuild(PATH.src + '/scss/ltgraphs.scss', PATH.demobuilt);
});

/*





gulp.task('srcCSSBuildToRelease', function() {
    return cssBuild(PATH.src + '/scss/scroller.scss', PATH.release);
});


gulp.task('srcJSBuildToRelease', function() {
    return jsBuild(PATH.src + '/js/scroller.js', PATH.release);
});

*/

gulp.task('buildDemo', gulp.parallel('demoCSSBuild', 'srcCSSBuildToDemo', 'srcJSBuildToDemo'));


gulp.task('devwatch', function() { 
	gulp.watch(PATH.src + '/scss/**/*.scss', gulp.parallel('srcCSSBuildToDemo'));
	gulp.watch(PATH.demo + '/scss/**/*.scss', gulp.parallel('demoCSSBuild'));
	gulp.watch(PATH.src + '/js/**/*.js', gulp.parallel('srcJSBuildToDemo'));
});


//gulp.task('buildRelease', gulp.parallel('srcJSBuildToRelease', 'srcCSSBuildToRelease'));


// default task
gulp.task('default', async function(){
	console.log("==============================================================================");
	console.log("=== Please run one of the following tasks below:");
	console.log("=== devwatch ---  this task is use for watching and developing the app");
	console.log("=== buildDemo --- this task is use to build css/js demo");
	console.log("=== buildRelease --- this task is to deploy our app to releases");
	console.log("==============================================================================");
});