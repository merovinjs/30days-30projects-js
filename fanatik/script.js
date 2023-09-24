const button = document.querySelector(".button");
const inputs = document.querySelectorAll(".input");
const result = document.querySelector(".result");

function nameChange() {
  return inputs[0].value;
}
function ageChange() {
  return inputs[1].value;
}
button.addEventListener("click", () => {
  debugger;
  const name = nameChange();
  const age = ageChange();

  result.textContent = `Hi ${name}! You are ${age} years old.`;
  console.log(name, age);
});
