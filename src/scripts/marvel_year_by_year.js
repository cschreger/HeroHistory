export const yearBreakdown = () => {

d3.select("body")
  .append("svg")
  .attr("id", "bar-chart")
  .attr("width", 1200)
  .attr("height", 700)

const svg2 = d3.select("#bar-chart"),
  margin = 150,
  width2 = svg2.attr("width") - margin,
  height2 = svg2.attr("height") - margin;


const xScale = d3.scaleBand().range([0, width2]).padding(0.6),
  yScale = d3.scaleLinear().range([height2, 0]);

const g = svg2.append("g")
  .attr("transform", "translate(" + 100 + "," + 100 + ")");

d3.csv("./data/yearData.csv").then(function (data) {
  xScale.domain(data.map(function (d) { return d.year; }));
  yScale.domain([0, 1300]);

  g.append("g")
    .attr("transform", "translate(0," + height2 + ")")
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("y", height2 - 200)
    .attr("x", width2 - 100)
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Year");

  g.append("g")
    .call(d3.axisLeft(yScale)
      .tickFormat(function (d) {
        return d;
      }).ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-5.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("(Unique) issues released");

  svg2.append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text("# of releases (Marvel)")

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    .attr("x", function (d) { return xScale(d.year); })
    .attr("y", function (d) { return yScale(0); })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) { return height2 - yScale(0); });

  svg2.selectAll("rect")
    .transition()
    .duration(1200)
    .attr("y", function (d) { return yScale(d.issues) })
    .attr("height", function (d) { return height2 - yScale(d.issues) })
    .delay(function (d, i) { return (i * 13) })
});

function onMouseOver(d, i) {
  d3.select(this).attr('class', 'highlight');
  d3.select(this)
    .transition()
    .duration(400)
    .attr('width', xScale.bandwidth() + 2)
    .attr("y", function (d) { return yScale(d.issues) - 10; })
    .attr("height", function (d) { return height2 - yScale(d.issues) + 10; });

  g.append("text")
    .attr('class', 'val')
    .attr('x', function () {
      return xScale(d.year) + 10;
    })
    .attr('y', function () {
      return yScale(d.issues) - 20;
    })
    .text(function () {
      return [d.issues];
    });
}

function onMouseOut(d, i) {
  d3.select(this).attr('class', 'bar');
  d3.select(this)
    .transition()
    .duration(400)
    .attr('width', xScale.bandwidth())
    .attr("y", function (d) { return yScale(d.issues); })
    .attr("height", function (d) { return height2 - yScale(d.issues); });

  d3.selectAll('.val')
    .remove()
}
}
