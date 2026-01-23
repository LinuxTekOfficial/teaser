document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("signupMessage");

  console.log("Collected email:", email);

  message.textContent = "Thanks! You'll receive updates soon.";
});
