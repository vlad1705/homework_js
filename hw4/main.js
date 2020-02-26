const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

let copyStudent = students.slice(0,);
let hz = copyStudent[1];
copyStudent[1]=copyStudent[2];
copyStudent[2]=hz;

function MakePairs(name){
    const res = [];
    for(let i=1;i<name.length;i++) if(i%2!==0) res.push(name.slice(i-1,i+1));
    return res;
}

const Pairs = MakePairs(copyStudent);
console.log(`Done pairs:`, Pairs);

function addsubject(names,subject){
    const res = [];
    let temp = [];
    for(let i = 0;i<subject.length;i++){
        temp.push(names[i].join(" и "),subject[i]);
        res.push(temp);
        temp = [];
    }
    return res;
}

const addedsubject = addsubject(Pairs,themes);
console.log("Added subject:", addedsubject)

function getmarks(students,marks){
    const res = [];
    let temp = [];
    for(let i = 0;i<students.length;i++){
        temp.push(students[i],marks[i]);
        res.push(temp);
        temp = [];
    }
    return res;
}

const gotmarks = getmarks(students,marks);
console.log("Recieved marks:",gotmarks);

function get_mark_for_pair(pairs){
    const res = [];
    let temp = [];
    for(let i = 0;i<pairs.length;i++){
        temp.push(pairs[i][0],pairs[i][1],Math.ceil(Math.random()*5));
        res.push(temp);
        temp = [];
    }
    return res;
}

const mark_for_pairs = get_mark_for_pair(addedsubject);
console.log("Random marks for pairs:",mark_for_pairs);
