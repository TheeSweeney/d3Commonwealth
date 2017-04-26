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
      {country: 'NETH', value:  1.29, rank:  4},
      {country: 'NZ', value:  1.36, rank:  3},
      {country: 'NOR', value: 1-0.6, rank:  10},
      {country: 'SWIZ', value:  1-0.03, rank: 7},
      {country: 'SWE', value: 1-0.82, rank: 11},
      {country: 'GER', value: 1-0.12, rank: 8},
      {country: 'CAN', value: 1.15, rank:  6},
      {country: 'FRA', value: 1-0.42, rank: 9},
      {country: 'USA', value:  1.23, rank:  5}
    ],
    title: 'Quality of Healthcare' + elevenCountries
  },
  accessData:{
    data: [
      {country: 'UK', value:  1.39, rank:  3},
      {country: 'AUS', value: 1.19, rank:  4},
      {country: 'NETH', value:  1.7, rank: 1},
      {country: 'NZ', value:  1.14, rank:  5},
      {country: 'NOR', value: 1.02, rank:  7},
      {country: 'SWIZ', value:  1-0.11, rank: 8},
      {country: 'SWE', value: 1.06, rank:  6},
      {country: 'GER', value: 1.58, rank:  2},
      {country: 'CAN', value: 1-0.77, rank: 10},
      {country: 'FRA', value: 1-0.15, rank: 9},
      {country: 'USA', value:  1-1.07, rank: 11}
    ],
    title: 'Access to Healthcare' + elevenCountries
  },
  adminData:{
    data: [
      {country: 'UK', value:  2.59, rank:  3},
      {country: 'AUS', value: 2.74, rank:  1},
      {country: 'NETH', value:  2-0.15, rank: 9},
      {country: 'NZ', value:  2.54, rank:  4},
      {country: 'NOR', value: 2.6, rank: 2},
      {country: 'SWIZ', value:  2-0.12, rank: 8},
      {country: 'SWE', value: 2.26, rank:  5},
      {country: 'GER', value: 2.08, rank:  6},
      {country: 'CAN', value: 2.08, rank:  7},
      {country: 'USA', value:  2-1.21, rank: 10},
      {country: 'FRA', value: 2-1.41, rank: 11}
    ],
    title: 'Administrative Efficiency' + elevenCountries
  },
  equityData:{
    data: [
      {country: 'UK', value:  1-0.63, rank: 10},
      {country: 'AUS', value: 1-0.14, rank: 7},
      {country: 'NETH', value:  1.06, rank:  4},
      {country: 'NZ', value:  1.39, rank:  2},
      {country: 'NOR', value: 1-0.09, rank: 6},
      {country: 'SWIZ', value:  1.32, rank:  3},
      {country: 'SWE', value: 1.55, rank:  1},
      {country: 'GER', value: 1.01, rank:  5},
      {country: 'CAN', value: 1-0.39, rank: 8},
      {country: 'FRA', value: 1-0.53, rank: 9},
      {country: 'USA', value:  1-0.76, rank: 11}
    ],
    title: 'Equity' + elevenCountries
  },
  outcomesData:{
    data: [
      {country: 'UK', value:  1-0.63, rank: 10},
      {country: 'AUS', value: 1.62, rank:  1},
      {country: 'NETH', value:  1.06, rank:  6},
      {country: 'NZ', value:  1.39, rank:  3},
      {country: 'NOR', value: 1-0.09, rank: 7},
      {country: 'SWIZ', value:  1.32, rank:  4},
      {country: 'SWE', value: 1.55, rank:  2},
      {country: 'GER', value: 1-0.18, rank: 8},
      {country: 'CAN', value: 1-0.39, rank: 9},
      {country: 'FRA', value: 1.23, rank:  5},
      {country: 'USA', value:  1-0.76, rank: 11}
    ],
    title: 'Healthcare Outcomes' + elevenCountries
  },
  spendingData:{
    data: [
      {country: 'UK', value:  4094.00, rank:  2},
      {country: 'AUS', value: 4207.00, rank:  3},
      {country: 'NETH', value:  5277.00, rank:  7},
      {country: 'NZ', value:  6432.00, rank:  9},
      {country: 'NOR', value: 4038.00, rank:  1},
      {country: 'SWIZ', value:  6787.00, rank:  10},
      {country: 'SWE', value: 5306.00, rank:  8},
      {country: 'GER', value: 5119.00, rank:  6},
      {country: 'CAN', value: 4724.00, rank:  5},
      {country: 'FRA', value: 4620.00, rank:  4},
      {country: 'USA', value:  9364.00, rank:  11}
    ],
    title: 'Spending per Capita'
  }
}
var currentDataSet = dataSet.dataOverall.data;
var currentTitle = dataSet.dataOverall.title
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
              .ticks(0)
              .tickSize(0)

var yAxis = d3.svg.axis()
              .scale(y)
              .orient('left')
              .ticks(0)

var line = d3.svg.line()
      .x(function(d){
        return x(d.date);
      })
      .y(function(d){
        return y(d.value);
      });
//color gradient for y axis
var defs = svg.append('defs')

var gradient = defs.append('linearGradient')
                  .attr('id', 'svgGradient')
                  .attr('x1', '0%')
                  .attr('x2', '0%')
                  .attr('y1', '0%')
                  .attr('y2', '100%')
gradient.append('stop')
        .attr('class', 'start')
        .attr('offset', '0%')
        .attr('stop-color', '#4ABDBC')
        .attr('stop-opacity', 1);

gradient.append('stop')
        .attr('class', 'end')
        .attr('offset', '100%')
        .attr('stop-color', '#044C7F')
        .attr('stop-opacity', 1);
//sorting buttons
//TODO make button creation DRYer
var sort_overAll_btn = controls.append('button')
                .html('Overall')
                .attr('id', 'overAllBtn')
                .classed('btn', true)
var sort_quality_btn = controls.append('button')
                .html('Quality')
                .attr('id', 'qualityBtn')
                .classed('btn', true)
var sort_access_btn = controls.append('button')
                .html('Access')
                .attr('id', 'accessBtn')
                .classed('btn', true)
var sort_admin_btn = controls.append('button')
                .html('Admin. Efficiency')
                .attr('id', 'adminBtn')
                .classed('btn', true)
var sort_equity_btn = controls.append('button')
                .html('Equity')
                .attr('id', 'equityBtn')
                .classed('btn', true)
var sort_outcomes_btn = controls.append('button')
                .html('Health Outcomes')
                .attr('id', 'outcomesBtn')
                .classed('btn', true)
var sort_spending_btn = controls.append('button')
                .html('Spending per Capita')
                .attr('id', 'spendingBtn')
                .classed('btn', true)
function drawAxesAndLabels(params){
  var usingStandardAxesTitle = true;
  
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
        .style('fill', '#4ABDBC')
        .attr('x',-10)
        .attr('y',-15)
        .text(axesLabels.top)

    this.select('.y.axis')//Bottom Label
        .append('text')
        .style('font-size', '18px')
        .style('fill', '#044C7F')
        .attr('x',-10)
        .attr('y', height + 25)
        .text(axesLabels.bottom)    
    this.select('.domain')
        .attr("fill", "url(#svgGradient)")

    this.select('g')//top Triangle
        .append('path')
        .attr('d', function(d){
          return 'M 24,36 40,36 32,22 z';
        })
        .attr('transform', 'translate(-35,-35)')

    this.select('g')//top Triangle
        .append('path')
        .attr('d', function(d){
          return 'M 24,28 40,28 32,40 z';
        })
        .attr('transform', 'translate(-35,' + (height - 30) + ')')
        .style('fill', '#044C7F')
        
        


  }

  if(currentDataSet == dataSet.spendingData.data){//change axes title for spending data
    axesLabels.top = 'Higher Spending';
    axesLabels.bottom = 'Lower Spending';
    this.select('.y.axis')
        .remove()

    yAxesAndLabels.call(this)

    usingStandardAxesTitle = false;
  }

  if(usingStandardAxesTitle && !params.initialize){//replot y axis on resize
    this.select('.y.axis')
        .remove()
    yAxesAndLabels.call(this)

    usingStandardAxesTitle = true;
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

  //calc average
  var average = (params.data.reduce(function(acc, val){
      return acc + val.value
    }, 0))/params.data.length

  var avgData = [
    {value: average, date: 1, label: "Eleven-country Average"},
    {value: average, date: 11}
  ]

  //enter
  this.selectAll('.avgLine')
      .data([avgData])
      .enter()
          .append('path')
          .classed('avgLine', true)

  this.selectAll('.avgLabel')
  .data(avgData)
  .enter()
    .append('text')
    .classed('avgLabel', true)

  //update
  this.selectAll('.avgLine')
      .transition()
      .duration(800)
      .attr('d', function(d){
        return line(d);
      })
      
  this.selectAll('.avgLabel')
      .transition()
      .duration(800)
      .attr('x', function(d, i){
        return x(d.date)
      })
      .attr('y', function(d, i){
        return y(d.value) - 8
      })
      .attr('fill', 'black')
      .text(function(d, i){
        return d.label
      })

  //exit
  this.selectAll('.avgLine')
      .data([avgData])
      .exit()
      .remove();

    this.selectAll('.avgLabel')
      .data(avgData)
      .exit()
      .remove()


}
function plot(params){


  //dynamically adjust y axis onClick/resize
  var yUpdate = d3.scale.linear()
          .domain([0, d3.max(params.data, function(d){
            return d.value + .1;
          })])
          .range([params.height, 0])
  //dynamically adjust x axis on resize
  var xPointsUpdate = d3.scale.linear()
                        .domain(d3.extent(params.data, function(d){
                          return d.rank;
                        }))
                        .range([50, params.width])

  drawAxesAndLabels.call(this, params)

  d3.select('#note')
    .remove()
  d3.select('.display')//Note
        .append('text')
        .attr('id', 'note')
        .attr('x',0)
        .attr('y', params.height + 75)
        .classed('alignLeft', true)
        .html('Note: See the methodology appendix for a description of how the performance score is calculated.')
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
      .style('fill', function(d, i){
        return linearColorScale(d.rank)
      })
      .attr('cx', function(d){
        return xPointsUpdate(d.rank);
      })
      .attr('cy', function(d){
        return yUpdate(d.value)
      })
  this.selectAll('.pointLabel')
    .transition()
    .duration(800)
    .attr('x', function(d, i){
      return xPointsUpdate(d.rank) - d.country.length*5;
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

function resize(params){
  w = window.outerWidth - 6;
  h = .5625 * w;

  height = params.height = h - margin.top - margin.bottom;
  width = params.width = w - margin.left - margin.right;
  
  x = d3.scale.linear()
          .domain(d3.extent(params.data, function(d){
            return d.rank;
          }))
          .range([10, params.width]);

  y = d3.scale.linear()
          .domain([0, d3.max(params.data, function(d){
            return d.value + .1;
          })])
          .range([params.height, 0])


  params.axis.x = d3.svg.axis()
                  .scale(x)
                  .orient('bottom')
                  .ticks(d3.time.days, 7)
                  .tickFormat(d3.time.format('%m/%d'))
  params.axis.y = d3.svg.axis()
              .scale(y)
              .orient('left')
              .ticks(0)

  x.range[10, width] 
 
 //change chart size
  d3.select(this.node().parentNode)
        .attr('height', h + 50)
        .attr('width', w);

  this.select('g')
      .remove()

  plot.call(this, params)
}

function selectBtn(btnID){
  $('.selectedBtn').removeClass('selectedBtn')
  $('#'+btnID).addClass('selectedBtn')
}


sort_overAll_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.dataOverall.data;
  currentTitle = dataSet.dataOverall.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})
//TODO function factory
sort_quality_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.qualityData.data;
  currentTitle = dataSet.qualityData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})

sort_access_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.accessData.data;
  currentTitle = dataSet.accessData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})

sort_admin_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.adminData.data;
  currentTitle = dataSet.adminData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})

sort_equity_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.equityData.data;
  currentTitle = dataSet.equityData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})

sort_outcomes_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.outcomesData.data;
  currentTitle = dataSet.outcomesData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
  })
})

sort_spending_btn.on('click', function(d){
  
  selectBtn($(this)[0].id)
  currentDataSet = dataSet.spendingData.data;
  currentTitle = dataSet.spendingData.title;
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
  initialize: false,
  height: height,
  width: width
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
  height: height,
  width: width
});


//responsive bahavior
window.addEventListener('resize', function(e){
  resize.call(chart, {
    data: currentDataSet,
    title: currentTitle,
    axis: {
      x: xAxis,
      y: yAxis
    },
    initialize: false,
  });
  }, true)

})
