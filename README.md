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
  [String, function(name) {
    console.log('Hey,', name + '!'); 
  }],
  
  // a couple of strings passed
  [String, String, function(greeting, name) {
    console.log(greeting + ',', name + '!'); 
  }],
  
  // a number is passed
  [Number, function(name) {
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

It also works with custom object types!
```javascript
function Person(name) {
  this.name = name;
}


var greet = overload(
  [Person, function(person) {
    console.log('Hello,', person.name + '!');
  }],
  
  [String, Person, function(greeting, person) {
    console.log(greeting + ',', person.name + '!');
  }]
);


var stephen = new Person('Stephen');
greet('Howdy', stephen);
```
