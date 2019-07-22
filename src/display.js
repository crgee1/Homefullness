import Person from './person';
import House from './house';
import Text from './text';

export default class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new House(this.ctx);
    this.text = new Text(this.ctx);
    this.personArr = [];
    this.i = 0;
    this.animate = this.animate.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  cancel() {
    this.clear();
    cancelAnimationFrame(this.frame);
    this.personArr = [];
    this.house.reset();
    this.i = 0;
  }

  setupAnimate(value, year){
    // for (let i = 0; i < Math.floor(value / 100); i++) {
    //   this.personArr.push(new Person(this.ctx, i));
    // }
    this.value = value;
    this.animate();
  }
  
  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.clear();
    this.text.animate();
    this.house.grow();
    if (this.i < Math.floor(this.value / 100)) {
      this.personArr.push(new Person(this.ctx, this.i));
      this.i ++;
      // console.log(value);
      // console.log(Math.floor(value / 100));
    }
    this.personArr.forEach(person => person.animate())
  }
}
