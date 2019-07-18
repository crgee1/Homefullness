const sprite = new Image();
sprite.src = "../assets/images/person-icon.png";

export default class Person {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.x = Math.random() * 480;
    this.y = Math.random() * 640;
    while (this.x > 157 && this.x < 257 ) this.x = Math.random() * 480;
    // this.x = 300;
    // this.y = 450;
    this.endY = 290;
    this.endX = 207;
    console.log(this.x, this.y)
    this.animate = this.animate.bind(this);
  }

  animate() {
    // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.person, this.x, this.y, 70, 70);
    // this.ctx.fillRect(190, 250, 80, 120);
    let slope = (this.y - this.endY) / (this.x - this.endX);
    console.log(slope);
    if (this.x > this.endX && this.y < this.endY) {
      this.x -= 1.2;
      this.y -= slope * 1.2;
    } else if (this.x < this.endX && this.y < this.endY) {
      this.x += 1.2;
      this.y += slope * 1.2;
    } else if (this.x < this.endX && this.y > this.endY) {
      this.x += 1.2;
      this.y += slope * 1.2;
    } else {
      this.x -= 1.2;
      this.y -= slope * 1.2;
    }
    if (this.x > this.endX || this.x < this.endX - 2) requestAnimationFrame(this.animate);
  }
}
