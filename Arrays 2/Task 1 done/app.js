// 1. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.
let num1 = [1, 2, 3, 4, 5];
let num2 = [3, 4, 5, 6, 7];

let num = num1.concat(num2);


let cleanNum = num.filter((item, index) => num.indexOf(item) === index);

console.log(cleanNum);