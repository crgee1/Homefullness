const CONSTANTS = {
  startX: 430,
  startY: 280,
  growthFactor: 24.46,
}

export default class House {
  constructor(ctx) {
    this.ctx = ctx;
    this.house = new Image();
    this.house.src = "./assets/images/house.png"
    this.pos = { x: CONSTANTS.startX, y: CONSTANTS.startY };
    this.size = 100;
    this.grow = this.grow.bind(this);
  }

  grow(totalPop) {
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
    if (this.size < totalPop / CONSTANTS.growthFactor) {
      this.size += 1;
      this.pos.x -= .5;
      this.pos.y -= .95;
    }
  }

  reset() {
    this.size = 100;
    this.pos = { x: CONSTANTS.startX, y: CONSTANTS.startY };
  }
}
