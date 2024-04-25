let ad = prompt("adivizi daxil edin")
let yas = +prompt("yasivizi qeyd edin")
let gender = prompt("genderivizi daxil edin")
if(gender === "k" || gender === "K"){
    document.write(` Salam ${ad} bey `)
}else if(gender === "q" || gender === "Q"){
    document.write(` Salam ${ad} xanim `)
}else {
    document.write ("Cinsiyetinizi düzgün daxil edin.")
} yas > 18 ? document.write("Xos gelmisiniz") : document.write("Yasiniz yeterli deil")