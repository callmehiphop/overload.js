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
  
  
  var types = {
    'undefined': 'undefined',
    'number': 'number',
    'boolean': 'boolean',
    'string': 'string',
    '[object Function]': 'function',
    '[object RegExp]': 'regexp',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object Error]': 'error'
  };
  
  
  function getType(thing) {
    return types[typeof thing] || types[toString.call(thing)] || (thing ? 'object' : null);
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
  
  function equals(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    
    var isEqual = true;
    
    each(a, function(thing, i) {
      if (b[i] !== thing) {
        isEqual = false;
        return false;
      }
    });
    
    return isEqual;
  }
  
  return function() {
    var functions = slice.call(arguments);
    
    return function() {
      var args = slice.call(arguments);
      var suppliedTypes = map(args, function(arg) {
        return getType(arg);
      });
      
      each(functions, function(func) {
        var funcArgTypes = func.slice(0, func.length - 1);
        func = func[func.length - 1];
        
        if (equals(suppliedTypes, funcArgTypes)) {
          func.apply(this, args);
          return false;
        }
      }, this);
    };
  };
  
}));
