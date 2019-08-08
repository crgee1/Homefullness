import * as d3 from 'd3'; 
import data from './data';
import Display from './display';

export default class Graph {
  constructor(canvas) {
    const display = new Display(canvas);
    this.data = data;
    this.svg = d3.select(graph).append("svg")
      .attr("height", 441.78)
      .attr("width", 500);
      // .attr("height", "100%")
      // .attr("width", "100%");
    this.setup(display);
  }

  setup(display){
    this.svg.selectAll("rect")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar")
      .on('mouseenter', function (d) {display.setupAnimate(d.value, d.year)} )
      .on('mouseleave', function (d) {display.cancel()} )
      .attr("height", function (d, i) { return (d.value / 30) })
      .attr("width", "40")
      .attr("x", function (d, i) { return (i * 60) + 25 })
      .attr("y", function (d, i) { return 370 - (d.value / 30) });

    this.svg.selectAll("text")
      .data(this.data)
      .enter().append("text")
      .text(function (d) { return d.value })
      .attr("class", "text")
      .attr("x", function (d, i) { return (i * 60) + 28 })
      .attr("y", function (d, i) { return 380 - (d.value / 28) });
   
    // this.svg.selectAll("label")
    //   .data(this.data)
    //   .enter().append("text")
    //   .text(d => d.year)
    //   .attr("class", "label")
    //   .attr("x", function (d, i) { return (i * 60) + 27 })
    //   .attr("y", function (d, i) { return 385 });



    // Create scale
    var scale = d3.scaleBand()
      .domain(this.data.map(d => d.year))
      .range([0, 485]);

    // Add scales to axis
    var x_axis = d3.axisBottom()
      .scale(scale);

    //Append group and insert axis
    this.svg.append("g")
      .attr("transform", "translate(11," + 380 + ")")
      .call(x_axis);

  }
  
}
