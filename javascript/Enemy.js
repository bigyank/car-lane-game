class Enemy {
  constructor(startPosition, width, height) {
    this.width = width;
    this.height = height;
    this.position = {
      start: startPosition,
      end: {
        x: startPosition.x + this.width,
        y: startPosition.y + this.height,
      },
    };

    this.active = true;
    this.img = gameAssets.getEnemies()[Math.floor(Math.random() * 3)];
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.start.x,
      this.position.start.y,
      this.width,
      this.height
    );
  }

  moveYaxis() {
    if (this.active) {
      this.position.start.y += speed;
      this.position.end.y += speed;
    }
  }
}
