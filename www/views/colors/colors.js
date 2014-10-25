angular.module('App')
.controller('ColorsCtrl', function ($scope, $ionicScrollDelegate, Srm) {
  $scope.colors = Srm.data;
  $scope.large = false;

  $scope.resize = function () {
    $scope.large = !$scope.large;
    $ionicScrollDelegate.resize();
  }

  $scope.contrast = function (rgb) {
    var parts = rgb.split(',');
    var yiq = ((parts[0] * 299) + (parts[1] * 587) + (parts[2] * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  };
});
