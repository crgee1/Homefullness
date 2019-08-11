export default class Person {
  constructor(ctx, ethnicity, n) {
    this.ctx = ctx;
    this.person = new Image();
    this.ethnicity = ethnicity;
    switch (this.ethnicity) {
      case 'white':
        this.person.src = "./assets/images/person-white.png";
        break;
      case 'black':
        this.person.src = "./assets/images/person-black.png";
        break;
      case 'latino':
        this.person.src = "./assets/images/person-latino.png";
        break;
      case 'americanIndian':
        this.person.src = "./assets/images/person-americanIndian.png";
        break;
      case 'asian':
        this.person.src = "./assets/images/person-asian.png";
        break;
      default: this.person.src = "./assets/images/person.png";
        break;
    }
    this.startY = 330;
    this.startX = 450;
    this.endX = 0 + 20 * (n % 12);
    this.endY = 0 + 40 * Math.floor(n / 12);
    // while (this.endX > this.startX - 100 && this.endX < this.startX + 100 ) this.endX = Math.random() * 800;
    this.animate = this.animate.bind(this);
  }

  animate() {
    const speed = 2;
    // const speed = .55;
    // this.frame = requestAnimationFrame(this.animate);
    this.ctx.drawImage(this.person, this.startX, this.startY, 50, 50);
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
