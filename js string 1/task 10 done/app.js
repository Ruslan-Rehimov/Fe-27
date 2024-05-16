// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara

const ilkHerfiDeyis = (soz,ilkHerif) => {
    let yeniSoz = ilkHerif + soz.slice(1);
    return yeniSoz;
}
console.log(ilkHerfiDeyis('Mahir',"T"));
console.log(ilkHerfiDeyis('Tahir',"M"));