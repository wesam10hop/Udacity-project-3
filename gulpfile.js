import gulp from "gulp";
import shell from "gulp-shell";

// Parcel dev server
gulp.task("parcel-dev", shell.task("parcel starter/index.html --port 1234"));

// Parcel build
gulp.task("parcel-build", shell.task("parcel build starter/index.html"));

// Mocha unit tests
gulp.task("unit-test", shell.task('mocha "test/**/*.js"'));

// Cypress E2E tests
gulp.task("cypress-test", shell.task("cypress run"));

// Default task → Dev server + Cypress tests
gulp.task("default", gulp.series("parcel-dev", "cypress-test"));
