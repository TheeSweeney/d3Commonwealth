//commented out behavior will eventually be turned into eleven country average line
var data = [
  {key: "AUS", value: 1.360530419036175, rank: 1 },
  {key: "UK", value: 1.29399312764886, rank: 2 },
  {key: "NETH", value: 1.251787757074009, rank: 3 },
  {key: "NZ", value: 1.151665180612727, rank: 4 },
  {key: "NOR", value: 1.13376085186227, rank: 5 },
  {key: "SWIZ", value: 1.0675352522899197, rank: 6 },
  {key: "SWE", value: 1.0674114551491452, rank: 7 },
  {key: "GER", value: 1.064104826992644, rank: 8 },
  {key: "CAN", value: 1-0.247553882107696, rank: 9 },
  {key: "FRA", value: 1-0.41705654741814, rank: 10 },
  {key: "USA", value: 1-0.706030660985181, rank: 11 }
];

var w = 800;
var h = 450;
var margin = {
  top: 58,
  bottom: 100,
  left: 80,
  right: 40
};
var categories = [1,2,3,4,5]
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
      .attr("id", "chart")
      .attr("width", w)
      .attr("height", h);
var chart = svg.append("g")
      .classed("display", true)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var x = d3.scale.linear()
          .domain(d3.extent(data, function(d){
            return d.rank;
          }))
          .range([50, width]);
var y = d3.scale.linear()
          .domain([0, d3.max(data, function(d){
            return d.value + .1;
          })])
          .range([height, 0])
var linearColorScale = d3.scale.linear()
                        .domain([0, data.length])
                        .range(['#4ABDBC','#044C7F']);
// var xAxis = d3.svg.axis()
//               .scale(x)
//               .orient('bottom')
//               .ticks(d3.time.days, 7)
//               .tickFormat(d3.time.format('%m/%d'))
var yAxis = d3.svg.axis()
              .scale(y)
              .orient('left')
              .ticks(0)

var controls = d3.select('body')
                .append('div')
                .attr('id', 'controls');
var sort_btn = controls.append('button')
                      .attr('state', 'quality')

function plot(params){
  // this.append('g')
  //     .classed('x axis', true)
  //     .attr('transform', 'translate(0,'+ height +')')
  //     .call(params.axis.x)

  //TODO: factor out text for labels, and note so plot can but used on different charts
  this.append('g')
      .classed('y axis grad', true)
      .attr('transform', 'translate(0,0)')
      .call(params.axis.y)

  this.select('.y.axis')//Top Label
      .append('text')
      .attr('x',-10)
      .attr('y',-10)
      .text('Higher Performing')

  this.select('.y.axis')//Bottom Label
      .append('text')
      .attr('x',-10)
      .attr('y', height + 25)
      .text('Lower Performing')
  
  this.select('g')//Note
      .append('text')
      .attr('id', 'note')
      .attr('x',0)
      .attr('y', height + 75)
      .classed('alignLeft', true)
      .html('Note: See the methodology appendix for a description of how the performance score is calculated.')
  //enter()
  this.selectAll('.point')
      .data(params.data)
      .enter()
        .append('circle')
        .classed('point', true)
        .attr('r', 4)
        .style('fill', function(d,i){
          return linearColorScale(i)
        })
  //update
  this.selectAll('.point')
      .attr('cx', function(d){
        return x(d.rank);
      })
      .attr('cy', function(d){
        return y(d.value)
      })
  //exit()
  this.selectAll('.point')
      .data(params.data)
      .exit()
      .remove();
}

plot.call(chart, {
  data: data,
  axis: {
    // x: xAxis,
    y: yAxis
  }
});



