document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const accountLink = document.getElementById("accountLink");
  if (!user && accountLink) {
    accountLink.style.display = "none";
  }

  if (user) {
    const userNameElement = document.getElementById("userName");
    const userNameDisplay = document.getElementById("userNameDisplay");
    const userEmailDisplay = document.getElementById("userEmailDisplay");
    const userPasswordDisplay = document.getElementById("userPasswordDisplay");
    const editNameBtn = document.getElementById("editNameBtn");
    const editEmailBtn = document.getElementById("editEmailBtn");
    const editPasswordBtn = document.getElementById("editPasswordBtn");
    const profilePic = document.getElementById("profilePic");
    const saveChangesBtn = document.getElementById("saveChangesBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const profilePicContainer = document.getElementById("profilePicContainer");
    const profilePicInput = document.getElementById("profilePicInput");
    const changeProfilePicBtn = document.getElementById("changeProfilePicBtn");

    userNameElement.textContent = user.name;
    userNameDisplay.textContent = user.name;
    userEmailDisplay.textContent = user.email;
    userPasswordDisplay.textContent = "••••••••";
    profilePic.src = user.profilePic || "./assets/images/profileicon.webp";

    profilePic.addEventListener("mouseenter", function () {
      if (!profilePicContainer.classList.contains("active")) {
        changeProfilePicBtn.style.display = "block";
      }
    });

    profilePic.addEventListener("mouseleave", function () {
      if (!profilePicContainer.classList.contains("active")) {
        changeProfilePicBtn.style.display = "none";
      }
    });

    profilePic.addEventListener("click", function () {
      profilePicContainer.classList.toggle("active");
      changeProfilePicBtn.style.display =
        profilePicContainer.classList.contains("active") ? "block" : "none";
    });

    profilePicInput.addEventListener("change", function () {
      if (profilePicInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
          user.profilePic = e.target.result;
          profilePic.src = user.profilePic;
          saveUserData(user);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
      }
    });
    editNameBtn.addEventListener("click", function () {
      const isEditing = userNameDisplay.isContentEditable;
      if (isEditing) {
        user.name = userNameDisplay.textContent;
        editNameBtn.textContent = "Edit";
        userNameDisplay.contentEditable = "false";
      } else {
        userNameDisplay.contentEditable = "true";
        userNameDisplay.focus();
        editNameBtn.textContent = "Save";
      }
    });

    editEmailBtn.addEventListener("click", function () {
      const isEditing = userEmailDisplay.isContentEditable;
      if (isEditing) {
        user.email = userEmailDisplay.textContent;
        editEmailBtn.textContent = "Edit";
        userEmailDisplay.contentEditable = "false";
      } else {
        userEmailDisplay.contentEditable = "true";
        userEmailDisplay.focus();
        editEmailBtn.textContent = "Save";
      }
    });

    editPasswordBtn.addEventListener("click", function () {
      const isEditing = userPasswordDisplay.isContentEditable;
      if (isEditing) {
        user.password = userPasswordDisplay.textContent;
        editPasswordBtn.textContent = "Edit";
        userPasswordDisplay.contentEditable = "false";
        userPasswordDisplay.textContent = "••••••••";
      } else {
        userPasswordDisplay.contentEditable = "true";
        userPasswordDisplay.focus();
        editPasswordBtn.textContent = "Save";
        userPasswordDisplay.textContent = "";
      }
    });

    saveChangesBtn.addEventListener("click", function () {
      const updatedName = userNameDisplay.textContent;
      const updatedEmail = userEmailDisplay.textContent;
      const updatedPassword =
        userPasswordDisplay.textContent !== "••••••••"
          ? userPasswordDisplay.textContent
          : user.password;

      user.name = updatedName;
      user.email = updatedEmail;
      user.password = updatedPassword;

      saveUserData(user);
    });

    function saveUserData(updatedUser) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userIndex = users.findIndex((u) => u.email === user.email);

      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
      } else {
        users.push(updatedUser);
      }

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      alert("Your changes have been saved!");
    }

    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    });
  }
});
