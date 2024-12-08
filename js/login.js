const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpForm = document.querySelector(".sign-up-container form");
const signInForm = document.querySelector(".sign-in-container form");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signUpForm
    .querySelector('input[placeholder="Name"]')
    .value.trim();
  const email = signUpForm
    .querySelector('input[placeholder="Email"]')
    .value.trim();
  const password = signUpForm.querySelector(
    'input[placeholder="Password"]'
  ).value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and include at least one letter and one number."
    );
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    alert("This email is already registered!");
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("You have successfully registered!");
  container.classList.remove("right-panel-active");
});

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm
    .querySelector('input[placeholder="Email"]')
    .value.trim();
  const password = signInForm.querySelector(
    'input[placeholder="Password"]'
  ).value;

  if (!email || !password) {
    alert("Please fill in both fields!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (user) {
    if (user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
