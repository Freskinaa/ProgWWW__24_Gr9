document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const accountLink = document.getElementById("accountLink");
  if (!user && accountLink) {
    accountLink.style.display = "none";
  }

  if (user) {
    const userNameElement = document.getElementById("userName");
    const userEmailElement = document.getElementById("userEmail");

    if (userNameElement && userEmailElement) {
      userNameElement.textContent = user.name;
      userEmailElement.textContent = user.email;
    } else {
      console.log("User name or email element not found.");
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
      });
    }
  }
});
