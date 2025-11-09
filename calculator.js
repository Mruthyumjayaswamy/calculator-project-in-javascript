function calculator(){
let num1=parseFloat(prompt("enter your first number:"));
let operator=prompt("enter operator(+,-,*,/):")
let  num2=parseFloat(prompt("enter your secound number:"));
let result;
switch(operator){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case'*':
    console.log(num1*num2);
    break;
    case '/':
        if(num1===0){
            console.log("zero not divided  the number");
        }
        result=num1/num2;
        break;
    default:
        console.log("error:invalid option");
        
        
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
}
calculator();
    
