import Person from './person';
import House from './house';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new House(this.ctx);
    this.animate = this.animate.bind(this);
    this.personArr = [];
    this.clear = this.clear.bind(this);
  }

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
    this.house.reset();
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.clear();
    this.house.grow();
    this.personArr.forEach(person => person.animate())
  }
}
