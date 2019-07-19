import Display from './display';
import * as d3 from 'd3'; 

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  new Display(canvas)

  var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

  var svg = d3.select("div").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

  svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
    .attr("height", function (d, i) { return (d * 10) })
    .attr("width", "40")
    .attr("x", function (d, i) { return (i * 60) + 25 })
    .attr("y", function (d, i) { return 400 - (d * 10) });
})

