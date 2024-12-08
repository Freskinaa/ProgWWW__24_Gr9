self.onmessage = function (event) {
  const { source, subscribe, comments } = event.data;
  const feedbackData = {
    source: source,
    subscribe: subscribe,
    comments: comments,
  };

  self.postMessage({
    message: "Feedback received successfully",
    data: feedbackData,
  });
};
