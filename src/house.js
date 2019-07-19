export default class House {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new Image();
    this.house.src = "../assets/images/house.png"
    this.size = 100;
    this.grow = this.grow.bind(this);
    this.draw = this.draw.bind(this);
  }

  grow() {
    // if (true) this.frame = requestAnimationFrame(this.grow);
    // this.ctx.save();
    this.ctx.translate(430, 450);
    // console.log(this.house.width)
    // let halfW = this.house.width/2;
    // let halfH = this.house.height/2;
    // this.ctx.translate(halfW, halfH);
    // this.ctx.scale(1,1);
    // this.ctx.drawImage(this.house, -halfW, -halfH);
    this.ctx.drawImage(this.house, 430, 450, this.size, this.size);
    // this.ctx.restore();
  }

  draw() {
    this.ctx.drawImage(this.house, 430, 450, this.size, this.size);
  }
}