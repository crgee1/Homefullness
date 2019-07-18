const sprite = new Image();
sprite.src = "../assets/images/person-icon.png";

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
    console.log(this.endX, this.endY)
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.ctx.drawImage(this.person, this.startX, this.startY, 70, 70);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    // console.log(slope);
    // if (this.endX > this.startX && this.endY < this.startY) {
    //   this.endX -= 1.2;
    //   this.endY -= slope * 1.2;
    // } else if (this.endX < this.startX && this.endY < this.startY) {
    //   this.endX += 1.2;
    //   this.endY += slope * 1.2;
    // } else if (this.endX < this.startX && this.endY > this.startY) {
    //   this.endX += 1.2;
    //   this.endY += slope * 1.2;
    // } else {
    //   this.endX -= 1.2;
    //   this.endY -= slope * 1.2;
    // }
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
    if (true) requestAnimationFrame(this.animate);
  }
}
