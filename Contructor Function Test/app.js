'use strict';

var ObjectFactory = (function() {
  var _self = '';
  var _privateVal = '';

  function getAll() {
    return _privateVal + _self.publicVal;
  }

  function ObjectFactory(publicVal, privateVal) {
    _self = this;
    _privateVal = privateVal;

    this.publicVal = publicVal;
  
    this.getPrivate = function() {
      return _privateVal;
    };

    this.getAll = function() {
      return getAll();
    }
  }

  return ObjectFactory;
})();

var obj = new ObjectFactory('Sven', 'Tom');
console.log(obj.publicVal);
console.log(obj.getPrivate());
console.log(obj.getAll());