const d3 = require('d3')

const total = [
    {
    title: "Male",
    count: 85023
    },
    {
    title: "Female",
    count: 37762
    },
    {
    title: "Other",
    count: 16626
    }]

const height = 360;
const width = 360;
const radius = Math.min(width, height)/2;
const donutWidth = 75;
const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3.select('#donut')
    .append(svg)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width/2) + "," + (height/2) + ')')

const arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

const pie = d3.pie()
    .value(function(d) {
        return d.count
    })
    .sort(null);

const path = svg.selectAll('path')
    .data(pie(total))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d,i) {
        return color(d.data.title)
    })
    .attr('transform', 'translate(0,0)')