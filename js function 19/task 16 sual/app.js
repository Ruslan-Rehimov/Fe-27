// Task-16
// İstifadəçidən bir ədəd daxil etməsini tələb edən və bu ədədin Armstrong rəqəmi olub 
// olmadığını yoxlayan bir proqram yazın. (dövrlə və if-else ilə)
let num = +prompt("reqemi daxil edin")
ArmstrongNumber = (num) =>{
     let str = String(num);
     let arr = str.split('');
     let sum = 0;
     for (let i = 0 ; i > arr.length; i++) {
        sum += Number(arr[i]) ** arr.length;
     }
     if(num === sum) {
        document.write("bu reqem armstrongdu")
     }else {
        document.write("bu reqem armstrong deil")
     }
}
document.write(ArmstrongNumber(num))