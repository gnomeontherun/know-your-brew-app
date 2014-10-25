angular.module('App')
.controller('StyleCtrl', function ($scope, $stateParams, Categories) {
  $scope.params = $stateParams;
  $scope.style = Categories.data[$stateParams.typeIndex].category[$stateParams.categoryIndex].subcategory[$stateParams.subcategoryIndex];
})
