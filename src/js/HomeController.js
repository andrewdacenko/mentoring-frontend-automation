(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /*@ngInject*/
  function HomeController(AssetBuilder) {
    var vm = this;

    vm.assets = [
      AssetBuilder('Gulp', 'http://dimadulin.in.ua/wp-content/uploads/2015/06/gulp-dulin-logo.png'),
      AssetBuilder('Karma', 'http://karma-runner.github.io/assets/img/banner.png'),
      AssetBuilder('Sass', 'http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'),
      AssetBuilder('Angular', 'http://www.userlogos.org/files/logos/2690_fernandosantucci/angular.io-logo.png?1428949275'),
      AssetBuilder('BrowserSync', 'https://pbs.twimg.com/profile_images/657993934191349760/ani9OGs3.png'),
      AssetBuilder('Express', 'https://sub.watchmecode.net/wp-content/uploads/2015/02/express.png'),
      AssetBuilder('Heroku', 'http://www.wizarddevelopment.com/assets/heroku-logo-fed730300aab0681454914855ef3c445.png'),
      AssetBuilder('Travis-CI', 'http://binary-studio.com/wp-content/uploads/2015/08/travis.png')
    ];
  }
})();