class Road {
  constructor(start, end, width) {
    this.position = {
      start: start,
      end: end,
    };
    this.width = width;
    this.cars = [];
  }
  draw(ctx) {
    [...Array(3)].map(() => {
      ctx.drawImage(
        images.road,
        this.position.start.x,
        this.position.start.y,
        this.width,
        this.position.end.y
      );
    });

    this.position.start.y += speed;

    ctx.drawImage(
      images.road,
      this.position.start.x,
      this.position.start.y - this.position.end.y,
      this.width,
      this.position.end.y
    );

    if (this.position.start.y > this.position.end.y) {
      this.position.start.y = 0;
    }
  }
}
