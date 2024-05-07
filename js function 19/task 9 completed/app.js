// Task-09
// İstənilən rəqəmin faktorialını hesablayan bir funksiya yaradın. (dövrlə və if-else ilə)\
let number = +prompt("reqemi daxil edin")
let calculateFactoriaL = (number) => {
if(number === 0 || number === 1) return 1;
else return number * calculateFactoriaL(number - 1);
};
document.write("Result " , calculateFactoriaL(number));
