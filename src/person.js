export default class Person {
  constructor(ctx, ethnicity, n) {
    this.ctx = ctx;
    this.person = new Image();
    this.person.src = `./assets/images/person-${ethnicity}.png`;
    this.startY = 330;
    this.startX = 450;
    this.endX = 0 + 20 * (n % 12);
    this.endY = 0 + 40 * Math.floor(n / 12);
    this.animate = this.animate.bind(this);
  }

  animate() {
    const speed = 2;
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
