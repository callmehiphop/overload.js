overload.js
===========

Because sometimes, I have bad ideas!

```javascript
var greet = overload(
  // no arguments passed
  function() {
    console.log('Hey, dude!');
  },
  
  // lonely string passed
  ['string', function(name) {
    console.log('Hey,', name + '!'); 
  }],
  
  // a couple of strings passed
  ['string', 'string', function(greeting, name) {
    console.log(greeting + ',', name + '!'); 
  }],
  
  // a number is passed
  ['number', function(name) {
    console.log('0111010101010101 10 1010101'); 
  }]
);


greet();
// Hey, dude!

greet('Stephen');
// Hey, Stephen!

greet('Hola', 'Stephen');
// Hola, Stephen!

greet(7);
// 0111010101010101 10 1010101
```
