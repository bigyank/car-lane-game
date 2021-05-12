function init() {
  canvas.width = 400;
  canvas.height = 710;

  const laneWidth = Math.floor(canvas.width / 3);

  const carPos = (laneWidth - carWidth) / 2;

  const { firstLane, secondLane, thirdLane } = constructLane(laneWidth, carPos);

  const lanes = [firstLane, secondLane, thirdLane];

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

  //   initialize last enemy
  let lastEnemy;

  function generateEnemy() {
    let randomLane = Math.floor(Math.random() * 3);
    let lane = lanes[randomLane];

    // check if last enemy is present
    if (!lastEnemy) {
      lastEnemy = lane.generateEnemy(carWidth, carHeight);
    } else {
      if (lastEnemy.active) {
        if (lastEnemy.position.start.y > carHeight * 2) {
          lastEnemy = lane.generateEnemy(carWidth, carHeight);
        }
      } else {
        lastEnemy = lane.generateEnemy(carWidth, carHeight);
      }
    }
  }

  function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    [firstLane, secondLane, thirdLane, playerCar].map((object) => {
      object.draw(ctx);
      if (object instanceof Road) {
        object.moveEnemy(ctx, canvas.height);
      }
    });

    generateEnemy();

    requestAnimationFrame(play);
  }

  requestAnimationFrame(play);

  document.addEventListener("keydown", ({ key }) => {
    switch (true) {
      case key === "a" && currentLane !== 0:
        currentLane--;
        playerCar.position.start.x = carPosStart[currentLane];
        playerCar.position.end.x = playerCar.position.start.x + carWidth;
        break;

      case key === "d" && currentLane !== 2:
        currentLane++;
        playerCar.position.start.x = carPosStart[currentLane];
        playerCar.position.end.x = playerCar.position.start.x + carWidth;
        break;
    }
  });
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

init();
