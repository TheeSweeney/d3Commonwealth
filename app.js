//BIG TODO - node.js refactor
$(document).ready(function(){

var elevenCountries = ' Score in Eleven Countries'

var dataSet =  {
  dataOverall:{
    data: [//TODO Rename this
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
    ],
    title: 'Health System Performance' + elevenCountries
  },
  qualityData:{
    data: [
      {country: 'UK', value:  1.56, rank:  1},
      {country: 'AUS', value: 1.38, rank:  2},
      {country: 'NZ', value:  1.36, rank:  3},
      {country: 'NETH', value:  1.29, rank:  4},
      {country: 'US', value:  1.23, rank:  5},
      {country: 'CAN', value: 1.15, rank:  6},
      {country: 'SWIZ', value:  1-0.03, rank: 7},
      {country: 'GER', value: 1-0.12, rank: 8},
      {country: 'FRA', value: 1-0.42, rank: 9},
      {country: 'NOR', value: 1-0.6, rank:  10},
      {country: 'SWE', value: 1-0.82, rank: 11}
    ],
    title: 'Quality of Healthcare' + elevenCountries
  },
  accessData:{
    data: [
      {country: 'NETH', value:  1.7, rank: 1},
      {country: 'GER', value: 1.58, rank:  2},
      {country: 'UK', value:  1.39, rank:  3},
      {country: 'AUS', value: 1.19, rank:  4},
      {country: 'NZ', value:  1.14, rank:  5},
      {country: 'SWE', value: 1.06, rank:  6},
      {country: 'NOR', value: 1.02, rank:  7},
      {country: 'SWIZ', value:  1-0.11, rank: 8},
      {country: 'FRA', value: 1-0.15, rank: 9},
      {country: 'CAN', value: 1-0.77, rank: 10},
      {country: 'US', value:  1-1.07, rank: 11}
    ],
    title: 'Access to Healthcare' + elevenCountries
  },
  adminData:{
    data: [
      {country: 'AUS', value: 2.74, rank:  1},
      {country: 'NOR', value: 2.6, rank: 2},
      {country: 'UK', value:  2.59, rank:  3},
      {country: 'NZ', value:  2.54, rank:  4},
      {country: 'SWE', value: 2.26, rank:  5},
      {country: 'GER', value: 2.08, rank:  6},
      {country: 'CAN', value: 2.08, rank:  7},
      {country: 'SWIZ', value:  2-0.12, rank: 8},
      {country: 'NETH', value:  2-0.15, rank: 9},
      {country: 'US', value:  2-1.21, rank: 10},
      {country: 'FRA', value: 2-1.41, rank: 11}
    ],
    title: 'Administrative Efficiency' + elevenCountries
  },
  equityData:{
    data: [
      {country: 'SWE', value: 1.55, rank:  1},
      {country: 'NZ', value:  1.39, rank:  2},
      {country: 'SWIZ', value:  1.32, rank:  3},
      {country: 'NETH', value:  1.06, rank:  4},
      {country: 'GER', value: 1.01, rank:  5},
      {country: 'NOR', value: 1-0.09, rank: 6},
      {country: 'AUS', value: 1-0.14, rank: 7},
      {country: 'CAN', value: 1-0.39, rank: 8},
      {country: 'FRA', value: 1-0.53, rank: 9},
      {country: 'UK', value:  1-0.63, rank: 10},
      {country: 'US', value:  1-0.76, rank: 11}
    ],
    title: 'Equity' + elevenCountries
  },
  outcomesData:{
    data: [
      {country: 'AUS', value: 1.62, rank:  1},
      {country: 'SWE', value: 1.55, rank:  2},
      {country: 'NZ', value:  1.39, rank:  3},
      {country: 'SWIZ', value:  1.32, rank:  4},
      {country: 'FRA', value: 1.23, rank:  5},
      {country: 'NETH', value:  1.06, rank:  6},
      {country: 'NOR', value: 1-0.09, rank: 7},
      {country: 'GER', value: 1-0.18, rank: 8},
      {country: 'CAN', value: 1-0.39, rank: 9},
      {country: 'UK', value:  1-0.63, rank: 10},
      {country: 'US', value:  1-0.76, rank: 11}
    ],
    title: 'Healthcare Outcomes' + elevenCountries
  },
  spendingData:{
    data: [
      {country: 'NOR', value: 4038.00, rank:  1},
      {country: 'UK', value:  4094.00, rank:  2},
      {country: 'AUS', value: 4207.00, rank:  3},
      {country: 'FRA', value: 4620.00, rank:  4},
      {country: 'CAN', value: 4724.00, rank:  5},
      {country: 'GER', value: 5119.00, rank:  6},
      {country: 'NETH', value:  5277.00, rank:  7},
      {country: 'SWE', value: 5306.00, rank:  8},
      {country: 'NZ', value:  6432.00, rank:  9},
      {country: 'SWIZ', value:  6787.00, rank:  10},
      {country: 'US', value:  9364.00, rank:  11}
    ],
    title: 'Spending per Capita'
  }
}
var currentDataSet = dataSet.dataOverall.data;
var currentTitle = dataSet.dataOverall.title
var avgShow = true;
var w = window.outerWidth - 6;
var h = .5625 * w;
var margin = {
  top: 58,
  bottom: 100,
  left: 80,
  right: 40
};
var categories = [1,2,3,4,5]
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var controls = d3.select('#container')
                .insert('div')
                .attr('id', 'controls');
var svg = d3.select("#container").insert("svg")
      .attr("id", "chart")
      .attr("width", w)
      .attr("height", h + 50);
var chart = svg.append("g")
      .classed("display", true)
      .attr("transform", "translate(" + margin.left + "," + (margin.top + 50) + ")");
var x = d3.scale.linear()
          .domain(d3.extent(dataSet.dataOverall.data, function(d){
            return d.rank;
          }))
          .range([10, width]);
var xPoints = d3.scale.linear()
          .domain(d3.extent(dataSet.dataOverall.data, function(d){
            return d.rank;
          }))
          .range([50, width]);
var y = d3.scale.linear()
          .domain([0, d3.max(dataSet.dataOverall.data, function(d){
            return d.value + .1;
          })])
          .range([height, 0])
var linearColorScale = d3.scale.linear()
                        .domain([0, dataSet.dataOverall.data.length])
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
//TODO make button creation dryer
var sort_overAll_btn = controls.append('button')
                .html('Overall')
                .classed('btn', true)
var sort_quality_btn = controls.append('button')
                .html('Quality')
                .classed('btn', true)
var sort_access_btn = controls.append('button')
                .html('Access')
                .classed('btn', true)
var sort_admin_btn = controls.append('button')
                .html('Admin. Efficiency')
                .classed('btn', true)
var sort_equity_btn = controls.append('button')
                .html('Equity')
                .classed('btn', true)
var sort_outcomes_btn = controls.append('button')
                .html('Health Outcomes')
                .classed('btn', true)
var sort_spending_btn = controls.append('button')
                .html('Spending per Capita')
                .classed('btn', true)
function drawAxesAndLabels(params){
  var usingStandardTitle = true;
  
  var axesLabels = {
    top: 'Higher Performing',
    bottom: 'Lower Performing'
  }

  function yAxesAndLabels() {
    this.append('g')//y axis
        .classed('y axis grad', true)
        .attr('transform', 'translate(0,0)')
        .call(params.axis.y)

    this.select('.y.axis')//Top Label
        .append('text')
        .style('font-size', '18px')
        .attr('x',-10)
        .attr('y',-15)
        .text(axesLabels.top)

    this.select('.y.axis')//Bottom Label
        .append('text')
        .style('font-size', '18px')
        .attr('x',-10)
        .attr('y', height + 25)
        .text(axesLabels.bottom)

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

  if(currentDataSet == dataSet.spendingData.data){
    axesLabels.top = 'Higher Spending';
    axesLabels.bottom = 'Lower Spending';
    this.select('.y.axis')
        .remove()

    yAxesAndLabels.call(this)

    usingStandardTitle = false;
  }

  if(usingStandardTitle && !params.initialize){
    this.select('.y.axis')
        .remove()
    yAxesAndLabels.call(this)

    usingStandardTitle = true;
  }

  if(params.initialize){
    svg.insert('text')
      .attr('y', 40)
      .classed('chartTitle', true)
      .html(params.title)

    yAxesAndLabels.call(this)
    
  }

  if(!params.initialize){
    d3.select('.chartTitle')
      .remove()
    
    svg.insert('text')
      .attr('y', 40)
      .classed('chartTitle', true)
      .html(params.title)
  }
  if(params.average){
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
  

  //dynamically adjust y axis onClick/resize
  var yUpdate = d3.scale.linear()
          .domain([0, d3.max(params.data, function(d){
            return d.value + .1;
          })])
          .range([height, 0])

  drawAxesAndLabels.call(this, params)
  //TODO: factor out text for labels, and note so plot() can but used on different charts
  
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
      .transition()
      .duration(800)
      .attr('cx', function(d){
        return xPoints(d.rank);
      })
      .attr('cy', function(d){
        return yUpdate(d.value)
      })
  this.selectAll('.pointLabel')
    .transition()
    .duration(800)
    .attr('x', function(d, i){
      return xPoints(d.rank) - d.country.length*5;
    })
    .attr('y', function(d, i){
      return yUpdate(d.value) - 7;
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
  avgShow = true;//TODO there is a more efficient way to organize these variables
  currentDataSet = dataSet.dataOverall.data;
  currentTitle = dataSet.dataOverall.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})
//TODO function factory
sort_quality_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.qualityData.data;
  currentTitle = dataSet.qualityData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})

sort_access_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.accessData.data;
  currentTitle = dataSet.accessData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})

sort_admin_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.adminData.data;
  currentTitle = dataSet.adminData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})

sort_equity_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.equityData.data;
  currentTitle = dataSet.equityData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})

sort_outcomes_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.outcomesData.data;
  currentTitle = dataSet.outcomesData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})

sort_spending_btn.on('click', function(d){
  avgShow = false;
  currentDataSet = dataSet.spendingData.data;
  currentTitle = dataSet.spendingData.title;
  plot.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  average: avgShow
  })
})


plot.call(chart, {
  data: currentDataSet,
  title: currentTitle,
  axis: {
    x: xAxis,
    y: yAxis
  },
  initialize: true,
  average: avgShow
});


})
