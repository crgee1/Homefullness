export default class Person {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.startY = 490;
    this.startX = 446;
    // this.x = Math.random() * 800;
    // this.y = Math.random() * 800;
    this.endX = Math.random() * 800;
    this.endY = Math.random() * 800;
    while (this.endX > this.startX - 100 && this.endX < this.startX + 100 ) this.endX = Math.random() * 800;
    this.animate = this.animate.bind(this);
  }

  animate() {
    if (true) this.frame = requestAnimationFrame(this.animate);
    this.ctx.drawImage(this.person, this.startX, this.startY, 70, 70);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    if (this.startX < this.endX && this.startY > this.endY) {
      this.startX += .7;
      this.startY += slope * .7;
    } else if (this.startX > this.endX && this.startY > this.endY) {
      this.startX -= .7;
      this.startY -= slope * .7;
    } else if (this.startX > this.endX && this.startY < this.endY) {
      this.startX -= .7;
      this.startY -= slope * .7;
    } else {
      this.startX += .7;
      this.startY += slope * .7;
    }
  }
}
