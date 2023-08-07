
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`제 이름은 ${this.name}이구요. 나이는 ${this.age}살이에요.`);
  }
}


class Dog extends Pet {
  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }
}



class Cat extends Pet {
  constructor(name, age, sleep) {
    super(name, age);
    this.sleep = sleep;
  }
}

const dog = new Dog('해피', 4, '싸돌아다니기');
const cat = new Cat('야옹', 6, '캣타워에서 잠자기');

dog.introduce();
cat.introduce();