angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Items) {
  $scope.lookItems = Items.inLook()
  $scope.itemsWord = function(itemCount) {
    if(itemCount === 1) {
      return "item";
    }
    else {
      return "items";
    }
  }
})

.controller('ItemsCtrl', function($scope, $ionicListDelegate, Items) {
  $scope.items = Items.all()
  $scope.remove = function(item) {
    Items.remove(item);
  }
  $scope.addToLook = function(item) {
    Items.addToLook(item);
    $ionicListDelegate.closeOptionButtons()
  }
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
});
