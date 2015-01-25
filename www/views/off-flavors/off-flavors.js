angular.module('App')
.controller('OffFlavorsCtrl', function ($scope, OffFlavors) {
  $scope.offFlavors = OffFlavors.data;
});
