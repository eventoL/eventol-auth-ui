exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.spec.js'
    ],

    multiCapabilities: [
        {
            'browserName': 'phantomjs',
            'phantomjs.binary.path': require('phantomjs-prebuilt').path,
            'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
        }
    ],

    baseUrl: 'http://127.0.0.1:4000',

    mochaOpts:{
        reporter: 'xunit-file'
    },

    framework: 'mocha'
};
