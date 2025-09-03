function insert(value) {
  const result = document.getElementById("result");
  const start = result.selectionStart;
  const end = result.selectionEnd;
  const text = result.value;
  
  result.value = text.slice(0, start) + value + text.slice(end);
  
  if (value.endsWith("()")) {
    result.selectionStart = result.selectionEnd = start + value.length - 1;
  } else {
    result.selectionStart = result.selectionEnd = start + value.length;
  }

  result.focus();
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteChar() {
  const result = document.getElementById("result");
  const start = result.selectionStart;
  const end = result.selectionEnd;

  if (start === end && start > 0) {
    
    result.value = result.value.slice(0, start - 1) + result.value.slice(end);
    result.selectionStart = result.selectionEnd = start - 1;
  } else {
    
    result.value = result.value.slice(0, start) + result.value.slice(end);
    result.selectionStart = result.selectionEnd = start;
  }

  result.focus();
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    // #main-app is already flex + fade-in
  }, 2500);
});

function calculate() {
  const result = document.getElementById("result");
  try {
    let expression = result.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "/100")
      .replace(/√/g, "Math.sqrt");
    
    expression = expression
      .replace(/sin\(/g, "Math.sin(Math.PI/180*")
      .replace(/cos\(/g, "Math.cos(Math.PI/180*")
      .replace(/tan\(/g, "Math.tan(Math.PI/180*")
    
    expression = expression.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}
