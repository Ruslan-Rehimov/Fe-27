// 2. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub,
//  ikinci array-də isə olmayan elementləri tapın.
let num1 = [1,2,3,4];
let num2 = [3,4,5,6];

let result = num1.filter(item => !num2.includes(item));

console.log(result);
 
