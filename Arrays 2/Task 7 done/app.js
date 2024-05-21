// 7. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir.
// Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb,
// elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
let namesArray = [
  "Alice",
  "Bob",
  "Catherine",
  "David",
  "Eva",
  "Andrew",
  "Frank",
  "Anna",
  "George",
  "Alex",
];




  let namesStartingWithA = [];
  for (let i = 0; i < namesArray.length; i++) {
    let name = namesArray[i];
  
    if (name.startsWith("A")) {
      namesStartingWithA.push(name);
    }
  }


console.log(namesArray);
console.log(namesStartingWithA);