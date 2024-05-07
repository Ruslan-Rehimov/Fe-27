// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın => (  else return (a=b)   )

let a = +prompt("1ci reqemi daxil edin")
let b = +prompt("2ci reqemi daxil edin")
let c = +prompt("3ci reqemi daxil edin")
showNumber = (a,b,c) => {


    if(a > b, a > c ,b > c){
        return a
    
    }else if(b > a, b > c, a > c){
        return b
    }else if(c > a, c > b, a > b){
        return c
    }else(a=b=c)
return a=b=c
}
document.write(showNumber(a,b,c))
