let apples = 15.678;
let oranges = 123.965;
let bananas = 90.2345;

//1
let max = Math.max(apples,oranges,bananas);
//2
let min = Math.min(apples,oranges,bananas);
//3
let sum = apples+oranges+bananas;
//4
let sum_rounded = Math.floor(apples) + Math.floor(oranges) + Math.floor(bananas);
//5
let sum_rounded_hundred = Math.round(sum/100)*100;
//6
let sum_rounded_floor = (Math.floor(((apples+oranges+bananas)))%2===0)? true: false;
//7
let rest = 500 - sum;
//8
let avarage = (sum/3).toFixed(2);

//9
let discount = Math.round(Math.random()*50);
let price_with_discount = (sum-(sum*(discount/100))).toFixed(2);
let self_cost = sum/2;
let result = Math.round(self_cost - (sum-price_with_discount))




document.writeln(`1)max var: ${max} <br \/>2) min var: ${min} <br \/>3) sum of var's: ${sum} <br \/>4) rounded sum of vars: ${sum_rounded} <br \/>
5)sum rounded to hundred: ${sum_rounded_hundred} <br \/>6) is the number even: ${sum_rounded_floor} <br \/>7) rest: ${rest} <br \/>
8)avarage: ${avarage} <br \/>9) ${discount}% <br \/> price with discount: ${price_with_discount} <br \/> result: ${result}

`)