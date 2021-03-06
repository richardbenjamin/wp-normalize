module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                  style: 'compressed'
                },
                files: {
                    'css/app.css' : 'scss/app.scss'
                }
            }
        },
        uglify: {
            options: {
             mangle: true,
              compress: {
                drop_console: true
              }
            },
            my_target: {
                options: {
                    beautify: true
                },
                files: {
                    'js/build/production.min.js': ['js/responsiveslides.js','common.js']
                }
            }
        },
        aws_s3: {

        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            js: {
                files: 'js/*.js',
                tasks: ['uglify']
            },
            livereload: {
                files: ['*.html', '**/*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'watch' ]);

};