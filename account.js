document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const accountLink = document.getElementById("accountLink");
  if (!user && accountLink) {
    accountLink.style.display = "none";
  }

  if (user) {
    const userNameElement = document.getElementById("userName");
    const userEmailElement = document.getElementById("userEmail");
    const userPasswordElement = document.getElementById("userPassword");

    if (userNameElement && userEmailElement && userPasswordElement) {
      userNameElement.textContent = user.name;
      userEmailElement.textContent = user.email;
      userPasswordElement.textContent = user.password;
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        if (profilePic.src) {
          user.profilePic = profilePic.src;
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        }

        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
      });
    }

    const togglePasswordBtn = document.getElementById("togglePassword");
    if (togglePasswordBtn) {
      togglePasswordBtn.addEventListener("click", function () {
        const passwordElement = document.getElementById("userPassword");
        if (passwordElement.style.display === "none") {
          passwordElement.style.display = "inline";
          togglePasswordBtn.textContent = "Hide";
        } else {
          passwordElement.style.display = "none";
          togglePasswordBtn.textContent = "Show";
        }
      });
    }

    const profilePicContainer = document.getElementById("profilePicContainer");
    const profilePicInput = document.getElementById("profilePicInput");
    const profilePic = document.getElementById("profilePic");

    if (user.profilePic) {
      profilePic.src = user.profilePic;
    }

    if (profilePicContainer && profilePicInput) {
      profilePicContainer.addEventListener("click", function () {
        profilePicInput.click();
      });

      profilePicInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (event) {
            const imgSrc = event.target.result;
            profilePic.src = imgSrc;

            user.profilePic = imgSrc;
            localStorage.setItem("loggedInUser", JSON.stringify(user));
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
});
