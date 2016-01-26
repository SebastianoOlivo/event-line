

var gulp = require('gulp'),
styleguide = require('sc5-styleguide'),
source = 'css/*.scss',
outputPath = 'output';

module.exports = function(grunt) {

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  gulp: {
    'styleguide-generate': function() {
      var outputPath = 'output';
      return gulp.src(source)
        .pipe(styleguide.generate({
            title: 'Event Line Style Guide',
            server: true,
            rootPath: outputPath
          }))
        .pipe(gulp.dest(outputPath));
    },
    'styleguide-applystyles': function() {
      gulp.src('source')
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest('output'));
    }
  },
  watch: {
    scss: {
      files: 'css/*.css',
      tasks: ['scss', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
    }
  }
});

grunt.loadNpmTasks('grunt-gulp');

grunt.registerTask('default', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles']);

};