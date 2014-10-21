angular.module('Cart', []).controller('CartController', ['$scope', function($scope) {
  $scope.price = 10800;
  $scope.quantity = 1;

  $scope.subtotal_price = function() {
    return $scope.price * $scope.quantity;
  }
}]);
