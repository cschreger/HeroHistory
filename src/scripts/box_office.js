dataset = {
    "children": [{
        "title": "Avengers: Endgame",
        "studio": "Marvel/Disney",
        "boxOffice": 2797800564,
    },
    {
        "title": "Avengers: Infinity War",
        "studio": "Marvel/Disney",
        "boxOffice": 2048359754
    },
    {
        "title": "The Avengers",
        "studio": "Marvel/Disney",
        "boxOffice": 1518812988
    },
    {
        "title": "Avengers: Age of Ultron",
        "studio": "Marvel/Disney",
        "boxOffice": 1405403694
    },
    {
        "title": "Black Panther",
        "studio": "Marvel/Disney",
        "boxOffice": 1346913171
    },
    {
        "title": "Incredibles 2",
        "studio": "Disney/Pixar",
        "boxOffice": 1242805359
    },
    {
        "title": "Iron Man 3",
        "studio": "Marvel/Disney",
        "boxOffice": 1214811252
    },
    {
        "title": "Captain America: Civil War",
        "studio": "Marvel/Disney",
        "boxOffice": 1153304495
    },
    {
        "title": "Aquaman",
        "studio": "DC/Warner Bros.",
        "boxOffice": 2048359754
    },
    {
        "title": "Spider-Man: Far From Hom",
        "studio": "Marvel/Sony",
        "boxOffice": 1131927996
    },
    {
        "title": "Captain Marvel",
        "studio": "Marvel/Disney",
        "boxOffice": 1128274794
    },
    {
        "title": "The Dark Knight Rises",
        "studio": "DC/Warner Bros.",
        "boxOffice": 1081041287
    },
    {
        "title": "Joker",
        "studio": "DC/Warner Bros.",
        "boxOffice": 1074251311
    },
    {
        "title": "The Dark Knight",
        "studio": "DC/Warner Bros.",
        "boxOffice": 1004558444
    },
    {
        "title": "Spider-Man 3",
        "studio": "Marvel/Sony",
        "boxOffice": 890871626
    },
    {
        "title": "Spider-Man: Homecoming",
        "studio": "Marvel/Sony",
        "boxOffice": 880166924
    },
    {
        "title": "Batman v. Superman: Dawn of Justice",
        "studio": "DC/Warner Bros.",
        "boxOffice": 873634919
    },
    {
        "title": "Guardians of the Galaxy Vol. 2",
        "studio": "Marvel/Disney",
        "boxOffice": 863756051
    },
    {
        "title": "Venom",
        "studio": "Marvel/Sony",
        "boxOffice": 856085151
    },
    {
        "title": "Thor: Ragnarok",
        "studio": "Marvel/Disney",
        "boxOffice": 853977126
    },
    {
        "title": "Wonder Woman",
        "studio": "DC/Warner Bros.",
        "boxOffice": 863756051
    },
    {
        "title": "Spider-Man",
        "studio": "Marvel/Sony",
        "boxOffice": 821708551
    },
    {
        "title": "Spider-Man 2",
        "studio": "Marvel/Sony",
        "boxOffice": 788976453
    },
    {
        "title": "Deadpool 2",
        "studio": "Marvel/20th Century Fox",
        "boxOffice": 785046920
    },
    {
        "title": "Deadpool",
        "studio": "Marvel/20th Century Fox",
        "boxOffice": 783112979
    },
    
    ]
}

var diameter = 900;
var color = d3.scaleOrdinal(d3.schemeCategory10);

//edited the responsive bar code to apply to bubble chart
default_height = 500;
default_ratio = diameter / default_height;

// Determine current size, which determines vars
function set_size() {
    current_width = window.innerWidth;
    current_height = window.innerHeight;
    current_ratio = current_width / current_height;
    // Check if height is limiting factor
    if (current_ratio > default_ratio) {
        diameter = 900;
        // Else width is limiting
    } else {
        diameter = 400;
    }
};
set_size();

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(.5);

var svg = d3.select("#bubble")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(dataset)
    .sum(function (d) {
        return d.population;
    });


var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function (d) {
        return !d.children
    })
    .append("g")
    .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('100')
            .attr('opacity', '.8');
    })
    .on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('100')
            .attr('opacity', '1');
    })
    .attr("class", "node")
    .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

node.append("title")
    .text(function (d) {
        return d.state;
    });

node.append("circle")
    .attr("r", function (d) {
        return d.r;
    })
    .style("fill", function (d, i) {
        return color(i);
    });

node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function (d) {
        return d.data.state;
    })
    .attr("font-size", function (d) {
        return d.r / 5;
    })
    .attr("fill", "white");

node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function (d) {
        return d.data.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    })
    .attr("font-size", function (d) {
        return d.r / 5;
    })
    .attr("fill", "white");

d3.select(self.frameElement)
    .style("height", diameter + "px");