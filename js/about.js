const reserveBtn = document.getElementById("reserveBtn");
const popupModal = document.getElementById("popupModal");
const closePopupBtn = document.getElementById("closePopup");

reserveBtn.addEventListener("click", () => {
  popupModal.style.display = "flex";

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const currentDate = new Date();

  const formattedDate = currentDate.toISOString().split("T")[0];

  document.getElementById("date").setAttribute("min", formattedDate);
  document.getElementById("date").value = formattedDate;

  if (loggedInUser) {
    const userName = loggedInUser.name;
    const userEmail = loggedInUser.email;

    document.getElementById("name").value = userName;
    document.getElementById("email").value = userEmail;

    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
  }
});

closePopupBtn.addEventListener("click", () => {
  popupModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = "none";
  }
});

const reserveForm = document.getElementById("reserveForm");

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  const currentDateTime = new Date();
  currentDateTime.setMinutes(currentDateTime.getMinutes());

  const selectedDateTime = new Date(date + "T" + time);

  if (selectedDateTime < currentDateTime) {
    alert("The selected time has already passed. Please choose a future time.");
    return;
  }

  const minTime = new Date(currentDateTime);
  minTime.setMinutes(minTime.getMinutes() + 60);

  console.log("Minimum Allowed Time: ", minTime);

  if (selectedDateTime < minTime) {
    alert("You cannot make a reservation less than 1 hour from now.");
    return;
  }

  const alertMessage = `
    Reservation Details:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Time: ${time}
    Number of Guests: ${guests}
  `;

  alert(alertMessage);

  popupModal.style.display = "none";
  reserveForm.reset();
});
