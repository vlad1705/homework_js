const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


const getSubjects = (student) => {
    let arr = Object.keys(student["subjects"]);
    for(let i = 0;i < arr.length;i++){
        arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase())
        if(arr[i].includes("_")){
            arr[i] = arr[i].replace("_"," ")
        }
    }
    return arr;
}
console.log(`Get subject of student: `,getSubjects(students[0]));    



const getAverageMark = (student) =>{
    let marks = Object.values(student["subjects"]);
    let marks1 = marks[0].concat(marks[1],marks[2]);
    let result = marks1.reduce(function(sum, current) {
        return sum + current;
      }, 0);

    return (result/marks1.length).toFixed(2) ;
} 
console.log(`Avarage mark is: `,getAverageMark(students[0]));




const getStudentInfo = (student) =>{
    let result = Object.assign({},student);
    delete result.subjects;
    result["averageMark"] = getAverageMark(students[0]);
    return result;
}
console.log(`Student's info: `,getStudentInfo(students[0]));




const getStudentsNames = (student) => student.map(cur=>cur.name).sort();
console.log(`Students name: `,getStudentsNames(students));


const getBestStudent = (student) =>{
    
    max = {name:" ",subjects:{a:[0],b:[0],c:[0]}};

    for(let i = 0; i < students.length; i++){
        if(getAverageMark(student[i])>getAverageMark(max)){
            max.name = student[i].name;
            max.subjects = student[i].subjects;
        }
    }
    return max.name;
}

console.log(`Best student: `,getBestStudent(students));


const calculateWordLetters = (text) =>{
    let res = {};
    for(let i = 0; i < text.length; i++){
      if(!(text[i] in res)){
        res[text[i].toLowerCase()] = 1;
      }
      else{ res[text[i]] += 1; }
    }
    return res;
} 

console.log(`Calculating letters: `,calculateWordLetters("Vladislav"))