angular.module('starter.services', [])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    type: 'top',
    color: 'blue',
    size: '3T',
    description: 'short sleeve, butterflies',
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxMjE0/z/-tYAAOSwBahU97RT/$_35.JPG'
  }, {
    id: 1,
    type: 'leggings',
    size: '2T',
    color: 'jean',
    description: 'no pockets',
    image: 'http://www.oldnavy.com/products/res/mainimg/stretch-denim-jeggings-for-baby-dark.jpg'
  }, {
    id: 2,
    type: 'hat',
    size: '4T',
    color: 'pink',
    description: 'white polka dots',
    image: 'img/pinkhat.jpg'
  }, {
    id: 3,
    type: 'leggings',
    size: '3T',
    color: 'jean',
    image: 'img/toddlerjeggings2.jpg'
  }];

  return {
    all: function() {
      return items;
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
    }
  };
});
