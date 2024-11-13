document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const source = document.querySelector('input[name="source"]:checked');
    const comments = document.querySelector('textarea[name="comments"]').value;

    if (source) {
      const feedbackData = {
        source: source.value,
        comments: comments,
      };

      console.log("Feedback Submitted:", feedbackData);

      const confirmationMessage = document.getElementById(
        "confirmationMessage"
      );
      confirmationMessage.innerText = "Thank you for your feedback!";
      confirmationMessage.style.display = "block";

      setTimeout(() => {
        confirmationMessage.style.display = "none";
      }, 3000);

      this.reset();
    }
  });
