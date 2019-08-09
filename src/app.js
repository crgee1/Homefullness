import Graph from './graph'; 

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = document.getElementById('myChart').getContext('2d');
  new Graph(canvas, ctx);
})

