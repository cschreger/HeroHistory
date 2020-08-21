export const boxOfficeBubble = () => {

const dataset = {
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
        "title": "Spider-Man: Far From Home",
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

const diameter = 900;
const color2 = d3.scaleOrdinal(d3.schemeCategory10);

const default_height = 650;
const default_ratio = diameter / default_height;


function set_size() {
    const current_width = window.innerWidth;
    const current_height = window.innerHeight;
    const current_ratio = current_width / current_height;

    if (current_ratio > default_ratio) {
        let diameter = 1200;
    } else {
        let diameter = 600;
    }
};
set_size();

const bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(.9);

const svg3 = d3.select("#chart-container")
    .append("svg")
    .attr("id", "bubble-chart")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

const nodes = d3.hierarchy(dataset)
    .sum(function (d) {
        return d.boxOffice;
    });


const node = svg3.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function (d) {
        return !d.children
    })
    .append("g")
    .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('100')
            .attr('opacity', '.7');
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
        return d.title;
    });

node.append("studio")
    .text(function (d) {
        return d.studio;
    });

node.append("circle")
    .attr("r", function (d) {
        return d.r;
    })
    .style("fill", function (d, i) {
        return color2(i);
    });

node.append("text")
    .attr("dy", ".03em")
    .style("text-anchor", "middle")
    .text(function (d) {
        return d.data.title;
    })
    .attr("font-size", function (d) {
        return d.r / 5;
    })
    .attr("fill", "white");


node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function (d) {
        return "$" + d.data.boxOffice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    })
    .attr("font-size", function (d) {
        return d.r / 5;
    })
    .attr("fill", "white");

d3.select(self.frameElement)
    .style("height", diameter + "px");

}