import Person from './person';
import House from './house';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new House(this.ctx);
    this.animate = this.animate.bind(this);
    this.personArr = [];
    this.clear = this.clear.bind(this);

    // this.registerEvents();
  }


  // registerEvents() {
  //   this.boundClickHandler = this.click.bind(this);
  //   this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  // }

  // click(e) {
  //   this.animate();
  //   this.house.grow();
  //   this.house.draw();
  // }

  setupAnimate(value){
    for (let i = 0; i < Math.floor(value / 100); i++) {
      this.personArr.push(new Person(this.ctx, i));
    }
    this.animate();
  }

  cancel() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(this.frame);
    this.personArr = [];
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.clear();
    // this.house.draw();
    this.house.grow();
    this.personArr.forEach(person => person.animate())
    // this.personArr.forEach(person => setTimeout(() => person.animate(), Math.random() * 2500))
  }
}
