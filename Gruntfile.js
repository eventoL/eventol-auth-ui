module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env: {
            dev: {
                XUNIT_FILE: 'results/xunit.xml'
            }
        },

        'http-server': {
            testing: {
                root: './app',
                host: '0.0.0.0',
                port: 4000,
                runInBackground: true,
                logFn(req, res, error) { }
            },
            production:{
                root: './app',
                host:'0.0.0.0',
                port:4000,
                logFn(req, res, error) { }
            }
        },

        eslint: {
            jenkins: {
                options: {
                    format    : './node_modules/eslint-formatter-checkstyle-relative-paths',
                    outputFile: 'eslint.xml'
                },
                src    : ['./app/**/*.js']
            },
            dev    : {
                options: {
                    format: 'stylish'
                },
                src    : ['./app/**/*.js']
            },
            watch  : {
                options: {
                    format: 'stylish'
                },
                src    : ['./app/**/*.js']
            }
        },

        processhtml: {
            options: {
                commentMarker: 'process'
            },
            dist   : {
                files: [
                    {
                        expand: true,
                        src   : './app/index.html',
                        dest  : '.'
                    }
                ]
            }
        },

        protractor: {
            jenkins: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: 'e2e/jenkins-test-conf.js', // Default config file
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false // If true, protractor will not use colors in its output.
                }
            },
            test: {
                options: {
                    configFile: 'e2e/test-conf.js', // Default config file
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false // If true, protractor will not use colors in its output.
                }
            }
        }
    });

    grunt.registerTask('jenkins', [
        'env:dev', 'eslint:jenkins', 'http-server:testing', 'protractor:jenkins'
    ]);

    grunt.registerTask('test', [
        'eslint:dev', 'http-server:testing', 'protractor:test'
    ]);

    grunt.registerTask('start', [
        'processhtml:dist', 'http-server:production'
    ]);
};
