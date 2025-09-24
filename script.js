const display = document.getElementById("display");

function append(value) {
  if (value === "π") value = Math.PI;
  if (value === "e") value = Math.E;
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expr = display.value;

  try {
    // Replace math functions with JavaScript equivalents
    expr = expr
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/√\(/g, 'Math.sqrt(')
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/\^/g, '**');

    const result = eval(expr);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
