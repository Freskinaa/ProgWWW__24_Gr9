$(document).ready(function () {
  $("#feedbackForm").on("submit", function (event) {
    event.preventDefault();
    var source = $("input[name='source']:checked").val();
    var subscribe = $("input[name='subscribe']:checked").val();
    var comments = $("textarea[name='comments']").val();
    var feedbackData = {
      source: source,
      subscribe: subscribe,
      comments: comments,
    };

    console.log(feedbackData);
    $("#confirmationMessage").text("Thank you for your feedback!").show();
    setTimeout(function () {
      $("#confirmationMessage").fadeOut();
    }, 3000);
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
