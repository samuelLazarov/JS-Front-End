function solve() {
  const validNamingConventions = ["Camel Case", "Pascal Case"];

  const textInputEl = document.querySelector("#text");
  const namingConventionsEl = document.querySelector("#naming-convention");
  
  const resultEl = document.querySelector(".result-container #result");

  if (!validNamingConventions.includes(namingConventionsEl.value)) {
    resultEl.textContent = "Error!";
    return;
  }

  const pascalCaseText = textInputEl.value
    .toLowerCase()
    .split(" ")
    .map((x) => x[0].toUpperCase().concat(x.slice(1)))
    .join("");

  resultEl.textContent =
    namingConventionsEl.value === validNamingConventions[0]
    ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1)) 
    : pascalCaseText;
}