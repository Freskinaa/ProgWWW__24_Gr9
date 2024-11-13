document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const accountLink = document.getElementById("accountLink");
  if (!user && accountLink) {
    accountLink.style.display = "none";
  }

  if (user) {
    const userNameElement = document.getElementById("userName");
    const userEmailDisplay = document.getElementById("userEmailDisplay");
    const userPasswordDisplay = document.getElementById("userPasswordDisplay");
    const editEmailBtn = document.getElementById("editEmailBtn");
    const editPasswordBtn = document.getElementById("editPasswordBtn");
    const passwordIcon = document.getElementById("passwordIcon");

    userNameElement.textContent = user.name;
    userEmailDisplay.textContent = user.email;
    userPasswordDisplay.textContent = "••••••••";
    userNameDisplay.textContent = user.name;

    editEmailBtn.addEventListener("click", function () {
      const isEditing = userEmailDisplay.isContentEditable;
      if (isEditing) {
        user.email = userEmailDisplay.textContent;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
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
        localStorage.setItem("loggedInUser", JSON.stringify(user));
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

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    });

    const saveChangesBtn = document.getElementById("saveChangesBtn");
    saveChangesBtn.addEventListener("click", function () {
      const updatedEmail = userEmailDisplay.textContent;
      const updatedPassword = userPasswordDisplay.textContent;
      user.name = updatedName;
      user.email = updatedEmail;
      user.password = updatedPassword;

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      alert("Your changes have been saved!");
    });
  }
});
