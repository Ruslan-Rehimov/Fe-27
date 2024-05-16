// 4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
//  Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda,
//  funksiya true qaytarır.

const telefon = prompt("nomrevizi daxil edin");
const isvalidnumber = (telefon) => {
    if(telefon.length === 11){
        console.log(true);
    }
     if(telefon.slice((0, 2) === "+7")){
       console.log(true);
    }else {
        console.log(false);
    }
}
console.log(isvalidnumber(telefon));

