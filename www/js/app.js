angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home/home.html'
  })
  .state('categories', {
    url: '/categories',
    controller: 'CategoriesCtrl',
    templateUrl: 'views/categories/categories.html',
    resolve: {
      Categories: function (BjcpCategories) {
        return BjcpCategories;
      }
    }
  })
  .state('category', {
    url: '/category/:typeIndex/:categoryIndex',
    controller: 'CategoryCtrl',
    templateUrl: 'views/category/category.html',
    resolve: {
      Categories: function (BjcpCategories) {
        return BjcpCategories;
      }
    }
  })
  .state('style', {
    url: '/category/:typeIndex/:categoryIndex/:subcategoryIndex',
    controller: 'StyleCtrl',
    templateUrl: 'views/style/style.html',
    resolve: {
      Categories: function (BjcpCategories) {
        return BjcpCategories;
      }
    }
  })
  .state('colors', {
    url: '/colors',
    controller: 'ColorsCtrl',
    templateUrl: 'views/colors/colors.html',
    resolve: {
      Srm: function (SrmRgb) {
        return SrmRgb;
      }
    }
  })
  $urlRouterProvider.otherwise('/');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('BjcpCategories', function ($http) {
  return $http.get('/data/bjcp-2008.json');
})

.factory('SrmRgb', function ($http) {
  return $http.get('/data/srm-rgb.json');
})
