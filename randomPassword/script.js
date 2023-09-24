const button = document.getElementById("button");
const passwordBox = document.getElementById("password");
const copyPassword = document.getElementById("copy");
const number = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPRSUVYZXWQ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+=-";
const length = 12;
const allcharts = number + upperCase + lowerCase + symbol;
function createPassword() {
  let password = "";

  password += number[Math.floor(Math.random() * number.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allcharts[Math.floor(Math.random() * allcharts.length)];
  }
  passwordBox.value = password;
}
button.addEventListener("click", () => {
  console.log("created");
  createPassword();
});
function copyPasswordFunc() {
  passwordBox.select();
  document.execCommand("copy");
}
copyPassword.addEventListener("click", copyPasswordFunc);
