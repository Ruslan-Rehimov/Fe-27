// Task-12
// İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün
//  çəkdiyini göstərən bir proqram yazın. (switch-case ilə)
 
const getMonthOfDay = (ay) => {
    let ay = +prompt("ilin aylarini  daxil edin")
    switch(ay){
        case "yanvar" :
            alert("Bu ay 31 gundur")
            break;
        case "fevral" :
            alert("Bu 29 gundu")
            break;
        case "mart" :
            alert("Bu ay 31 gundu")
            break;
        case "aprel" :
            alert("Bu ay 30 gundu")
            break;
        case "may" :
            alert("Bu ay 31 gundu")
            break;
        case "iyun":
            alert("Bu ay 30 gundu")
            break;
        case "iyul" :
            alert("Bu ay 31 gundu")
            break;
        case "avqust" :
            alert("Bu ay 31 gundu")
            break;
        case "sentyabr" :
            alert("Bu ay 30 gundu")
            break;
        case "oktyabr" :
            alert("Bu ay 31 gundu")
            break;
        case "noyabr" :
            alert("Bu ay 30 gundu")
            break;
        case "dekabr" :
            alert("Bu ay 31 gundu")
            break;
            default: alert("ilde yalniz 12 ay var");
    };
}

