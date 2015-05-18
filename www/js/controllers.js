angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ItemsCtrl', function($scope, $ionicListDelegate, Items) {
  $scope.items = Items.all()
  $scope.remove = function(item) {
    Items.remove(item);
  }
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
});
