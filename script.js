window.onload = function () {
  console.log("مرحبًا بك في موقع حمزة!");
  alert("أهلاً بك في موقعي الشخصي 👋");
};

function changeBackground() {
  document.body.style.backgroundColor = "#e0f7fa";
}

// عداد زيارات بسيط (محلي)
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
console.log("عدد زياراتك للموقع: " + visits);
