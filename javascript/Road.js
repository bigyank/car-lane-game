class Road {
  constructor(start, end, width, fromLeft) {
    this.position = {
      start: start,
      end: end,
    };
    this.width = width;
    this.cars = [];
    this.fromLeft = this.position.start.x + fromLeft;
  }

  draw(ctx) {
    [...Array(3)].map(() => {
      ctx.drawImage(
        gameAssets.getRoad(),
        this.position.start.x,
        this.position.start.y,
        this.width,
        this.position.end.y
      );
    });

    this.position.start.y += speed;

    ctx.drawImage(
      gameAssets.getRoad(),
      this.position.start.x,
      this.position.start.y - this.position.end.y,
      this.width,
      this.position.end.y
    );

    if (this.position.start.y > this.position.end.y) {
      this.position.start.y = 0;
    }
  }

  generateEnemy(carWidth, carHeight) {
    const enemy = new Enemy(
      { x: this.fromLeft, y: -carHeight },
      carWidth,
      carHeight
    );
    this.cars.push(enemy);
    return enemy;
  }

  moveEnemy(ctx, height) {
    for (let i = 0; i < this.cars.length; i++) {
      let car = this.cars[i];
      if (car.active) {
        car.moveYaxis(height);
        car.draw(ctx);
      }
    }
  }

  detectCollision(playerCar) {
    for (let i = 0; i < this.cars.length; i++) {
      let car = this.cars[i];
      if (car.active) {
        if (
          playerCar.position.start.x < car.position.end.x &&
          playerCar.position.end.x > car.position.start.x &&
          playerCar.position.start.y < car.position.end.y &&
          playerCar.position.end.y > car.position.start.y
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
