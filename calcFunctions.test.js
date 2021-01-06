const {add,subtract,multiply} = require('./calcFunctions');


//Test Case 01
let num1=4;
let num2=2;

test(`Adding ${num1} and ${num2}`,()=>{
    expect(add(num1,num2)).toBe(num1+num2);
});

test(`Subtract ${num2} from ${num1}`,()=>{
    expect(subtract(num2,num1)).toBe(num2-num1);
});