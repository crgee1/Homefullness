export default class text {
  constructor(ctx) {
    this.ctx = ctx;
    this.ctx.font = "30px Arial";
    this.number = 0;
    this.reset = this.reset.bind(this);
  }

  display(amt) {
    return amt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  animate(value) {
    this.ctx.fillText(`${this.display(this.number)} sq ft needed`, 330, 500);
    if (this.number < value) this.number += 30000;
  }

  reset() {
    this.number = 0;
  }
}
