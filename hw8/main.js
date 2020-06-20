class Student{
  constructor(university,course,fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  
  studentmarks = [5, 4, 4, 5];

  set fullName(name){
    if (name.length < 5){
      console.log("Name is too short!");
    }
    [this.firstname , this.surname] = name.split(" ");
  }
  get fullName(){
    return this.firstname + ' ' + this.surname;
  }

  getInfo(){
    return this.course + " course, " + this.university + ", " + this.fullName  
  }

  get marks(){
    return this.studentmarks;
  }

  set marks(mark){
    this.studentmarks.push(mark);
  }

  getAvarageMark(){
    let res = (this.studentmarks.reduce(function(sum,current){return sum + current}))/this.studentmarks.length;
    return +res.toFixed(2);
  }

  dismiss(){
    this.studentmarks = null;
  }
  recover(){
    this.studentmarks = [5, 4, 4, 5];
  }

}

class BudgetStudent extends Student{
  
  constructor(university,course,fullName){
    super(university,course,fullName);
    setInterval(()=>this.getSchoolarship(),30*1000);
  }
  getSchoolarship(){
    if(this.getAvarageMark()>=4.0 && !(this.studentmarks === null)){
      console.log("Вы получили 1400 грн. стипендии");
    }
  }
  
}

let student1 = new Student("LPNU",2,"Vlad Pasemko");
let student2 = new BudgetStudent("LNU",3,"Vitaliy Khomyk");

console.log(student1.getInfo());
console.log(student2.getInfo());

console.log("Середній бал звичайного студента: ",student1.getAvarageMark());
student2.marks=5;
console.log("Середній бал бюджетного студента: ",student2.getAvarageMark());

