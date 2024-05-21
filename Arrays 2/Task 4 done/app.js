// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa
//  onları massiv şəklində geri qaytaran,
//  yoxdursa uyğun mesajı geri funksiya yazın.

// let num1 = [1, -2, 3, -4, 5];
// let result = getNegativeNumbers(num1);
// console.log(result);

const menfiEdedler = (arr) => {
    let menfiEdedler = arr.filter(item => item < 0);
    
    if(menfiEdedler.length > 0) {
        return menfiEdedler;
    } else{
        return "Massivdə mənfi ədədlər tapılmadı.";
    }
}
let num1 = [1, -2, 3, -4, 5];
let result = menfiEdedler(num1)
console.log(result);