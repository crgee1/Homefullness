export default class House {
  constructor(ctx) {
    this.ctx = ctx;
    this.house = new Image();
    this.house.src = "./assets/images/house.png"
    this.pos = { x: 430, y: 280 };
    this.size = 100;
    this.grow = this.grow.bind(this);
    this.draw = this.draw.bind(this);
  }

  grow() {
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
    if (this.size < 400) {
      this.size += 1;
      this.pos.x -= .5;
      this.pos.y -= .95;
    }
  }

  draw() {
    this.frame = requestAnimationFrame(this.draw);
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
  }

  reset() {
    this.size = 100;
    this.pos = { x: 430, y: 280 };
  }
}
