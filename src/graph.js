import * as d3 from 'd3'; 
import Chart from 'chart.js';
import data from './data';
import Display from './display';
import 'chartjs-plugin-labels';

export default class Graph {
  constructor(canvas, ctx) {
    const display = new Display(canvas);
    this.data = data;
    this.svg = d3.select(graph).append("svg")
      .attr("height", 400)
      .attr("width", 600);
      // .attr("height", "100%")
      // .attr("width", "100%");
    this.setup(display, ctx, this.setupChart);
    // this.setupChart();
  }

  setupChart(ctx, data) {
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
        labels: Object.keys(data).slice(2),
        datasets: [{
          backgroundColor: ['lightBlue', 'darkblue','teal', 'indigo', 'purple' ],
          // borderColor: 'rgb(255, 99, 132)',
          data: Object.values(data).slice(2),
        }]
      },

      // Configuration options go here
      options: {
        events: [],
        responsive: false,
        plugins: {
          labels: {
            // render: 'percentage',
            fontColor: 'black',
            // precision: 4,
            arc: true,
            position: 'outside',
          }
        },
      },
      
    });
    // setTimeout(() => {
    //   chart.destroy();
    // }, 10000);
  }

  setup(display, that, cb){
    this.svg.selectAll("rect")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar")
      .on('mouseenter', function (d) {
        display.setupAnimate(d.value, d.year);
        cb(that, d);
      })
      .on('mouseleave', function (d) {display.cancel()} )
      .attr("height", function (d, i) { return (d.value / 30) })
      .attr("width", "40")
      .attr("x", function (d, i) { return (i * 60) + 60 })
      .attr("y", function (d, i) { return 350 - (d.value / 30) });

    this.svg.selectAll("text")
      .data(this.data)
      .enter().append("text")
      .text(function (d) { return d.value })
      .attr("class", "text")
      .attr("x", function (d, i) { return (i * 60) + 63 })
      .attr("y", function (d, i) { return 400 - (d.value / 29) });
   
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
      .attr("transform", "translate(48," + 360 + ")")
      .call(x_axis);

    // scale = d3.scaleBand()
    //   .domain([10000,0])
    //   .range([0, 380]);

    // // Add scales to axis
    // var y_axis = d3.axisLeft()
    //   .scale(scale);

    // //Append group and insert axis
    // this.svg.append("g")
    //   .attr("transform", "translate(48," + 0 + ")")
    //   .call(y_axis)

  }
  
}
