// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
let result ="";
function checkPasswordStrengh (userPassword) {
    for (let i=0; i<userPassword.length; i++)
    if (userPassword.length < 6){
        return result = "Weak";
    } else if (userPassword.length >= 6 && userPassword.length<=10) {
        return result = "Medium";
    } else {
        return result = "Strong";
    }
}
userPassword = checkPasswordStrengh("jtgtfnglkfm");
console.log(result)
