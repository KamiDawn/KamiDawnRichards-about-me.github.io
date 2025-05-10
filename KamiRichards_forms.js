// Arithmetic Calculator
document.getElementById('arithmeticForm').onsubmit = function(e) {
  e.preventDefault();
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.querySelector('input[name="operator"]:checked').value;
  let result;
  if (operator === "/" && num2 === 0) {
    alert("Cannot divide by zero!");
    return;
  }
  result = eval(num1 + operator + num2);
  alert("Result: " + result);
};

// Factorial Calculator
document.getElementById('factorialForm').onsubmit = function(e) {
  e.preventDefault();
  let n = parseInt(document.getElementById("factorialInput").value);
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  alert("Factorial: " + result);
};

// Fibonacci Calculator
document.getElementById('fibonacciForm').onsubmit = function(e) {
  e.preventDefault();
  let n = parseInt(document.getElementById("fibonacciInput").value);
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  alert("Fibonacci(" + n + "): " + (n === 0 ? 0 : n === 1 ? 1 : b));
};

// Stats Analyzer
document.getElementById('statsForm').onsubmit = function(e) {
  e.preventDefault();
  let vals = [
    parseFloat(document.getElementById("stat1").value),
    parseFloat(document.getElementById("stat2").value),
    parseFloat(document.getElementById("stat3").value)
  ];
  let max = Math.max(...vals);
  let min = Math.min(...vals);
  let range = max - min;
  alert("Max: " + max + ", Min: " + min + ", Range: " + range);
};

// Mailing List Form
document.getElementById('mailForm').onsubmit = function(e) {
  e.preventDefault();
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let zip = document.getElementById("zip").value;
  let output = `<p>${first} ${last} (${email}) - ZIP: ${zip}</p>`;
  document.getElementById("mailingListOutput").innerHTML += output;
};