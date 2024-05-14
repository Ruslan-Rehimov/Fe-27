// 3. Object.assign() metodunu istifadə edin
//  və nə işə yaradığı barədə məlumat yazın.

const user = {
    name : "Ruslan",
    surname : "Rehimov",
    age : 22,
}

const user2 = Object.assign({},user);

// user.name = "Kamal"
console.log("user",user);
console.log("user2",user2);
console.log(user === user2);

// yeni  referans yaradb necedene object birlesdirmek istesen birlesdirirsen,
// valuelar eyni olur referanslari ferqli .
