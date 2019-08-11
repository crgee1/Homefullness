export default class Person {
  constructor(ctx, n) {
    this.ctx = ctx;
    this.person = new Image();
    this.person.src = "./assets/images/person.png"
    this.startY = 330;
    this.startX = 446;
    this.endX = 20 + 20 * (n % 10);
    this.endY = 10 + 52 * Math.floor(n / 10);
    // while (this.endX > this.startX - 100 && this.endX < this.startX + 100 ) this.endX = Math.random() * 800;
    this.animate = this.animate.bind(this);
  }

  animate() {
    const speed = 2;
    // const speed = .55;
    // this.frame = requestAnimationFrame(this.animate);
    this.ctx.drawImage(this.person, this.startX, this.startY, 60, 60);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    if (this.startX < this.endX && this.startY > this.endY) {
      this.startX += speed;
      this.startY += Math.round(slope * speed);
      // console.log('quad1')
    } else if (this.startX > this.endX && this.startY > this.endY) {
      this.startX -= speed;
      this.startY -= Math.round(slope * speed);
      // console.log('quad2')
    } else if (this.startX > this.endX && this.startY < this.endY) {
      this.startX -= speed;
      this.startY -= Math.round(slope * speed);
      // console.log('quad3')
    } else if (this.startX < this.endX && this.startY < this.endY) {
      this.startX += speed;
      this.startY += Math.round(slope * speed);
      // console.log('quad4')
    }
  }
}
