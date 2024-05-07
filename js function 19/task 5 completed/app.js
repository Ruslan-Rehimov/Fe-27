let n1 = +prompt("birinci reqemi daxil edin")
let o = prompt("operatoru daxil edin")
let n2 = +prompt("ikinci reqemi daxil edin")

function calc(n1,o,n2){
    switch(o) {
        case "+":
            document.write(`${n1} + ${n2} = ${n1 + n2}`)
            break;
            case "-":
                document.write(`${n1} - ${n2} = ${n1 - n2}`)
                break;
                case "/":
                    document.write(`${n1} / ${n2} = ${n1 / n2}`)
                    break;
                    case "*":
                        document.write(`${n1} * ${n2} = ${n1 * n2}`)
                        break;
                        default : document.write("bele operator yoxdu")
                }
            }
            calc(n1,o,n2)