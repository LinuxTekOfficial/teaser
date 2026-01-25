document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;
  const hiddenFieldValue = document.getElementById('botEmail').value;
  const message = document.getElementById("signupMessage");

  if (hiddenFieldValue) {
    e.preventDefault();
    alert("Spam detected!");
  } else {
    console.log("Collected email:", email);
    message.textContent = "Thanks! You'll receive a confirmation mail.";
  }
});
