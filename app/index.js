'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var XwfGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous XWF generator!'));

    var prompts = [{
      name: 'appName',
      message: 'What is the name of your app?'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/javascripts');
    this.mkdir('app/javascripts/lib');
    this.mkdir('app/javascripts/lib/jquery-plugins');
    this.mkdir('app/stylesheets');
    this.mkdir('app/stylesheets/modules');
    this.mkdir('app/stylesheets/partials');
    this.mkdir('app/stylesheets/vendor');

    this.template('_index.html', 'app/index.html');

    this.copy('_app.js', 'app/javascripts/app.js');
    this.copy('_main.js', 'app/javascripts/main.js');
    this.copy('_jquery.sampleplugin.js', 'app/javascripts/lib/jquery-plugins/jquery.sampleplugin.js');
    this.copy('_main.scss', 'app/stylesheets/main.scss');
    this.copy('_all.scss', 'app/stylesheets/modules/_all.scss');
    this.copy('_framework.scss', 'app/stylesheets/modules/_framework.scss');
    this.copy('_sprites-2x.scss', 'app/stylesheets/modules/_sprites-2x.scss');
    this.copy('_base.scss', 'app/stylesheets/partials/_base.scss');
    this.copy('_content.scss', 'app/stylesheets/partials/_content.scss');
    this.copy('_footer.scss', 'app/stylesheets/partials/_footer.scss');
    this.copy('_global.scss', 'app/stylesheets/partials/_global.scss');
    this.copy('_grids.scss', 'app/stylesheets/partials/_grids.scss');
    this.copy('_header.scss', 'app/stylesheets/partials/_header.scss');
    this.copy('_resets.scss', 'app/stylesheets/partials/_resets.scss');
    this.copy('_typography.scss', 'app/stylesheets/partials/_typography.scss');

    this.copy('_bower.json', 'bower.json');
    this.copy('_config.rb', 'config.rb');
    this.copy('_gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_readme.md', 'README.md');

    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = XwfGenerator;
