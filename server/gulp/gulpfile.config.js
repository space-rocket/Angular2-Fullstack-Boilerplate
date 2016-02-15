'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './client/';
        this.sourceApp = this.source;

        this.tsOutputPath = this.source + '../public/';
        this.allJavaScript = [this.source + '*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = '../client/src/typings/';
        this.libraryTypeScriptDefinitions = '../client/src/typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
