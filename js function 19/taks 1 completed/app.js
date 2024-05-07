// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.
let ad1 = prompt("Adivizi daxil edin")
let ad2 = prompt("Adivizi daxil edin")
let ad3 = prompt("Adivizi daxil edin")
showName = (ad1,ad2,ad3) => {

return `${ad1} is active now , ${ad2} is active now , ${ad3} is active now `
}
document.write(showName(ad1,ad2,ad3))
alert(showName(ad1,ad2,ad3))
console.log(showName(ad1,ad2,ad3));
