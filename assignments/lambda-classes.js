// CODE here for your Lambda Classes
class Person{
    constructor(Obj){
        this.name = Obj.name;
        this.age = Obj.age;
        this.location = Obj.location;
    }
    speak() {
  return ` Hello my name is ${this.name}, I am from ${this.location} `;
    };
}
class Instructor extends Person{
    constructor(Obj){
        super(Obj)
        this.specialty = Obj.specialty;
        this.favLanguage = Obj.favLanguage;
        this.catchPhrase = Obj.catchPhrase;
    };
    demo(subject){
        return (`Today we are learning about ${subject}`);
    };
    grade(student, subject){
       return (`${student.name} recieves a perfect score on ${subject}`);
    };

}

class Student extends Person {
    constructor(Obj) {
        super(Obj);
        this.previousBackground = Obj.previousBackground;
        this.className = Obj.className;
        this.favSubjects = Obj.favSubjects;
        this.grade = Obj.grade;
    }
    listSubjects(Obj) {
        Obj.forEach(Obj1 => console.log(Obj1));
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    };
}

class ProjectManager extends Instructor {
    constructor(Obj) {
        super(Obj);
        this.gradClassName = Obj.gradClassName;
        this.favInstructor = Obj.favInstructor;
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    };

    standUp(channel){
       return (`${this.name} announces to ${channel}, @channel standy times!`);
    };
}
const Max = new Instructor ({
    name: "Bruce",
    age: 26,
    location: "Texas",
    specialty:"Redux",
    favLanguage:"Spanish",
    catchPhrase:"Oii matey."
 
 })

 const Tyler = new Student ({
    name: "Tyler",
    age: 26,
    location: "North Carolina",
    previousBackground:"None",
    className:"Web-22",
    favSubjects:"JavaScript"
 })

 const Amanda = new ProjectManager ({
    name: "Bruce",
    age: 26,
    location: "Texas",
    specialty:"CSS Flexbox",
    favLanguage:"",
    catchPhrase:"",
    gradClassName: "Web22",
    favInstructor: "Dan"
 })
console.log(Max.demo("Javascript Closures"));
console.log(Max.grade(Tyler, "EVERY PROJECT!"));
console.log(Max.speak());

Tyler.listSubjects(["Java","Redux","Python"]);
console.log(Tyler.PRAssignment("Javascipt IV"));
console.log(Tyler.sprintChallenge("Javascript"));

console.log(Amanda.debugsCode(Tyler, "JavaScript"));
console.log(Amanda.standUp("Web22_Amanda"));