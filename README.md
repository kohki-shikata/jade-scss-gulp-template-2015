# jade-scss-gulp-template-2015

## License

MIT License

## Requirements
* git
* npm
* gulp
* bower (if you need to)

## Initial setup
1. cd path/to/your_dirctory
1. git clone https://github.com/kohki-shikata/jade-scss-gulp-template-2015.git
1. cd dev
1. npm install
1. Set structured like below...
1. gulp

## Set dirctory structure

We often do this like down below...
You only need to make directories and files under /dev.
gulp compiles when you everytime save files under /dev/jade or /dev/scss, and deproies /site_root dirctory.

* /site_root
    * /dev
        * /jade
            * index.jade
            * elements
                * _head.jade
                * _header.jade
                * _footer.jade
            * /about
                * index.jade
            * /products
                * products.jade
            * access.jade
            * contact.jade
        * /scss
            * app.scss
            * partial
                * _toppage.scss
                * _about.scss
                * _product.scss
                * _navigation.scss
                * _buttons.scss
        * /bower_components
            * (will be installed components by bower)
        * /node_modules
            * (This directory is made after "npm install" then you never need to care here.)
    * index.html
    * /about
        * index.html
    * access.html
    * contact.html
    * /common
        * /css
            * app.css
            * app.css.map
        * /js
            * (copy js files from /dev/bower_components)
            * (place js files here directly if you need to)
    * /products
        * index.html

## Configure gulpfile.js
### Why copy?
    
    var copy_js = [
    /*
      'bower_components/swipebox/src/js/jquery.swipebox.min.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/lightbox2/dist/js/lightbox.min.js',
    */
    ];
    
    var copy_css = [
    /*
      'bower_components/slick-carousel/slick/slick.css',
      'bower_components/slick-carousel/slick/slick-theme.css',
      'bower_components/lightbox2/dist/css/lightbox.css'
    */
    ];
    
    gulp.task('copy', function () {
      gulp.src(copy_js)
       .pipe(gulp.dest('../common/js'));
      gulp.src(copy_css)
       .pipe(gulp.dest('../common/css'));
    });

If you use bower, you need to move js and css files to site_root. In this case, we get into /common directory.

### Why not concat and uglify js?

This template is made for typical Japanese WEBSITE.

1. Keep maintainability and modifierbility after deploy or delivered for the client.
1. We often use this template for static html templates before CMS integration. In that case, concat and uglify is task for CMS.

### Why do compile scss to css, in spite of not concat js?

Quite simple. Browsers don't understand scss defaultly.

## Why not /dist directory ?

Our process neccesity,

1. Deploy to staging server with Git.
1. Paths inside HTML files must be started from site_root, like "/common/js/jquery.js".

## Preview

1. Hit "gulp" at /dev/
1. Go to brower and enter "localhost:7001"
1. Preview will change when you save files under "/dev/jade/*" or "/dev/scss/*"

### Doesn't 

## Use bower

1. cd dev
1. mv bower-template.json bower.json
1. bower install SOMETHING --save, or --save-dev

Then, update gulpfile.js var copy_js, var copy_css

    var copy_js = [
      'bower_components/swipebox/src/js/jquery.swipebox.min.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/lightbox2/dist/js/lightbox.min.js',
    ];
    
    var copy_css = [
      'bower_components/slick-carousel/slick/slick.css',
      'bower_components/slick-carousel/slick/slick-theme.css',
      'bower_components/lightbox2/dist/css/lightbox.css'
    ];

This system for develop with multi developers. When someone do "bower install SOMETHING --save", the guy have to commit and push bower.json. Then other guys pull this bower.json, and do "bower update". This process need to maintain and keep frontend enviroment each members.

## Done! How to deliver to our client?

Upload server or compress dirctory EXCEPT "/dev", "/.git", "/.gitignore".

Happy coding!
