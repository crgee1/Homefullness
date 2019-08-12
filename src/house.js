export default class House {
  constructor(ctx) {
    this.ctx = ctx;
    this.house = new Image();
    this.house.src = "./assets/images/house.png"
    this.pos = { x: 430, y: 280 };
    this.size = 100;
    this.grow = this.grow.bind(this);
  }
  
  grow(value) {
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
    if (this.size < value / 24.46) {
      this.size += 1;
      this.pos.x -= .5;
      this.pos.y -= .95;
    }
  }

  reset() {
    this.size = 100;
    this.pos = { x: 430, y: 280 };
  }
}
