// 13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true 
// deyilsə false qaytarsın

const hamsiBoyuk = (str) => {
    let boyukStr = str.toUpperCase();

    if (str === boyukStr) {
        return true
    } else {
        return false
    }
}
console.log(hamsiBoyuk("SALAM"));

