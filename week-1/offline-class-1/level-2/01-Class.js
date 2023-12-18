
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  static hi(){
    return 'hi everyone';
  }
};
let obj=new Animal("Dog", 4);
let obj2=new Animal("Cat", 4);
console.log(obj.describe());
console.log(obj2.describe());
console.log(Animal.hi());


