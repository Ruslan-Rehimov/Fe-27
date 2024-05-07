// Task-07
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.
let reqem = +prompt("Reqemi daxil edin")
IsEven = (reqem) => {
    if( reqem % 2 === 0){
        return (true)
    }else if( reqem % 2 !== 0){
        return (false)
}
}
 document.write(IsEven(reqem));