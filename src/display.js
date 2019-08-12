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
    this.addPerson = this.addPerson.bind(this);
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  cancel() {
    this.clear();
    cancelAnimationFrame(this.frame);
    this.personArr = [];
    this.house.reset();
    this.text.reset();
    this.i = 0;
  }

  setupAnimate(obj){
    this.value = obj.value;
    this.white = Math.round(this.value * obj.White / 100 / 60);
    this.black = Math.round(this.value * obj.Black / 100 / 60);
    this.latino = Math.round(this.value * obj.Latino / 100 / 60);
    this.asian = Math.round(this.value * obj.Asian / 100 / 60);
    this.americanIndian = Math.round(this.value * obj['American Indian'] / 100 / 60);
    this.animate();
  }
  
  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.clear();
    this.text.animate(this.value * 1000);
    this.house.grow(this.value);
    this.addPerson();
    this.personArr.forEach(person => person.animate())
  }
  
  addPerson() {
    if (this.white > this.i) {
      this.personArr.push(new Person(this.ctx, 'white', this.i));
    } else if (this.white + this.black > this.i) {
      this.personArr.push(new Person(this.ctx, 'black', this.i));
    } else if (this.white + this.black + this.latino > this.i) {
      this.personArr.push(new Person(this.ctx, 'latino', this.i));
    } else if (this.white + this.black + this.latino + this.americanIndian > this.i) {
      this.personArr.push(new Person(this.ctx, 'americanIndian', this.i));
    } else if (this.white + this.black + this.latino + this.americanIndian + this.asian > this.i) {
      this.personArr.push(new Person(this.ctx, 'asian', this.i));
    } else if (this.i < Math.floor(this.value / 60)) {
      this.personArr.push(new Person(this.ctx, 'unknown', this.i));
    }
    this.i++;
  }
}
