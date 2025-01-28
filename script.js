function insert(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteChar() {
  const result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculate() {
  const result = document.getElementById("result");
  try {
    // Replace '×' with '*' before evaluating
    result.value = eval(result.value.replace(/×/g, '*'));
  } catch (error) {
    result.value = "Error";
  }
}