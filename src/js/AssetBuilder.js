(function() {
  'use strict';

  angular
    .module('app')
    .factory('AssetBuilder', AssetBuilder);

  function AssetBuilder() {

    return function(title, url) {
      return {
        title: title,
        url: url
      }
    };
  }
})();