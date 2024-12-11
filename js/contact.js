$(document).ready(function () {
  emailjs.init("aQbUOPW1s2gJc6p3s");

  const feedbackWorker = new Worker("./js/feedbackWorker.js");

  feedbackWorker.onmessage = function (event) {
    const response = event.data;
    console.log(response.message);

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

    feedbackWorker.postMessage({
      source: source,
      subscribe: subscribe,
      comments: comments,
    });
  });

  $(".contact-form").on("submit", function (event) {
    event.preventDefault();

    var name = $(this).find("input[type='text']").val();
    var email = $(this).find("input[type='email']").val();
    var message = $(this).find("textarea").val();

    var templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_kunjxcj", "template_x9g2zqh", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        $("#contactConfirmation")
          .text("Thank you for reaching out! We will get back to you soon.")
          .show();

        $(".contact-form input, .contact-form textarea").val("");

        setTimeout(function () {
          $("#contactConfirmation").fadeOut();
        }, 3000);
      },
      function (error) {
        console.log("FAILED...", error);

        $("#contactConfirmation")
          .text("An error occurred. Please try again later.")
          .show();

        setTimeout(function () {
          $("#contactConfirmation").fadeOut();
        }, 3000);
      }
    );
  });
});
