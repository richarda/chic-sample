angular.module('starter.services', [])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    type: 'top',
    color: 'white',
    size: '3T',
    description: 'short sleeve, navy stripes',
    image: 'img/stripeshirt.jpg'
  }, {
    id: 1,
    type: 'leggings',
    size: '3T',
    color: 'dark denim',
    description: 'jeggings',
    image: 'img/jeggings.jpg'
  }, {
    id: 2,
    type: 'hat',
    size: '4T',
    color: 'blue, green',
    description: 'turtle hat',
    image: 'img/turtlehat.jpg'
  }, {
    id: 3,
    type: 'leggings',
    size: '2T',
    color: 'dark denim',
    description: 'smaller jeggings',
    image: 'img/jeggings.jpg'
  }, {
    id: 4,
    type: 'shorts',
    size: '2T',
    color: 'yellow',
    description: 'yellow shorts',
    image: 'img/yellowShorts.jpg'
  }];

  var selected = []

  return {
    all: function() {
      return items;
    },
    inLook: function() {
      return selected;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    },
    addToLook: function(item) {
      selected.push(item.id);
    }
  };
});
