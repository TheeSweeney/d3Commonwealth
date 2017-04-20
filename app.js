var data = [
  {country: "UK", value: 1.367418713525976, rank: 1 },
  {country: "AUS", value: 1.357430028143254, rank: 2 },
  {country: "NETH", value: 1.251787757074009, rank: 3 },
  {country: "NZ", value: 1.151665180612727, rank: 4 },
  {country: "NOR", value: 1.13376085186227, rank: 5 },
  {country: "SWIZ", value: 1.0675352522899197, rank: 6 },
  {country: "SWE", value: 1.0674114551491452, rank: 7 },
  {country: "GER", value: 1.064104826992644, rank: 8 },
  {country: "CAN", value: 1-0.247553882107696, rank: 9 },
  {country: "FRA", value: 1-0.41705654741814, rank: 10 },
  {country: "USA", value: 1-0.706030660985181, rank: 11 }
];
var qualityData = [
  {country: 'SWE', value: 1-0.82, rank: 11},
  {country: 'NOR', value: 1-0.6, rank:  10},
  {country: 'FRA', value: 1-0.42, rank: 9},
  {country: 'GER', value: 1-0.12, rank: 8},
  {country: 'SWIZ', value:  1-0.03, rank: 7},
  {country: 'CAN', value: 1.15, rank:  6},
  {country: 'US', value:  1.23, rank:  5},
  {country: 'NETH', value:  1.29, rank:  4},
  {country: 'NZ', value:  1.36, rank:  3},
  {country: 'AUS', value: 1.38, rank:  2},
  {country: 'UK', value:  1.56, rank:  1}
]

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
          .range([10, width]);
var xPoints = d3.scale.linear()
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
var xAxis = d3.svg.axis()
              .scale(x)
              .orient('bottom')
              .ticks(d3.time.days, 7)
              .tickFormat(d3.time.format('%m/%d'))
var yAxis = d3.svg.axis()
              .scale(y)
              .orient('left')
              .ticks(0)
//sorting buttons
var controls = d3.select('body')
                .append('div')
                .attr('id', 'controls');
var sort_overAll_btn = controls.append('button')
                .html('Overall Scores')
                .attr('state', 'quality')
var sort_quality_btn = controls.append('button')
                .html('Quality Scores')
                .attr('state', 'quality')
function drawAxesAndLabels(params){
  if(params.initialize){
    this.append('g')//y axis
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
        .attr('fill', 'black')
        .attr('stroke', 'none')
        .classed('alignLeft', true)
        .html('Note: See the methodology appendix for a description of how the performance score is calculated.')
    

  }
  if(params.average){
  console.log(params.average)
    this.append('g')// average
        .classed('x axis', true)
        .attr('transform', 'translate(0,'+ 95 +')')
        .attr('id', 'averageLine')
        .attr('fill', 'none')
        .attr('stroke', '#ccc')
        .call(params.axis.x)

    this.select('.x.axis')// average label
        .append('text')
        .attr('id', 'averageText')
        .attr('x',8)
        .attr('y',-10)
        .attr('stroke', 'none')
        .attr('fill', '#A9A9A9')
        .text('Eleven Country Average')
  }else{
    this.select('.x.axis')
      .remove()
    this.select('#averageLine')
      .remove()
  }
}
function plot(params){
  drawAxesAndLabels.call(this, params)
  //TODO: factor out text for labels, and note so plot can but used on different charts
  
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

  this.selectAll('.pointLabel')
      .data(params.data)
      .enter()
        .append('text')
        .classed('pointLabel', true)
        

  //update
  this.selectAll('.point')
      .attr('cx', function(d){
        return xPoints(d.rank);
      })
      .attr('cy', function(d){
        return y(d.value)
      })
  this.selectAll('.pointLabel')
    .attr('x', function(d, i){
      return xPoints(d.rank) - d.country.length*5;
    })
    .attr('y', function(d, i){
      return y(d.value) - 7;
    })
    .attr('fill', 'black')
    .text(function(d, i){
      return d.country
    })


  //exit()
  this.selectAll('.point')
      .data(params.data)
      .exit()
      .remove();
  this.selectAll('.pointLabel')
      .data(params.data)
      .exit()
      .remove();
  this.selectAll('#note')
      .data(params.data)
      .exit()
      .remove();

}

sort_overAll_btn.on('click', function(d){
  plot.call(chart, {
    data: data,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: true
  })
})

sort_quality_btn.on('click', function(d){
  plot.call(chart, {
    data: qualityData,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: false
  })
})

plot.call(chart, {
  data: data,
  axis: {
    x: xAxis,
    y: yAxis
  },
  initialize: true,
  average: true
});



