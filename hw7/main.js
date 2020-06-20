const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return salary * this.tax;
}
console.log("Function 1 ==> ",getMyTaxes.call(ukraine,2500));

function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}
console.log("Function 2 ==> ",getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}
console.log("Function 3 ==> ",getTotalTaxes.call(ukraine));

function getMySalary(){
  result = {};
  result.salary = Math.ceil(Math.random(500)+1500);
  result.tax = this.tax*result.salary;
  result.profit = result.salary - result.tax;
  return result;
}

console.log(getMySalary.call(ukraine));

setInterval(()=>console.log(getMySalary.call(ukraine)),1000*10);

