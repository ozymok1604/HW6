class Student {
  constructor(name, course, univerName, marks) {
    this.name = name;
    this.course = course;
    this.univerName = univerName;
    this.marks = marks;
  }

  getInfo() {
    return this.name + " " + this.course + " " + this.univerName;
  }

  get getMarks() {
    return this.marks;
  }

  setMark(value) {
    this.marks.push(value);
    return this.marks;
  }

  getAvarage() {
    let sum = 0;
    this.marks.forEach((element) => {
      sum += element;
    });
    return sum / this.marks.length;
  }

  setNull() {
    this.marks.length = 0;
    return this.marks;
  }
}

class BudjetStudent extends Student {
  constructor(name, course, univerName, marks) {
    super(name, course, univerName, marks);
  }

  getScholarship() {
    let mark = ihor.getAvarage();
    if (mark > 4.5) {
      console.log("Your scholarship is 3000 UAH");
    } else {
      console.log("You haven't scholarship");
    }
  }
}

let vlad = new Student("Vlad", "4", "NULP", [1, 2, 4, 3, 1, 4]);
console.log(vlad.getInfo());

console.log(vlad.getMarks);

console.log(vlad.setMark(7));

console.log(vlad.getAvarage());

console.log(vlad.setNull());

let ihor = new BudjetStudent("Ihor", "3", "NULP", [5, 5, 4, 5, 5, 4]);

ihor.getScholarship();
