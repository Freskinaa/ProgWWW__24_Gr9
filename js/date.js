function updateClock() {
  const timeElement = document.getElementById("currentTimeKosovo");
  const offerExpirationElement = document.getElementById("offerExpiration");
  const validityUntilElement = document.getElementById("validUntil");

  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  timeElement.innerHTML = `<strong>Current Time:</strong> ${hours}:${minutes}:${seconds}`;

  const targetDate = new Date("2025-01-25T00:00:00");
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    offerExpirationElement.innerHTML = `<strong>Time Left:</strong> ${days} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds`;

    const targetDateString = targetDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    validityUntilElement.innerHTML = `This offer is valid until <strong>${targetDateString}</strong>.`;
  } else {
    offerExpirationElement.textContent = "The offer has expired!";
    offerExpirationElement.style.color = "#c79a63";
    offerExpirationElement.style.fontWeight = "bold";
    validityUntilElement.textContent = "";
  }
}

setInterval(updateClock, 1000);

updateClock();
