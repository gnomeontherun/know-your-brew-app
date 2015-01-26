angular.module('App')
.controller('ColorsCtrl', function ($scope, Colors) {
  $scope.colors = Colors.data;
});
