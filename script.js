// Show the main app after the splash screen is hidden
window.onload = function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainApp = document.getElementById("main-app");

  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide splash screen
    mainApp.style.display = "block";    // Show main app
  }, 2500);
};

// Calculator functions
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
    result.value = eval(result.value.replace(/x/g, "*").replace(/÷/g, "/"));
  } catch {
    result.value = "Error";
  }
}
