export default class Person {
  constructor(ctx, n) {
    this.ctx = ctx;
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.startY = 490;
    this.startX = 446;
    this.n = n
    this.endX = Math.floor(Math.random() * 800);
    this.endY = Math.floor(Math.random() * 800);
    while (this.endX > this.startX - 100 && this.endX < this.startX + 100 ) this.endX = Math.random() * 800;
    this.animate = this.animate.bind(this);
  }

  animate() {
    // const speed = 2;
    const speed = .55;
    // this.frame = requestAnimationFrame(this.animate);
    this.ctx.drawImage(this.person, this.startX, this.startY, 70, 70);
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
