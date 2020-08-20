export const genderDonut = () => {

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
const radius = Math.min(width, height) / 2;
const donutWidth = 75;
const color = d3.scaleOrdinal(d3.schemeCategory10);

d3.select("body")
    .append("svg")
    .attr("id", "donut-svg")

const svg = d3.select('#donut-svg')
    // .append(svg)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + "," + (height / 2) + ')')

const arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

const pie = d3.pie()
    .value(function (d) {
        return d.count
    })
    .sort(null);

const donutTip = d3.select("body").append("div")
    .attr("class", "donut-tip")
    .style("opactiy", 0)

const path = svg.selectAll('path')
    .data(pie(total))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function (d, i) {
        return color(d.data.title)
    })
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    .attr('transform', 'translate(0,0)')
    .transition()
    .ease(d3.easeLinear)
    .duration(1700)
    .attrTween("d", tweenPie)

svg.append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", -25)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text("Character gender (All Publishers)")

function tweenPie(b) {
    const i = d3.interpolate({ startAngle: 1.1 * Math.PI, endAngle: 1.1 * Math.PI }, b);
    return function (t) { return arc(i(t)); };
}

function onMouseOver(d, i) {
    d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.85')
    donutTip.transition()
        .duration(50)
        .style("opacity", 1)
    let num = (Math.round((d.data.count / 140000) * 100)).toString() + "%"
    donutTip.html(num)
        .style("left", (d3.event.pageX + 10) + "px")
        .style("top", (d3.event.pageY - 15) + "px")
}

function onMouseOut(d, i) {
    d3.select(this).transition()
        .duration('50')
        .attr('opacity', 1)
    donutTip.transition()
        .duration('50')
        .style('opacity', 0)
}

const legendRectSize = 10;
const legendSpacing = 11;

const legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'circle-legend')
    .attr('transform', function (d, i) {
        let height = legendRectSize + legendSpacing;
        let offset = height * color.domain().length / 2;
        let horizontal = -2 * legendRectSize - 13;
        let vertical = i * height - offset;
        return 'translate(' + horizontal + ',' + vertical + ')';
    })

legend.append('circle')
    .style('fill', color)
    .style('stroke', color)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', '.5rem')

legend.append('text')
    .attr('x', legendRectSize + legendSpacing + 25)
    .attr('y', legendRectSize - legendSpacing + 3)
    .text(function (d) {
        return d;
})

}