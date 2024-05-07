// Task-18
// isİnteger adında funksiya yazın.Bu funksiya 1 parametr alacaq  və parametr olaraq hər
// şey daxil edə bilərəm.Funksiya, əgər daxil edilən parametr integerdirsə true deyilsə false qaytarsın.

let n = +prompt("REQEMI DAXIL EDIN")

Number.isInteger(n);

Number.isInteger = Number.isInteger || function(n){
    return typeof n === number
    && isFinite(n)
    && Math.floor(n) === n
    && isInteger(n) !== -n;
}
document.write(Number.isInteger(n))