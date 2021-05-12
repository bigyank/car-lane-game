class Car {
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
  }

  draw(ctx) {
    ctx.drawImage(
      gameAssets.getCar(),
      this.position.start.x,
      this.position.start.y,
      this.width,
      this.height
    );
  }
}
