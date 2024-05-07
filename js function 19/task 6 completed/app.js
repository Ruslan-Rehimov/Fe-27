const isLucky = (bilet) => {
    let b=String(bilet)
    let ilk =+b[0]+ +b[1]+ +b[2]
    let ikinci =+b[3]+ +b[4]+ +b[5]
    if (ilk === ikinci){
        return "bilet sansli biletdir"

    }
    return "biler sansli deyil"

}
document.write(isLucky(123321));