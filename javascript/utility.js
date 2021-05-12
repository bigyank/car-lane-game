function constructLane(laneWidth, carPos) {
  const firstLane = new Road(
    { x: 0, y: 0 },
    { x: laneWidth, y: canvas.height },
    laneWidth,
    carPos
  );

  const secondLane = new Road(
    { x: laneWidth, y: 0 },
    { x: 2 * laneWidth, y: canvas.height },
    laneWidth,
    carPos
  );

  const thirdLane = new Road(
    { x: 2 * laneWidth + 2, y: 0 },
    { x: canvas.width, y: canvas.height },
    laneWidth,
    carPos
  );

  return { firstLane, secondLane, thirdLane };
}
