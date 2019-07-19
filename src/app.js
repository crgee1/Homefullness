import Display from './display';
import Graph from './d3'; 

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  new Display(canvas)
  new Graph()
  
})

