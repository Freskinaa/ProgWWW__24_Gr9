document.addEventListener("DOMContentLoaded", () => {
    try {
      
      
      const numberToString = largeNumber.toString();
      console.log(`Number as string: ${numberToString}`); 
  
      const offerDateElement = document.querySelector(".offer-text .date");
      if (!offerDateElement) {
        throw new Error("Offer date element not found.");
      }
  
      const offerEndDate = new Date(2025, 0, 24, 23, 59); // 24.01.2025, 23:59
  
      function updateOfferDate() {
        const currentDate = new Date();
        if (currentDate > offerEndDate) {
          offerDateElement.innerHTML = "Offer has expired";
        } else {
          const day = offerEndDate.getDate();
          const month = offerEndDate.getMonth() + 1;
          const year = offerEndDate.getFullYear();
          const hours = offerEndDate.getHours();
          const minutes = offerEndDate.getMinutes();
          offerDateElement.innerHTML = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        }
      }
  
      updateOfferDate();
    } catch (error) {
      console.error("Error in updating offer date:", error.message);
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const expirationDate = new Date("2025-01-22T23:59:00");
      const offerExpirationElement = document.getElementById("offerExpiration");
  
      if (!offerExpirationElement) {
        throw new Error("Offer expiration element not found.");
      }
  
      const currentDate = new Date();
      if (currentDate < expirationDate) {
        offerExpirationElement.innerText = `The offer is valid until: ${expirationDate.toLocaleDateString()} at ${expirationDate.toLocaleTimeString()}`;
      } else {
        offerExpirationElement.innerText = "The offer has expired.";
      }
    } catch (error) {
      console.error("Error in displaying offer expiration:", error.message);
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    try {
      function getCurrentTimeInKosovo() {
        const options = { timeZone: 'Europe/Belgrade', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const currentTime = new Date().toLocaleTimeString('en-US', options);
        return currentTime;
      }
  
      const currentTimeElement = document.getElementById("currentTimeKosovo");
      if (!currentTimeElement) {
        throw new Error("Current time element not found.");
      }
  
      currentTimeElement.innerText = `Current time : ${getCurrentTimeInKosovo()}`;
    } catch (error) {
      console.error("Error in displaying current time:", error.message);
    }
  });
  