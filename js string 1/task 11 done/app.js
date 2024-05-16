// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin
let ad = prompt("adivizi daxil edin")
let soyad = prompt("soyadivizi daxil edin")
const min  = (ad,soyad) => {
    console.log(`${soyad[0]}. ${ad}`);
}
console.log(min(ad,soyad));
