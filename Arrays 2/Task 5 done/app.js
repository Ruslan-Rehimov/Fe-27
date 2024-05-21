// 5. Kebab-case formatında mətni parametr kimi qəbul edən 
// və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.
const kebabText = prompt("...");
const  kebabToUpper = (kebabCaseText) => {
    return kebabCaseText.toUpperCase().replaceAll('-', '_');
}
console.log(kebabToUpper(kebabText)); 