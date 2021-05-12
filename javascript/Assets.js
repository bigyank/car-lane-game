class Assets {
  constructor() {
    this.road = new Image();
    this.road.src = "./assets/road.jpg";

    this.car = new Image();
    this.car.src = "./assets/car.png";
  }

  getRoad() {
    return this.road;
  }

  getCar() {
    return this.car;
  }
}

const gameAssets = new Assets();
