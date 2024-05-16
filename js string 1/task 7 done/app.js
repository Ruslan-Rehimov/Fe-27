// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın.

function boyukHerif(word) {
    return word.substring(0, 1).toUpperCase() + word.slice(1);
}
console.log(boyukHerif("salam"));



