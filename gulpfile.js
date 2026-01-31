import gulp from 'gulp';
import shell from 'gulp-shell';

// Default task → يشغّل Parcel
gulp.task('default', shell.task([
  'npx parcel starter/index.html --open'
]));

// Unit tests task → يشغّل Mocha
gulp.task('test', shell.task([
  'npx mocha "test/**/*.js"'
]));

// Cypress E2E tests task → من CLI
gulp.task('cypress', shell.task([
  'npx cypress run'
]));
