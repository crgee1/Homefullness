import Person from './person';
import House from './house';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new House(canvas);
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
    for(let i = 0; i < 100; i++) {
      this.personArr.push(new Person(canvas));
    }
  }


  registerEvents() {
    this.house.draw();
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    // this.animate();
    this.house.grow();
    // this.house.draw();
  }

  animate() {
    // this.frame = requestAnimationFrame(this.animate);
    // this.personArr.forEach(person => setTimeout(() => person.animate(), Math.random() * 2500))
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // this.house.draw();
    }, 10)
  }
}
