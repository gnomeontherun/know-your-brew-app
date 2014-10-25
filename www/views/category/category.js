angular.module('App')
.controller('CategoryCtrl', function ($scope, $stateParams, Categories) {
  $scope.params = $stateParams;
  $scope.category = Categories.data[$stateParams.typeIndex].category[$stateParams.categoryIndex];
})
