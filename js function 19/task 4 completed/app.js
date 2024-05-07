// Task-04
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
let a = +prompt("1ci reqemi daxil edin")
let b = +prompt("2ci reqemi daxil edin")
showNumber = (a,b) => {

    if(a > b){
        return b
    
    }else if(b > a){
        return a
    }else return (a=b)
}
document.write(showNumber(a,b))
