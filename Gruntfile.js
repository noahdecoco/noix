module.exports = function(grunt){

	// VARIABLES
	var _banner = '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n';

	// MODULES
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-browser-sync');

	// CONFIG
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: {
				src: ['dist/*']
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'src/**/*.js']
		},

		uglify: {
			options: {
				banner: _banner
			},
			build: {
				files: {
					'dist/js/scripts.min.js':'src/**/*.js',
					'dist/js/bower/bower.min.js':'dist/js/bower/bower.js'
				}
			}
		},

		less: {
			build: {
				files: {
					'dist/css/styles.css':'src/css/styles.less'
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/styles.min.css':'dist/css/styles.css',
					'dist/css/bower/bower.min.css':'dist/css/bower/bower.css'
				}
			}
		},

		htmlmin: {
			build: {
				options: {
					removeComments: true,
					collapseWhitespace: false
				},
				files: [
				{
					expand: true,
					cwd: 'src/',
					src: ['**/*.html'],
					dest: 'dist/'
				}
				]
			}
		},

		imagemin: {
			build: {
				files: [
				{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.jpg','**/*.png','**/*.svg'],
					dest: 'dist/img/'
				}
				]
			}
		},

		wiredep: {
			build: {
				src: ['src/**/*.html']
			}
		},

		bower_concat: {
			build: {
				dest: {
					'js': 'dist/js/bower/bower.js',
					'css': 'dist/css/bower/bower.css'
				}
			}
		},

		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/css/*.css',
                        'dist/js/*.js',
                        'dist/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './dist'
                }
            }
        },

		watch: {
			stylesheets: {
				files: ['src/**/*.less'],
				tasks: ['less','cssmin']
			},
			scripts:{
				files: ['src/**/*.js'],
				tasks: ['jshint', 'uglify']
			},
			html: {
				files:['src/**/*.html'],
				tasks:['htmlmin']
			}
		}

	});

	// TASKS
	grunt.registerTask('default', 
		[
		'clean', 
		'jshint',
		'bower_concat',
		'uglify', 
		'less', 
		'cssmin', 
		'htmlmin', 
		'imagemin'
		]);

	grunt.registerTask('serve', 
		[
		'browserSync',
		'watch'
		]);

	
};