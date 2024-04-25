let ad = prompt("adivizi daxil edin")
let gender = prompt("genderivizi daxil edin")

switch(gender){
    case "K" :
        document.write(` Xos gelmisiniz ${ad} bey `)
        break;
        case "k" :
            document.write(` Xos gelmisiniz ${ad} bey `)
            break;
            case "Q" :
                document.write(` Xos gelmisiniz ${ad} xanim `)
                break;
                case "q" :
                    document.write(` Xos gelmisiniz ${ad} xanim `)
                    break;
            default: document.write(`Gender duzgun daxil edilmeyib `)
};

