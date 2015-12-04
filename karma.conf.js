// Karma configuration
// Generated on Wed Dec 02 2015 02:06:53 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'https://cdn.firebase.com/js/client/2.3.2/firebase.js',
      'https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js',
      'angular-mocks.js',
      'bower_components/underscore/underscore.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material-mocks.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material-icons/angular-material-icons.js', //1
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', // 2
      'bower_components/angular-audio/app/angular.audio.js', // 3
      'bower_components/angular-route/angular-route.js',
      'js/main.js',
      'js/**/*.js',
      'test/**/*.js',
      'tests/*.js',
      'tests/*.js[*39m[&36m',
      'tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
