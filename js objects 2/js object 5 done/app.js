// 5. propertyTaker() adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin.
//  Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:




function propertyTaker(obj,propertyName){
console.log(obj[propertyName]);
}
console.log(propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent'));
console.log(propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country'));
console.log(propertyTaker({name:'roma', age:12}, 'name'));