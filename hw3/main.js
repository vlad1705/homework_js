function getMaxDigit(num){
    let max = 0;
    num = num.toString();
    for(let i=0;i<num.length;i++){if (num[i]>max) max = num[i]};
    return max;
}

function power(num,pow){
    if (pow === 0){
        return 1;
    }
    else{
        c = num;
        for(let i = 1;i<pow;i++){
            num = c*num;
        }
        return num;
    }
}

function first_big(name){
    res = name[0].toUpperCase()+(name.slice(1,name.length)).toLowerCase();
    return res;
}

function taxes(sum){
    sum = sum * 0.805;
    return sum;
}

function getRandomNumber(m,n){
    let s = Math.floor(Math.random()*((n+1)-m))+m;
    return s;
}
function countLetter(letter,word){
    count = 0;
    for(let i = 0;i<word.length;i++){
        if(letter === word[i]){
            count++
        }     
    }
    return count;
}
function convertCurrency(money){
    let res;
    if(money[money.length-1] === '$'){
        res = parseFloat(money)*25;
        return res+"uah";
    }
    else if(money.toLowerCase().search("uah")!=-1){
        res = parseFloat(money)/25;
        return res+"$";
    }
    else{
        return "Can't be converted";
    }

}

function getRandomPassword(number = 8){
    pasword = '';
    for(let i = 0;i<number;i++){
        pasword += Math.floor(Math.random()*9)
    }
    return pasword;
}

function deleteLetters(letter,word){
    res = '';
    for(let i = 0;i<word.length;i++){
        if (letter.toLowerCase() === word[i].toLowerCase()){
            res += '';
        }
        else{
            res += word[i];
        }
    }
    return res;
}
function isPalyndrom(word){
    word = word.toLowerCase().replace(/\s/g, '');
    word1 = '';
    for(let i = word.length-1;i>=0;i--){
        word1 += word[i];
    }
    if (word === word1){return true}
    else {return false};
}
function deleteDuplicateLetter(word){
    word = word.toLowerCase();
    let count = 0;
    let updated = '';
    for(let i =0;i<word.length;i++){
        for(let j = word.length-1;j>=0;j--){
            if(word[i]===word[j]){
                count++
            }
        }
        if(count === 1){
            updated += word[i];
            count = 0;
        }
        else{
            count = 0;
        }
    }
    return updated;

}

console.log(getMaxDigit(45773));
console.log(power(2,6));
console.log(first_big("вЛАД"));
console.log(taxes(1000));
console.log(getRandomNumber(3,10));
console.log(countLetter("a","Vladislavaaa"));
console.log(convertCurrency("10000$"));
console.log(getRandomPassword());
console.log(deleteLetters('a',"VlAAAd"))
console.log(isPalyndrom("ALGOGLAk"))
console.log(deleteDuplicateLetter("Бисквит был очень ннежный"));