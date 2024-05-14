// 4. Spread və rest operatorları arasındakı fərqi izah edin.
// Hər ikisinin istifadəsinə aid nümunələr yaın.

// Spread operatoru reste sintaksis olaraq oxsaya biler hemde neceki arreylerde elede 
// objectlerde de istifade oluna biler ancaq spread esasda arraylarda istifade olunur,
// rest ise functionlarda arqument kimi.


// Arreylerde spread operatoru bele istifade olur
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const Array3 = [
//     ...array1,
//     ...array2
// ];
// console.log(Array3);
//////////////////////////////////
 
// Objectlerde spread operatoru bele istifade olur
// const obj1 = {ad: "Ruslan"};
// const obj2 = {age: 29};
// const Obj3 = {
//     ...obj1,
//     ...obj2
// };
// console.log(Obj3);
//////////////////////////////////////////////////

// Rest operatoru ///////////////////
// const person = {
//     ad: "Ruslan",
//     age: 22,
//     city: 'Baki',
// };

// const {
//     name,
//     ...otherValues
// } = person;

// console.log(otherValues);

///////////////////////////////////////////