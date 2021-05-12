function init() {
  canvas.width = 400;
  canvas.height = 710;

  const laneWidth = Math.floor(canvas.width / 3);

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

  function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    [firstLane, secondLane, thirdLane].map((road) => road.draw(ctx));
    requestAnimationFrame(play);
  }

  requestAnimationFrame(play);
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

init();
