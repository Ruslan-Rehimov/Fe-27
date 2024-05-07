// Task-12
// İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün
//  çəkdiyini göstərən bir proqram yazın. (switch-case ilə)
 
const getMonthOfDay = (ay,gun) => {
    let ay = +prompt("ilin aylarini  daxil edin")
    switch(ay){
        case 1 :
            alert("Bu ay yanvardi")
            break;
        case 2 :
            alert("Bu ay fevraldi")
            break;
        case 3 :
            alert("Bu ay martdi")
            break;
        case 4 :
            alert("Bu ay apreldi")
            break;
        case 5 :
            alert("Bu ay maydi")
            break;
        case 6 :
            alert("Bu ay iyundi")
            break;
        case 7 :
            alert("Bu ay iyuldi")
            break;
        case 8 :
            alert("Bu ay avqustdi")
            break;
        case 9 :
            alert("Bu ay sentyabrdi")
            break;
        case 10 :
            alert("Bu ay oktyabrdi")
            break;
        case 11 :
            alert("Bu ay noyabrdi")
            break;
        case 12 :
            alert("Bu ay dekabrdi")
            break;
            default: alert("ilde yalniz 12 ay var");
    };
}

getMonthOfDay = (ay,day) => {

     () => alert("daha cox calis")

    if(day === 1){
        return "31 gun"
    }else if(day === 2){
        return "29 gun"
    }else if(day === 3){
        return "31 gun"
    }else if(day === 4){
        return "30 gun"
    }else if(day === 5){
        return "31 gun"
    }else if(day === 6){
        return "30 gun"
    }else if(day === 7){
        return "31 gun"
    }else if(day === 8){
        return "31 gun"
    }else if(day === 9){
        return "30 gun"
    }else if(day === 10){
        return "31 gun"
    }else if(day === 11){
        return "30 gun"
    }else if(day === 12){
        return "31 gun"
}
}