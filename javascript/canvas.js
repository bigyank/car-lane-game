function init() {
  canvas.width = 400;
  canvas.height = 710;

  const laneWidth = Math.floor(canvas.width / 3);

  const carPos = (laneWidth - carWidth) / 2;

  const { firstLane, secondLane, thirdLane } = constructLane(laneWidth);

  const carPosStart = [
    firstLane.position.start.x + carPos,
    secondLane.position.start.x + carPos,
    thirdLane.position.start.x + carPos,
  ];

  let currentLane = 1;

  const PLAYER_CAR_INITIAL = {
    x: carPosStart[currentLane],
    y: canvas.height - carHeight - 20,
  };

  const playerCar = new Car(PLAYER_CAR_INITIAL, carWidth, carHeight);

  function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    [firstLane, secondLane, thirdLane, playerCar].map((object) =>
      object.draw(ctx)
    );
    requestAnimationFrame(play);
  }

  requestAnimationFrame(play);

  document.addEventListener("keydown", ({ key }) => {
    switch (true) {
      case key === "a" && currentLane !== 0:
        currentLane -= 1;
        playerCar.position.start.x = carPosStart[currentLane];
        playerCar.position.end.x = playerCar.position.start.x + carWidth;
        break;

      case key === "d" && currentLane !== 2:
        currentLane += 1;
        playerCar.position.start.x = carPosStart[currentLane];
        playerCar.position.end.x = playerCar.position.start.x + carWidth;
        break;
    }
  });
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

init();
