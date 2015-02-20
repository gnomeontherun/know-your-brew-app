angular.module('App')
.controller('ChartCtrl', function ($scope, Categories) {
  $scope.categories = [];
  angular.forEach(Categories.data[0].category, function (category) {
    angular.forEach(category.subcategory, function (subcategory) {
      $scope.categories.push(subcategory);
    });
  });

  $scope.getStyle = function (category) {
    var styles = {};
    console.log(category)
    styles.width = parseInt((category.stats.ibu.high - category.stats.ibu.low) * 3) + 'px';
    styles.left = parseInt(category.stats.ibu.low * 3) + 'px';
    return styles;
  };
});
