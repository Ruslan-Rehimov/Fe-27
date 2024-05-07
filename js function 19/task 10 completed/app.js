// Task-10
// İstifadəçidən rəqəm qəbul edən və onun müsbət,
//  mənfi və ya sıfır olduğunu yoxlayan bir funksiya yazın. (if-else ilə)
let reqem = +prompt("reqemi daxil edin")
checkNumber = (reqem) => {
      if(reqem < 0 ){
          return "menfi"
      }else if(reqem === 0){
        return "sifir"
      }else (reqem > 0)
        return "musbet"
      
    
}
document.write(checkNumber(reqem))