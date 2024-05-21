// 6. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal
//  massivin elementlərindən ibarət yeni massiv yaradın:

// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];
// Output: [2, 10, 7, 6, 9, 8, 6, 4];



const num1 = [1, 5, -7, 3, -9, 4, -6, 2];
const positiveNumbers = [];
const negativeNumbers = [];
for(let i = 0; i < num1.length; i++){
    if(num1[i] < 0){
        negativeNumbers.push(num1[i]*(-1));
    }else{
        positiveNumbers.push(num1[i]*(2));
    }
}

console.log(negativeNumbers);
console.log(positiveNumbers);
const num2 = negativeNumbers.concat(positiveNumbers)
console.log(num2);
// const exchange1 = negativeNumbers 
// const exchange2 = positiveNumbers * -
// console.log(exchange1);
// console.log(exchange2);