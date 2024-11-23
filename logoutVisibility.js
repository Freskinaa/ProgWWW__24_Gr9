document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const loginButton = document.getElementById("loginButton");
  const signUpButton = document.getElementById("signUpButton");
  const accountLink = document.getElementById("accountLink");

  if (loggedInUser) {
    loginButton.style.display = "none";
    signUpButton.style.display = "none";
    accountLink.style.display = "block";
  } else {
    loginButton.style.display = "block";
    signUpButton.style.display = "block";
    accountLink.style.display = "none";
  }
});
