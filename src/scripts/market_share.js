export const marketShare = () => {

d3.csv('../data/market_share.csv').then(d => graph(d))

debugger
function graph(data) {

    const keys = data.columns.slice(1);
    const margin = {top:20, right: 40, bottom: 20, left: 40}
    const width = 900 - margin.left - margin.right
    const height = 600 - margin.top - margin.bottom

    // data.forEach(function(d) {
    //     return d
    // })
    
    const xScale = d3.scaleTime().range([0,width])
    const yScale = d3.scaleLinear().range([height, 0])
    const zScale = d3.scaleOrdinal(d3.schemeCategory10);
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    
    const line = d3.line()
    .curve(d3.curveCardinal)
    .x(function(d) {
        return xScale(d.year)
    })
    .y(function(d) {
        return yScale(d.share)
    })
    
    const svg = d3.select("body")
        .append("svg")
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
        d3.max(companies, function(c) {
            return d3.max(c.values, function(v) {
                return v.share
            })
        })
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
        .attr('x', width - 8)
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
        .attr("y", 6)
        .attr("dy", ".7em")
        .style("text-anchor", "end")
        .text("Market Share (%)")

    const company = svg.selectAll(".company")
        .data(companies)
        .enter()
        .append("g")
        .attr("class", "company")

    debugger
    company.append("path")
        .attr("class", "line")
        .attr("d", function(d) {
            return line(d.values)
        })
        .style("stroke", function(d) {
            return color(d.name)
        })

    debugger
    company.append("text")
        .datum(function(d) {
            return {
                name: d.name,
                value: d.values[d.values.length - 1]
            }
        })
        .attr("transform", function(d) {
            return "translate(" + xScale(d.year) + "," + yScale(d.value.share) + ")"
        })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function(d) {
            return d.name
        })

}

}
