document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
        // If no user is logged in, redirect to login page
        window.location.href = "login.html";
    } else {
        // Display the user's account information
        const userNameElement = document.getElementById("userName");
        const userEmailElement = document.getElementById("userEmail");

        if (userNameElement && userEmailElement) {
            userNameElement.textContent = user.name;
            userEmailElement.textContent = user.email;
        } else {
            console.log("User name or email element not found.");
        }
    }
});
