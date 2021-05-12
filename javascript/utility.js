function constructLane(laneWidth) {
  const firstLane = new Road(
    { x: 0, y: 0 },
    { x: laneWidth, y: canvas.height },
    laneWidth
  );

  const secondLane = new Road(
    { x: laneWidth, y: 0 },
    { x: 2 * laneWidth, y: canvas.height },
    laneWidth
  );

  const thirdLane = new Road(
    { x: 2 * laneWidth + 2, y: 0 },
    { x: canvas.width, y: canvas.height },
    laneWidth
  );

  return { firstLane, secondLane, thirdLane };
}
