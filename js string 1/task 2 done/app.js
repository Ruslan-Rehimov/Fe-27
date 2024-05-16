// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.
let a = "I know how to use cycles\r"
let b = prompt("daxil edin")
if(b == a){
    a++
    b += a
}
document.write(a);
