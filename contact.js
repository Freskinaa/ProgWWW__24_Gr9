$(document).ready(function () {
  $("#feedbackForm").on("submit", function (event) {
    event.preventDefault();

    const source = $('input[name="source"]:checked').val();
    const comments = $('textarea[name="comments"]').val();

    if (source) {
      const $confirmationMessage = $("#confirmationMessage");
      const $formFields = $("textarea, input[type='radio']");

      $confirmationMessage
        .hide()
        .text("Thank you for your feedback!")
        .show(500, function () {
          $confirmationMessage.fadeOut(1000, function () {
            $confirmationMessage.fadeIn(1000, function () {
              setTimeout(() => {
                $confirmationMessage.slideUp(500);
              }, 3000);
            });
          });
        });

      $formFields.animate({ opacity: 0.5 }, 500, function () {
        $formFields.val("");
        $formFields.animate({ opacity: 1 }, 500);
      });
    }
  });
});
