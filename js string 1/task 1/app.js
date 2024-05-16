// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.
let user = prompt("Bir ikirəqəmli ədəd daxil edin:");
let num = parseInt(user);


if (isNaN(num) || num < 10 || num > 99) {
    console.log("Xahiş olunur ikirəqəmli bir ədəd daxil edin.");
} else {

    let result = num + 7;

    console.log("7 artırılmış ədəd:", result);
}