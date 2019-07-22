import * as d3 from 'd3'; 
import data from './data';
import Display from './display';

export default class Graph {
  constructor(canvas) {
    let display = new Display(canvas);
    this.data = data;
    this.svg = d3.select(div).append("svg")
      .attr("height", "100%")
      .attr("width", "100%");
      console.log(this.display)

    this.setup(display);
  }

  setup(display){
    this.svg.selectAll("rect")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar")
      // .on('click', function (d) {new Display(canvas).setupAnimate(d.value)} )
      .on('mouseenter', function (d) {display.setupAnimate(d.value)} )
      .on('mouseleave', function (d) {display.cancel()} )
      .attr("height", function (d, i) { return (d.value / 30) })
      .attr("width", "40")
      .attr("x", function (d, i) { return (i * 60) + 25 })
      .attr("y", function (d, i) { return 600 - (d.value / 30) });

    this.svg.selectAll("text")
      .data(this.data)
      .enter().append("text")
      .text(function (d) { return d.value })
      .attr("class", "text")
      .attr("x", function (d, i) { return (i * 60) + 30 })
      .attr("y", function (d, i) { return 600 - (d.value / 28) });
   
    this.svg.selectAll("label")
      .data(this.data)
      .enter().append("text")
      .text(function (d) { return d.year })
      .attr("class", "label")
      .attr("x", function (d, i) { return (i * 60) + 30 })
      .attr("y", function (d, i) { return 615 });
  }
  
}








// var margin = { top: 20, right: 20, bottom: 70, left: 40 },
//   width = 600 - margin.left - margin.right,
//   height = 300 - margin.top - margin.bottom;

// // Parse the date / time
// var parseDate = d3.time.format("%Y-%m").parse;

// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

// var y = d3.scale.linear().range([height, 0]);

// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom")
//   .tickFormat(d3.time.format("%Y-%m"));

// var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient("left")
//   .ticks(10);

// var svg = d3.select("body").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform",
//     "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("bar-data.csv", function (error, data) {

//   data.forEach(function (d) {
//     d.date = parseDate(d.date);
//     d.value = +d.value;
//   });

//   x.domain(data.map(function (d) { return d.date; }));
//   y.domain([0, d3.max(data, function (d) { return d.value; })]);

//   svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis)
//     .selectAll("text")
//     .style("text-anchor", "end")
//     .attr("dx", "-.8em")
//     .attr("dy", "-.55em")
//     .attr("transform", "rotate(-90)");

//   svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis)
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", ".71em")
//     .style("text-anchor", "end")
//     .text("Value ($)");

//   svg.selectAll("bar")
//     .data(data)
//     .enter().append("rect")
//     .style("fill", "steelblue")
//     .attr("x", function (d) { return x(d.date); })
//     .attr("width", x.rangeBand())
//     .attr("y", function (d) { return y(d.value); })
//     .attr("height", function (d) { return height - y(d.value); });

// });