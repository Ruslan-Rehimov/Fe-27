let gun = +prompt("heftenin gununu daxil edin")
switch(gun){
    case 1 :
        alert("Bu gun bazar ertesidir")
        break;
    case 2 :
        alert("Bu gun cersenbe axsamidir")
        break;
    case 3 :
        alert("Bu gun cersenbedir")
        break;
    case 4 :
        alert("Bu gun cume axsamidir")
        break;
    case 5 :
        alert("Bu gun cumedir")
        break;
    case 6 :
        alert("Bu gun senbedir")
        break;
    case 7 :
        alert("Bu gun bazardir")
        break;
        default: alert("heftede yalniz 7 gun var");
};
     if(gun === 1){
        document.write("Bu gun bazar ertesidir")
     }else if(gun === 2){
        document.write("Bu gun cersenbe axsamidir")
     }else if(gun === 3){
        document.write("Bu gun cersenbedir")
     }else if(gun === 4){
        document.write("Bu gun cume axsamidir")
     }else if(gun === 5){
        document.write("Bu gun cumedir")
     }else if(gun === 6){
        document.write("Bu gun senbedir")
     }else if(gun === 7){
        document.write("Bu gun bazardir")
     }else{
        document.write("heftede yalniz 7 gun var")
     }

     