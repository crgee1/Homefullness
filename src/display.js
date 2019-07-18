import Person from './sprite';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new Image();
    this.house.src = "../assets/images/house.png";
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
    for(let i = 0; i < 5; i++) {
      this.personArr.push(new Person(canvas));
    }
    
  }

  drawHouse() {
    this.ctx.drawImage(this.house, 430, 450, 100, 100);
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
    this.personArr.forEach(person => setTimeout(() => person.animate(), 2))
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawHouse();
    }, 10)
  }
}