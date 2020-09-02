export const marketShare = () => {

d3.csv('../data/market_share.csv').then(d => graph(d))


function graph(data) {

    const keys = data.columns.slice(1);
    const margin = {top:20, right: 40, bottom: 20, left: 40}
    const width = 900 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom
    const xScale = d3.scaleLinear().range([0,width])
    const yScale = d3.scaleLinear().range([height, 0])
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    
    const line = d3.line()
    .x(function(d) {
        return xScale(d.year)
    })
    .y(function(d) {
        return yScale(d.share)
    })
    .curve(d3.curveCardinal)
    
    const svg = d3.select("#chart-container")
        .append("svg")
        .attr("id", "line-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    color.domain(d3.keys(data[0]).filter(function(key) {
        return key !== "year"
    }))

    const companies = color.domain().map(function(name) {
        return {
            name: name,
            values: data.map(function(d) {
                return {
                    year: d.year,
                    share: +d[name]
                }
            })
        }
    })

    xScale.domain(d3.extent(data, function(d) {
        return d.year
    }))

    yScale.domain([
        d3.min(companies, function(c) {
            return d3.min(c.values, function(v) {
                return v.share
            })
        }),
        // d3.max(companies, function(c) {
        //     return d3.max(c.values, function(v) {
        //         return v.share
        //     })
        // })
        50
    ])

    const legend = svg.selectAll('g')
        .data(companies)
        .enter()
        .append('g')
        .attr('class', 'legend')

    legend.append('rect')
        .attr('x', width - 20)
        .attr('y', function(d,i) {
            return i * 20
        })
        .attr('width', 10)
        .attr('height', 10)
        .style('fill', function(d) {
            return color(d.name)
        })
    
    legend.append('text')
        .attr('x', width - 25)
        .attr('y', function(d,i) {
            return (i * 20) + 9;
        })
        .text(function(d) {
            return d.name
        })
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 8)
        .attr("dy", ".7em")
        .style("text-anchor", "end")
        .text("Market Share (%)")

    const company = svg.selectAll(".company")
        .data(companies)
        .enter()
        .append("g")
        .attr("class", "company")

    company.append("path")
        .attr("class", "line")
        .attr("d", function(d) {
            return line(d.values)
        })
        .style("stroke", function(d) {
            return color(d.name)
        })

    company.append("text")
    .datum(function(d) {
        return {
            name: d.name,
            value: d.values[d.values.length - 1]
        }
    })
    .attr("transform", function(d) {
        return "translate(" + xScale(d.value.year) + "," + yScale(d.value.share) + ")"
    })
    .attr("x", 36)
    .attr("dy", ".85em")
    .text(function(d) {
        return d.name
    })
    
    // Credit to larsenmtl(bl.ocks.org/larsenmtl)
    const mouseG = svg.append("g")
        .attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
        .attr("class", "mouse-line")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        .style("opacity", "0");

    const lines = document.getElementsByClassName('line');

    const mousePerLine = mouseG.selectAll('.mouse-per-line')
        .data(companies)
        .enter()
        .append("g")
        .attr("class", "mouse-per-line");

    mousePerLine.append("circle")
        .attr("r", 7)
        .style("stroke", function (d) {
            return color(d.name);
        })
        .style("fill", "none")
        .style("stroke-width", "1px")
        .style("opacity", "0");

    mousePerLine.append("text")
        .attr("transform", "translate(10,3)");

    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
        .attr('width', width) // can't catch mouse events on a g element
        .attr('height', height)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mouseout', function () { // on mouse out hide line, circles and text
            d3.select(".mouse-line")
                .style("opacity", "0");
            d3.selectAll(".mouse-per-line circle")
                .style("opacity", "0");
            d3.selectAll(".mouse-per-line text")
                .style("opacity", "0");
        })
        .on('mouseover', function () { // on mouse in show line, circles and text
            d3.select(".mouse-line")
                .style("opacity", "1");
            d3.selectAll(".mouse-per-line circle")
                .style("opacity", "1");
            d3.selectAll(".mouse-per-line text")
                .style("opacity", "1");
        })
        .on('mousemove', function () { // mouse moving over canvas
            const mouse = d3.mouse(this);
            d3.select(".mouse-line")
                .attr("d", function () {
                    let d = "M" + mouse[0] + "," + height;
                    d += " " + mouse[0] + "," + 0;
                    return d;
                });

            d3.selectAll(".mouse-per-line")
                .attr("transform", function (d, i) {
                    const xYear = xScale.invert(mouse[0]),
                        bisect = d3.bisector(function (d) { return d.year; }).right;
                    const idx = bisect(d.values, xYear);

                    let beginning = 0
                    let end = lines[i].getTotalLength()
                    let target = null;

                    while (true) {
                        let target = Math.floor((beginning + end) / 2);
                        let pos = lines[i].getPointAtLength(target);
                        if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                            break;
                        }
                        if (pos.x > mouse[0]) end = target;
                        else if (pos.x < mouse[0]) beginning = target;
                        else break; //position found
                    }

                    d3.select(this).select('text')
                        .text(yScale.invert(pos.y).toFixed(2));
                        return "translate(" + mouse[0] + "," + lines[i].getPointAtLength(target).y + ")";
                });
        });

}

}

