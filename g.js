let expression = "";
function lue(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  let numbers = [];
  let operators = [];
  let Numb = "";
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (char === "+" || char === "-" || char === "*" || char === "/") {
      numbers.push(Number(Numb));
      operators.push(char);
      Numb = "";
    } else {
      Numb += char;
    }
  }
  numbers.push(Number(Numb));
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    let num = numbers[i + 1];

    if (operators[i] === "+") {
      result += num;
    } else if (operators[i] === "-") {
      result -= num;
    } else if (operators[i] === "*") {
      result *= num;
    } else if (operators[i] === "/") {
      if (num === 0) {
        alert("Делить на 0 нельзя");
        return;
      }
      result /= num;
    }
  }

  document.getElementById("display").value = result;
  expression = result.toString();
}