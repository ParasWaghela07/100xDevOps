
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog=new Animal(dog,4);//object creation using class much easier

// rather than this stuff

let dog1={
  name:"dog",
  legCount:5
};


