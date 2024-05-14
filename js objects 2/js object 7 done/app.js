// 7. existsAndTruthy() adinda funksiya yaradin.
//  2 ədəd argument alır: obyekt(obj) ve string (propertyName).
//   Eger hemin obyektden o adda property varsa ve truthy-dirse,
//    true qaytarsin eks halda false qaytarsin. Mes:


function existsAndTruthy(obj,propertyName){
    if(obj[propertyName]){
        console.log(true)
    }
    else{
        console.log(false)
    }
}


console.log(existsAndTruthy({a:1,b:2,c:3},'b')); 
console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y')); 
console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')); 

