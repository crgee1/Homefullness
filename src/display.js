import Person from './person';
import House from './house';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new House(this.ctx);
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
  }


  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    this.animate();
    this.animate();
    this.animate();
    // this.house.grow();
    // this.house.draw();
  }

  animate(value) {
    for (let i = 0; i < Math.floor(value / 100); i++) {
      this.personArr.push(new Person(this.ctx));
    }
    // this.frame = requestAnimationFrame(this.animate);
    // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    let interval = setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1)
    // this.house.draw();
    this.house.grow();
    this.personArr.forEach(person => setTimeout(() => person.animate(), Math.random() * 2500))
  }
}
