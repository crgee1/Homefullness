import Person from './sprite';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    // this.person = new Image();
    // this.person.src = "../assets/images/person-icon.png"

    this.animate = this.animate.bind(this);
    // this.ctx.drawImage(this.person, 100, 100, 100, 100);
    // this.animate();
    // this.ctx.fillRect(190, 250, 80, 120);

    this.registerEvents();
    this.x = canvas.width;
    console.log(canvas.width)
    this.y = 100;
    this.person = new Person(canvas);
    
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // this.frame = requestAnimationFrame(this.animate);
    console.log("rendering");
    this.ctx.fillRect(190, 250, 80, 120);
    this.person.animate();
    // this.ctx.drawImage(this.person, this.x, this.y, 70, 70); 
    // this.x -= .8;
    // this.y -= -0.413;
    if (this.x > 190) requestAnimationFrame(this.animate) 
    // this.draw();
  }

  // draw() {
  //   this.ctx.drawImage(this.person, 100, 100, 100, 100,);
  // }

}
