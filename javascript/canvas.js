function init() {
  canvas.width = 400;
  canvas.height = 710;

  const laneWidth = Math.floor(canvas.width / 3);

  const carPos = (laneWidth - carWidth) / 2;

  const { lane1, lane2, lane3 } = constructLane(laneWidth, carPos);

  const lanes = [lane1, lane2, lane3];

  const carPosStart = [
    lane1.position.start.x + carPos,
    lane2.position.start.x + carPos,
    lane3.position.start.x + carPos,
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

    [lane1, lane2, lane3, playerCar].map((object) => {
      object.draw(ctx);
      if (object instanceof Road) {
        object.moveEnemy(ctx, canvas.height);
      }
    });

    generateEnemy();

    if (
      lane1.detectCollision(playerCar) ||
      lane2.detectCollision(playerCar) ||
      lane3.detectCollision(playerCar)
    ) {
      console.log("collided");
    } else {
      updateScore(ctx, canvas.width);
      requestAnimationFrame(play);
    }
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

  function updateScore() {
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(score, canvas.width / 2 - 20, 50);
  }
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

init();
