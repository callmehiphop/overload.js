overload.js
===========

Because sometimes, I have bad ideas!

```javascript
var greet = overload(
  [function() { console.log('Hey, dude!') }],
  ['string', function(name) { console.log('Hey,', name + '!'); }],
  ['string', 'string', function(greeting, name) { console.log(greeting + ',', name + '!'); }],
  ['number', function(name) { console.log('Named after a number? Weird..'); }]
);

greet();
// Hey, dude!

greet('Stephen');
// Hey, Stephen!

greet('Hola', 'Stephen');
// Hola, Stephen!

greet(7);
// Named after a number? Weird..
```
