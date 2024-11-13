window.onload = function () {
  const canvas = document.getElementById("highlightCanvas");
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#3F2616";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(250, 50);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 50);
  ctx.lineTo(550, 50);
  ctx.stroke();

  function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#3F2616";
    ctx.fill();
  }

  drawCircle(50, 50, 3);
  drawCircle(250, 50, 3);
  drawCircle(350, 50, 3);
  drawCircle(550, 50, 3);
  ctx.beginPath();
  ctx.fillStyle = "#3F2616";
  ctx.moveTo(300, 50);
  ctx.bezierCurveTo(290, 30, 270, 30, 300, 70);
  ctx.bezierCurveTo(330, 30, 310, 30, 300, 50);
  ctx.fill();
};

function downloadImage() {
  const canvas = document.getElementById("highlightCanvas");
  const image = canvas.toDataURL("image/png");

  const a = document.createElement("a");
  a.href = image;
  a.download = "divider-line.png";
  a.click();
}
