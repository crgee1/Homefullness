const sprite = new Image();
sprite.src = "../assets/images/person-icon.png";

export default class Person {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.x = Math.random() * 480;
    this.y = Math.random() * 640;
    console.log(this.x, this.y)
  }

  animate() {
    this.ctx.drawImage(this.person, this.x, this.y, 70, 70);
    let slope = (100 - this.y) / (480 - this.x);
    this.x -= (100 - this.y) / (480 - this.x) / .8;
    this.y -= (this.y - 100) / (this.x - 480) / this.x;
    if (this.x > 190) requestAnimationFrame(this.animate);
  }
}
