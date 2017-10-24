class Animal {
  eat() {}
}
class Dog extends Animal {
  bark() {}
}
class Greyhound extends Dog {
  runFast() {}
}

function foo(fn: (dog: Dog) => Dog) {
  return '' + fn(new Dog());
}

declare const f1: (g: Greyhound) => Greyhound;
declare const f2: (g: Greyhound) => Animal;
declare const f3: (a: Animal) => Animal;
declare const f4: (a: Animal) => Greyhound;


foo(f1);
foo(f2);
foo(f3);
foo(f4);
