// 12. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir,
//      abcdf@gmail.com meselen) //true
const gmailAdres = (email) => {
   
    let son = email.slice(-10);
    return son === "@gmail.com";
}

console.log(gmailAdres("salam"));
console.log(gmailAdres("salam@gmail.com"));
