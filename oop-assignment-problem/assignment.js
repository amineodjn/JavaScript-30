class Course {
  #price;

  set price(value) {
    if (value < 0) {
      throw 'Invalid pricing';
    }
    this.#price = value;
  }

  get price() {
    return this.#price;
  }

  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  valueCalc() {
    const value = this.length / this.#price;
    return value;
  }
  Output() {
    const offer = `This ${this.title} course has ${this.length} hours and costs $${this.price}!`;
    return offer;
  }
}

class PracticalCourse extends Course {
  publish() {
    console.log('I am published');
  }
}
class TheoreticalCourse extends Course {
  constructor(courseTitle, courseLength, coursePrice, exerciseCount) {
    super(courseTitle, courseLength, coursePrice);
    this.numOfExercises = exerciseCount;
  }
}
const JScourse = new Course('Javascript', 50, 44);
const reactCourse = new Course('React', 50, 60);

const practic = new PracticalCourse('Practical course', 47, 65);

const Angularcourse = new TheoreticalCourse('Angular', 60, 55, 10);

console.log(JScourse);
console.log(reactCourse);

console.log(JScourse.valueCalc().toFixed(2));
console.log(reactCourse.valueCalc().toFixed(2));
console.log(Angularcourse);
console.log(JScourse.Output());
console.log(reactCourse.Output());
console.log(Angularcourse.Output());
console.log(practic);
console.log(Angularcourse);
console.log(practic.Output());
practic.publish();
