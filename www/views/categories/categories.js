angular.module('App')
.controller('CategoriesCtrl', function ($scope, Categories) {
  $scope.categories = Categories.data;
})
