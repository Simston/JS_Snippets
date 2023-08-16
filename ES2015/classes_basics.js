class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) return "You are Expelled !"
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score);
    }
    calculateAverage() {
        //let sum = this.scores.reduce(function (a, b) { return a + b });
        let sum = this.scores.reduce((a, b) => a + b);
        return 'Your average score is ' + sum / this.scores.length + '.';
    }
    static EnrollStudents() {
        return 'Enrolling Students.'
    }
}

// TESTS

// INSTANCES
let student1 = new Student('Stef', 'Simz', 3);
let student2 = new Student('Alexandra', 'Laidet', 5);

// TEST METHODS
// Student 1
console.log(student1.fullName());
student1.markLate(); // 1
console.log(student1.markLate()); // 2
console.log(student1.markLate()); // 3
student1.addScore(92);
student1.addScore(87);
console.log(student1.scores, '\n');

// Student 2
console.log(student2.fullName());
student2.addScore(90);
student2.addScore(92);
student2.addScore(79);
student2.addScore(69);
console.log(student2.scores);
console.log(student2.calculateAverage());

// Static Methods
console.log(Student.EnrollStudents());