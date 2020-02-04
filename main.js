let n = +(prompt("Enter N:"));
let m = +(prompt("Enter M:"));

t = true;
while(t){
    let n_isinteger = (n%1==0?true:false);
    let m_isinteger = (m%1==0?true:false);
    
    if (n_isinteger && m_isinteger && (n<m) && ((!isNaN(n))||(!isNaN(m)))){
        t = false;
    }
    else{
        alert("Wrong value!!! Please, enter again, not integers or n>m.");
        n = +(prompt("Enter N:"));
        m = +(prompt("Enter M:"));
    }
}
let test = confirm("Let even in?");

document.writeln(`N: ${n} <br \/>  M: ${m} <br \/>`);

let sum = 0;
for(n; n<m+1; n++){
    if(test){
        sum += n;
    }else{
        if(n%2==0){
            continue
        }
        sum += n;
    }
}

document.writeln(`Sum: ${sum}`);