function constructLane(laneWidth, carPos) {
  const lane1 = new Road(
    { x: 0, y: 0 },
    { x: laneWidth, y: canvas.height },
    laneWidth,
    carPos
  );

  const lane2 = new Road(
    { x: laneWidth, y: 0 },
    { x: 2 * laneWidth, y: canvas.height },
    laneWidth,
    carPos
  );

  const lane3 = new Road(
    { x: 2 * laneWidth + 2, y: 0 },
    { x: canvas.width, y: canvas.height },
    laneWidth,
    carPos
  );

  return { lane1, lane2, lane3 };
}

function updateScore(ctx, canvasWidth) {
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(score, canvasWidth / 2 - 20, 50);
}
