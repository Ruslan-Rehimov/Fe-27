// 14. Funksiya yazın.Cümlə alacaq parametr olaraq.
// Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq.
const ilkBesSimvol = (cumle) => {
    
    let ilkBes = cumle.substring(0, 5);
    return ilkBes;
} 
console.log(ilkBesSimvol("Salam brat "));

