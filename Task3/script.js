const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expr = display.value;

  try {
    // Custom handling for %, like 100 - 10%
    if (expr.includes('%')) {
      const match = expr.match(/(\d+)([+\-*/])(\d+)%/);

      if (match) {
        let num1 = parseFloat(match[1]);
        let operator = match[2];
        let percent = parseFloat(match[3]);

        let result;

        switch (operator) {
          case '+':
            result = num1 + (num1 * percent / 100);
            break;
          case '-':
            result = num1 - (num1 * percent / 100);
            break;
          case '*':
            result = num1 * (percent / 100);
            break;
          case '/':
            result = num1 / (percent / 100);
            break;
          default:
            result = "Error";
        }

        display.value = result;
        return;
      }
    }

    // Normal evaluation for expressions without %
    display.value = eval(expr);
  } catch {
    display.value = "Error";
  }
}


// Enable keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
