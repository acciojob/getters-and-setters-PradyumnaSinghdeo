
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  
  get age() {
    return this._age;
  }
}


class Student extends Person {
  // Method for studying
  study() {
    console.log(`${this.name} is studying`);
  }
}


class Teacher extends Person {
  
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
