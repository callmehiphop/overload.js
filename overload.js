;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.overload = factory();
  }
  
}(this, function() {

  'use strict';

  
  var slice = Array.prototype.slice;
  var toString = Object.prototype.toString;
  

  function isArray(thing) {
    return toString.call(thing) === '[object Array]';
  }
  
  function each(things, callback, context) {
    var i = 0, length = things.length;
    
    for (; i < length; i++) {
      if (callback.call(context, things[i], i, things) === false) {
        break;
      }
    }
  }
  
  function map(things, callback) {
    var results = [];
    
    each(things, function(thing) {
      results.push(callback(thing));
    });
    
    return results;
  }
  
  function checkTypes(things, requiredTypes) {
    if (things.length !== requiredTypes.length) {
      return false;
    }
    
    var isEqual = true;
    
    each(things, function(thing, i) {
      if (thing.constructor !== requiredTypes[i]) {
        isEqual = false;
        return false;
      }
    });
    
    return isEqual;
  }
  

  function overload() {
    var functions = slice.call(arguments);
    
    return function() {
      var args = slice.call(arguments);
      
      each(functions, function(func) {
        var funcArgTypes = [];

        if (isArray(func)) {
          funcArgTypes = func.slice(0, func.length - 1);
          func = func[func.length - 1];
        }
        
        if (checkTypes(args, funcArgTypes)) {
          func.apply(this, args);
          return false;
        }
      }, this);
    };
  };
  

  return overload;

}));
