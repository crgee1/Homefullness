const CONSTANTS = {
  startX: 450,
  startY: 330,
  speed: 2,
}

export default class Person {
  constructor(ctx, ethnicity, n) {
    this.ctx = ctx;
    this.person = new Image();
    this.person.src = `./assets/images/person-${ethnicity}.png`;
    this.startY = CONSTANTS.startY;
    this.startX = CONSTANTS.startX;
    this.endX = 20 * (n % 12);
    this.endY = 40 * Math.floor(n / 12);
    this.animate = this.animate.bind(this);
  }

  animate() {
    const speed = CONSTANTS.speed;
    this.ctx.drawImage(this.person, this.startX, this.startY, 50, 50);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    if (this.startX < this.endX && this.startY > this.endY) {
      this.startX += speed;
      this.startY += Math.round(slope * speed);
    } else if (this.startX > this.endX && this.startY > this.endY) {
      this.startX -= speed;
      this.startY -= Math.round(slope * speed);
    } else if (this.startX > this.endX && this.startY < this.endY) {
      this.startX -= speed;
      this.startY -= Math.round(slope * speed);
    } else if (this.startX < this.endX && this.startY < this.endY) {
      this.startX += speed;
      this.startY += Math.round(slope * speed);
    }
  }
}
