// Task-19
// 3 rəqəmli ədəd qəbul edən və onun rəqəmlərinin cəmini qaytaran funksiya yazın.
// Məsələn daxil edilib 547,cavab olmalıdı 5+4+7 yəqni 16.
let a = +prompt("1ci reqemi daxil edin")
let b = +prompt("2ci reqemi daxil edin")
let c = +prompt("3cu reqemi daxil edin")
plassNumber = (a,b,c) => {
    return `${a} + ${b} + ${c} = ${a + b + c}`
}
document.write(plassNumber(a,b,c))