angular.module('Cart', []).controller('CartController', ['$scope', function($scope) {
  $scope.price = 10800;
  $scope.quantity = 1;

  $scope.total_price = function() {
    return $scope.price * $scope.quantity;
  };

  $scope.subtotal_price = function() {
    return $scope.price * $scope.quantity;
  };
}]);
