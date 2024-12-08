$(document).ready(function () {
  const feedbackWorker = new Worker("feedbackWorker.js");

  feedbackWorker.onmessage = function (event) {
    const response = event.data;
    console.log(response.message); // Feedback from the worker

    // Display confirmation message
    $("#confirmationMessage").text(response.message).show();
    setTimeout(function () {
      $("#confirmationMessage").fadeOut();
    }, 3000);
  };

  $("#feedbackForm").on("submit", function (event) {
    event.preventDefault();
    var source = $("input[name='source']:checked").val();
    var subscribe = $("input[name='subscribe']:checked").val();
    var comments = $("textarea[name='comments']").val();

    // Send data to the worker
    feedbackWorker.postMessage({
      source: source,
      subscribe: subscribe,
      comments: comments,
    });
  });

  $(".contact-form").on("submit", function (event) {
    event.preventDefault();
    var name = $("input[type='text']").val();
    var email = $("input[type='email']").val();
    var message = $("textarea").val();

    var contactData = {
      name: name,
      email: email,
      message: message,
    };

    console.log(contactData);

    $("#contactConfirmation")
      .text("Thank you for reaching out! We will get back to you soon.")
      .show();

    $(".contact-form input, .contact-form textarea").val("");

    setTimeout(function () {
      $("#contactConfirmation").fadeOut();
    }, 3000);
  });
});
