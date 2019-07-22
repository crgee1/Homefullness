export default class text {
  constructor(ctx) {
    this.ctx = ctx;
    this.ctx.font = "30px Arial";
    this.number = 0;
  }

  animate(value) {
    this.ctx.fillText(this.number, 400, 800);
    if (this.number < 10000) this.number += 100;
  }
}