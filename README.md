# JHA Design

JHA Design is a design language for building sleek, intuitive, powerful, and performant web apps.

## Quick start

Several quick start options are available for using JHA Design in your app: 

- [Download the latest release.](https://github.com/Banno/jha-design/releases)
- Clone the repo: `git clone https://github.com/Banno/jha-design.git`.
- Install with [Bower](http://bower.io): `bower install --save-dev git@github.com:Banno/jha-design.git`.

### What's included

Within the download you'll find the following directories and files:

```
jha-design/
├── css/
│   ├── style.min.css
├── fonts/
│   ├── pn-r.eot
│   ├── pn-r.ttf
│   ├── pn-r.woff
│   ├── pn-r.woff2
│   ├── ...
├── img/
│   ├── apple-touch-icon.png
│   ├── icons.svg
│   ├── ...
└── js/
    ├── icons.js
    └── ...
```

# Bugs and feature requests

Have a bug or feature request? Please [open a new issue](https://github.com/Banno/jha-design/issues/new).

# Documentation

[JHA Design Docs](https://jha-design.herokuapp.com)

# Compiling CSS

JHA Design uses [Gulp](http://gulpjs.com/) to build the framework. It does handy things like compile our Sass to CSS, compress images and run tests. To use it, install the required dependencies as directed and then run some Gulp commands.

## Installation

First you'll need [NPM](http://nodejs.org/download/) and [node.js](http://nodejs.org/download/)

Once you have NPM and node.js, `cd` to this directory and type the following commands:

```
npm install
gulp
```

`npm install` will download all of the developer dependencies needed for building this project. `gulp` will build the project.

## Available Gulp commands

`gulp dev` will build the project and start a web server to view the example page at [localhost:7777](http://localhost:7777).

`gulp profile` will use Stylestats to report on the generated stylesheet's size, number of selectors and other valuable metrics.

`gulp test` will start a web server and run PhantomCSS to take screenshots of components on the page to test for regressions.


## Contributing

Pull requests, please.
