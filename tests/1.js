{
//////////////////////////// FUNCTIONAL
function Animal () {
    this.eat = function () { console.log('FUNCTIONAL Animal - eat') };
  }
  function Rabbit () {
    Animal.apply(this, arguments);
    this.run = function () { console.log('FUNCTIONAL Rabbit - run') };
  }
  const test = new Rabbit();
  test.run();
  test.eat();
}
{  
//////////////////////////// PROTOTYPE
  function Animal () {
    this.eat = function () { console.log('PROTOTYPE Animal - eat') };
  }
  function Rabbit () {
    this.run = function () { console.log('PROTOTYPE Rabbit - run') };
  }
  const test1 = new Animal();
  const test2 = new Rabbit();
  test2.__proto__ = test1;
  test2.run();
  test2.eat();
}
{
  //////////////////////////// CLASS
  class Animal {
    eat () { console.log('CLASS Animal - eat') };
  }
  class Rabbit extends Animal {
    run () { console.log('CLASS Rabbit - run') };
  }
  const test3 = new Rabbit();
  test3.run();
  test3.eat();
}