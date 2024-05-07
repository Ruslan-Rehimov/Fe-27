let str1 = prompt("deyeri daxil edin")
let str2 = prompt("deyeri daxil edin")
let str3 = prompt("deyeri daxil edin")

 isPalindrome = (str) => {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

 
document.write(isPalindrome(str1));
document.write(isPalindrome(str2));
document.write(isPalindrome(str3));