# Angular2 Fullstack Boilerplate

A simple FullStack Angular2 app boilerplate that uses Express, Nunjucks and Gulp.


## Features
+   [Angular2](https://angular.io/)
+   [Gulp](http://gulpjs.com/)
+   [Nunjucks](https://mozilla.github.io/nunjucks/) for templating 
+   [Bootstrap](http://getbootstrap.com/) SASS
+   [Font Awesome](http://fontawesome.io/)


## Requirements

[Node.js](http://nodejs.org/download/)


## Installation

Ensure you have Gulp installed globally:
```sh
$ npm install --global gulp
```
Next git clone the repo and install npm packages:
```bash
$ git clone git@github.com:bigbassroller/Angular2-Fullstack-Boilerplate.git && cd ./Angular2-Fullstack-Boilerplate
$ npm install
```

## Compile HTML, SASS, move media assets and launch web server with livereload:

```bash
$ gulp
```

## Why? 

 - Create awesome Angular2 Apps
 - Write HTML using partials and components
 - Scalable and easy to maintain

## Questions and contributing

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to include basic debugging information like operating system
and relevant version details such as:


```bash
$ npm version

# {'Angular2-Fullstack-Boilerplate': '1.0.0',
#   npm: '3.3.12',
#   ares: '1.10.1-DEV',
#   http_parser: '2.6.0',
#   icu: '56.1',
#   modules: '47',
#   node: '5.1.0',
#   openssl: '1.0.2d',
#   uv: '1.7.5',
#   v8: '4.6.85.31',
#   zlib: '1.2.8' }
```

Contributions are welcome. 

## Rough road map:
+ Add routes to each page. Each page would essenstially be its own app. Inspired by [Jedi Reza's Aqua project](https://github.com/jedireza/aqua)
+ Add Jquery [See this article, by Torgeir Helgevold](http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0)
+ Add MongoDB. Open to other options. 
+ Add todo component that stores in mongodb.
+ Add push pin notifications with web workers
+ Put up demo site
+ Add env vars or config file [see 12 factor app for details] (http://12factor.net/config)
+ Add users and roles. Once again inspired by [Jedi Reza's Aqua project](https://github.com/jedireza/aqua)
+ Add [Angular2 Universal](https://github.com/angular/universal)
+ Add postman for authentication
+ Add nodemailer

## License

MIT
