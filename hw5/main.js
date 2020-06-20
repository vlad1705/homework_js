//Test 1

const getRandomArray = (length, min, max)=>{
    result = [];
    if (min >= max) return "Error(min >= max!)";
    else{
        for(let i = 0; i<length; i++) result.push(Math.floor(min+Math.random()*(max)))
        return result;
        
    }
}
console.log(`1. Array of random integer numbers (size = ${getRandomArray(10,1,50).length}) ==> `,getRandomArray(10,1,50));


//Test 2

const GetModa = (...numbers) =>{
    let counter = 0, test = 0;
    let result = [], temp = [];
    for (let i = 0; i < numbers.length;i++){
        for (let j = numbers.length; j >= 0; j--) if(numbers[i]===numbers[j] && numbers[i]%1===0)counter++; 
        if(counter>test){
            test = counter;
            temp.splice(0,);
            temp.push(numbers[i]);
        }
        else if(test===counter) temp.push(numbers[i]);
        counter = 0;
    }
    for(let i = 0; i < temp.length; i++){
        if(!result.includes(temp[i])) result.push(temp[i]);
    }
    if(result.length===1) return result[0];
    else return result; 
}

console.log(`2. Moda: `,GetModa(1,2,4,5,6,7,8,8,7));

//Test 3

const getAverage = (...numbers) =>{
    const integernumbers = numbers.filter((number) => number%1 === 0);
    let sum = 0;
    for(let i = 0; i< integernumbers.length;i++) sum = integernumbers[i]+sum;
    return sum/numbers.length; }

console.log(`3. Avarage is: `,getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// let ir = [1,2,3,4,5,6];
// let res = ir.join(",");

// console.log(`3. Avarage is: `,getAverage(res));

// Test 4

const getMedian = (...numbers) =>{
    const integernumbers = numbers.filter((number) => number%1 === 0).sort(function(a, b){return a - b});
    if (integernumbers.length%2 === 0){
        return ((integernumbers[integernumbers.length/2])+(integernumbers[(integernumbers.length/2)-1]))/2
    }
    else return integernumbers[Math.floor(integernumbers.length/2)];
}

console.log(`4. Median is: `,getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//Test 5

const filterEvenNumbers = (...numbers) =>{
    const integernumbers = numbers.filter((number) => (number%2 !== 0));
    const result = integernumbers.filter((number) => (number%1 === 0));
    return result;
}

console.log(`5. Only even numbers: `,filterEvenNumbers(1, 2, 3, 4, 5, 6));

//Test 6

const countPositiveNumbers = (...numbers) =>{
    const result = numbers.filter((number) => (number%1 === 0));
    const integernumbers = result.filter((number) => number > 0);
    let sum = 0;
    for(let i = 0; i< integernumbers.length;i++) sum = integernumbers[i]+sum;
    return sum;
}

console.log(`6. Sum of positive: `, countPositiveNumbers(1, -2, 3, -4, -5, 6));

//Test 8

const replaceBadWords = (string) =>{
    let str = string.split(" ");
    badwords = ['fuck','shit'];
    for(let i = 0;i<str.length;i++){
        for(let j = 0;j<str.length;j++){
            if(str[i].includes(badwords[j])){
                str[i] = str[i].replace(badwords[j],"*")
            }
        }
    }
    return str.join(" ") 
}

console.log(`7. Replacing bad words: `,replaceBadWords("Are you fucking kidding?"));
console.log(`7. Replacing bad words: `,replaceBadWords("It's bullshit!"));

//Test 9 

const factorial = (num) =>{
    if (num === 0) return 1;
    else return num * factorial(num-1);
}
factorial(1);
const generateCombinations = (word) =>{
    
}
