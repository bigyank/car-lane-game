class Assets {
  constructor() {
    this.road = new Image();
    this.road.src = "./assets/road.jpg";

    this.car = new Image();
    this.car.src = "./assets/car.png";

    this.enemy1 = new Image();
    this.enemy1.src = "./assets/opponent1.png";

    this.enemy2 = new Image();
    this.enemy2.src = "./assets/opponent2.png";

    this.enemy3 = new Image();
    this.enemy3.src = "./assets/opponent3.png";
  }

  getRoad() {
    return this.road;
  }

  getCar() {
    return this.car;
  }

  getEnemies() {
    return [this.enemy1, this.enemy2, this.enemy3];
  }
}

const gameAssets = new Assets();
