# Standardized WP Theme

This is a standard boilerplate WordPress theme modified from the [Underscores Theme](https://underscores.me).

## New Features!

  - Webpack v4: Bundle all your JS and SCSS into 1 File Each.
  - Babel: Use ES6 with ease.
  - SCSS and Autoprefixer
  - Watch Command
  - Switched to Yarn

### Getting Started

Place this theme in your themes directory. Switch to the Standardized WordPress Theme under 'Apperance' in WordPress.

Making Changes:

First you'll need to install dependancies. The following should be installed globally on your system.

1. yarn https://yarnpkg.com/lang/en/docs/install/
2. Local WordPress Environment: 
    -Local By Fly Wheel https://local.getflywheel.com/ *Easier Set Up - Heavier Program*
    -Laravel Valet https://laravel.com/docs/5.7/valet *Trickier Set up - More Light Wieght*
    -Or any other local environemt.

Once you have yarn and your local WordPress install we're ready to install our dependancies.

- Navigate to your theme directory
```sh
$ cd /standardized-wp-theme
```
- Install dependancies
```sh
$ yarn
```
- Make changes to your scss and JS
```sh
$ yarn watch //watches for changes to js and scss files, then rebuilds.
```
Other Commands
```sh
$ yarn dev //builds for development
$ yarn build //builds for production
```

### Development

Want to contribute? Check the issues tab. Pull this down, branch it, make edits, commit edits, send pull requests! 

License
----

MIT
