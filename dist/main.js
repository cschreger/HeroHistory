/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_box_office__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/box_office */ "./src/scripts/box_office.js");
/* harmony import */ var _scripts_marvel_year_by_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/marvel_year_by_year */ "./src/scripts/marvel_year_by_year.js");
/* harmony import */ var _scripts_gender_donut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/gender_donut */ "./src/scripts/gender_donut.js");
/* harmony import */ var _scripts_market_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/market_share */ "./src/scripts/market_share.js");






var currentFocus = {
  currentExample: null
};
document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown);
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown);
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble);
document.querySelector("#market-share").addEventListener("click", goMarketShare);

function goYearBreakdown() {
  Object(_scripts_marvel_year_by_year__WEBPACK_IMPORTED_MODULE_2__["yearBreakdown"])();
  currentFocus.currentExample = "Year Breakdown";
}

function goGenderBreakdown() {
  Object(_scripts_gender_donut__WEBPACK_IMPORTED_MODULE_3__["genderDonut"])();
  currentFocus.currentExample = "Gender Breakdown";
}

function goBoxOfficeBubble() {
  Object(_scripts_box_office__WEBPACK_IMPORTED_MODULE_1__["boxOfficeBubble"])();
  currentFocus.currentExample = "Box Office";
}

function goMarketShare() {
  Object(_scripts_market_share__WEBPACK_IMPORTED_MODULE_4__["marketShare"])();
  currentFocus.currentExample = "Market Share";
}

/***/ }),

/***/ "./src/scripts/box_office.js":
/*!***********************************!*\
  !*** ./src/scripts/box_office.js ***!
  \***********************************/
/*! exports provided: boxOfficeBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxOfficeBubble", function() { return boxOfficeBubble; });
var boxOfficeBubble = function boxOfficeBubble() {
  var dataset = {
    "children": [{
      "title": "Avengers: Endgame",
      "studio": "Marvel/Disney",
      "boxOffice": 2797800564
    }, {
      "title": "Avengers: Infinity War",
      "studio": "Marvel/Disney",
      "boxOffice": 2048359754
    }, {
      "title": "The Avengers",
      "studio": "Marvel/Disney",
      "boxOffice": 1518812988
    }, {
      "title": "Avengers: Age of Ultron",
      "studio": "Marvel/Disney",
      "boxOffice": 1405403694
    }, {
      "title": "Black Panther",
      "studio": "Marvel/Disney",
      "boxOffice": 1346913171
    }, {
      "title": "Incredibles 2",
      "studio": "Disney/Pixar",
      "boxOffice": 1242805359
    }, {
      "title": "Iron Man 3",
      "studio": "Marvel/Disney",
      "boxOffice": 1214811252
    }, {
      "title": "Captain America: Civil War",
      "studio": "Marvel/Disney",
      "boxOffice": 1153304495
    }, {
      "title": "Aquaman",
      "studio": "DC/Warner Bros.",
      "boxOffice": 2048359754
    }, {
      "title": "Spider-Man: Far From Home",
      "studio": "Marvel/Sony",
      "boxOffice": 1131927996
    }, {
      "title": "Captain Marvel",
      "studio": "Marvel/Disney",
      "boxOffice": 1128274794
    }, {
      "title": "The Dark Knight Rises",
      "studio": "DC/Warner Bros.",
      "boxOffice": 1081041287
    }, {
      "title": "Joker",
      "studio": "DC/Warner Bros.",
      "boxOffice": 1074251311
    }, {
      "title": "The Dark Knight",
      "studio": "DC/Warner Bros.",
      "boxOffice": 1004558444
    }, {
      "title": "Spider-Man 3",
      "studio": "Marvel/Sony",
      "boxOffice": 890871626
    }, {
      "title": "Spider-Man: Homecoming",
      "studio": "Marvel/Sony",
      "boxOffice": 880166924
    }, {
      "title": "Batman v. Superman: Dawn of Justice",
      "studio": "DC/Warner Bros.",
      "boxOffice": 873634919
    }, {
      "title": "Guardians of the Galaxy Vol. 2",
      "studio": "Marvel/Disney",
      "boxOffice": 863756051
    }, {
      "title": "Venom",
      "studio": "Marvel/Sony",
      "boxOffice": 856085151
    }, {
      "title": "Thor: Ragnarok",
      "studio": "Marvel/Disney",
      "boxOffice": 853977126
    }, {
      "title": "Wonder Woman",
      "studio": "DC/Warner Bros.",
      "boxOffice": 863756051
    }, {
      "title": "Spider-Man",
      "studio": "Marvel/Sony",
      "boxOffice": 821708551
    }, {
      "title": "Spider-Man 2",
      "studio": "Marvel/Sony",
      "boxOffice": 788976453
    }, {
      "title": "Deadpool 2",
      "studio": "Marvel/20th Century Fox",
      "boxOffice": 785046920
    }, {
      "title": "Deadpool",
      "studio": "Marvel/20th Century Fox",
      "boxOffice": 783112979
    }]
  };
  var diameter = 900;
  var color2 = d3.scaleOrdinal(d3.schemeCategory10);
  var default_height = 650;
  var default_ratio = diameter / default_height;

  function set_size() {
    var current_width = window.innerWidth;
    var current_height = window.innerHeight;
    var current_ratio = current_width / current_height;

    if (current_ratio > default_ratio) {
      var _diameter = 1200;
    } else {
      var _diameter2 = 600;
    }
  }

  ;
  set_size();
  var bubble = d3.pack(dataset).size([diameter, diameter]).padding(.9);
  var svg3 = d3.select("#bubble").append("svg").attr("width", diameter).attr("height", diameter).attr("class", "bubble");
  var nodes = d3.hierarchy(dataset).sum(function (d) {
    return d.boxOffice;
  });
  var node = svg3.selectAll(".node").data(bubble(nodes).descendants()).enter().filter(function (d) {
    return !d.children;
  }).append("g").on('mouseover', function (d, i) {
    d3.select(this).transition().duration('100').attr('opacity', '.7');
  }).on('mouseout', function (d, i) {
    d3.select(this).transition().duration('100').attr('opacity', '1');
  }).attr("class", "node").attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
  node.append("title").text(function (d) {
    return d.title;
  });
  node.append("studio").text(function (d) {
    return d.studio;
  });
  node.append("circle").attr("r", function (d) {
    return d.r;
  }).style("fill", function (d, i) {
    return color2(i);
  });
  node.append("text").attr("dy", ".03em").style("text-anchor", "middle").text(function (d) {
    return d.data.title;
  }).attr("font-size", function (d) {
    return d.r / 5;
  }).attr("fill", "white");
  node.append("text").attr("dy", "1.3em").style("text-anchor", "middle").text(function (d) {
    return "$" + d.data.boxOffice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }).attr("font-size", function (d) {
    return d.r / 5;
  }).attr("fill", "white");
  d3.select(self.frameElement).style("height", diameter + "px");
};

/***/ }),

/***/ "./src/scripts/gender_donut.js":
/*!*************************************!*\
  !*** ./src/scripts/gender_donut.js ***!
  \*************************************/
/*! exports provided: genderDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genderDonut", function() { return genderDonut; });
var genderDonut = function genderDonut() {
  var total = [{
    title: "Male",
    count: 85023
  }, {
    title: "Female",
    count: 37762
  }, {
    title: "Other",
    count: 16626
  }];
  var height = 360;
  var width = 360;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  d3.select("body").append("svg").attr("id", "donut-svg");
  var svg = d3.select('#donut-svg') // .append(svg)
  .attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + "," + height / 2 + ')');
  var arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);
  var pie = d3.pie().value(function (d) {
    return d.count;
  }).sort(null);
  var donutTip = d3.select("body").append("div").attr("class", "donut-tip").style("opactiy", 0);
  var path = svg.selectAll('path').data(pie(total)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
    return color(d.data.title);
  }).on("mouseover", onMouseOver).on("mouseout", onMouseOut).attr('transform', 'translate(0,0)').transition().ease(d3.easeLinear).duration(1700).attrTween("d", tweenPie);
  svg.append("text").attr("transform", "translate(100,0)").attr("x", -25).attr("y", 50).attr("font-size", "24px").text("Character gender (All Publishers)");

  function tweenPie(b) {
    var i = d3.interpolate({
      startAngle: 1.1 * Math.PI,
      endAngle: 1.1 * Math.PI
    }, b);
    return function (t) {
      return arc(i(t));
    };
  }

  function onMouseOver(d, i) {
    d3.select(this).transition().duration('50').attr('opacity', '.85');
    donutTip.transition().duration(50).style("opacity", 1);
    var num = Math.round(d.data.count / 140000 * 100).toString() + "%";
    donutTip.html(num).style("left", d3.event.pageX + 10 + "px").style("top", d3.event.pageY - 15 + "px");
  }

  function onMouseOut(d, i) {
    d3.select(this).transition().duration('50').attr('opacity', 1);
    donutTip.transition().duration('50').style('opacity', 0);
  }

  var legendRectSize = 10;
  var legendSpacing = 11;
  var legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'circle-legend').attr('transform', function (d, i) {
    var height = legendRectSize + legendSpacing;
    var offset = height * color.domain().length / 2;
    var horizontal = -2 * legendRectSize - 13;
    var vertical = i * height - offset;
    return 'translate(' + horizontal + ',' + vertical + ')';
  });
  legend.append('circle').style('fill', color).style('stroke', color).attr('cx', 0).attr('cy', 0).attr('r', '.5rem');
  legend.append('text').attr('x', legendRectSize + legendSpacing + 25).attr('y', legendRectSize - legendSpacing + 3).text(function (d) {
    return d;
  });
};

/***/ }),

/***/ "./src/scripts/market_share.js":
/*!*************************************!*\
  !*** ./src/scripts/market_share.js ***!
  \*************************************/
/*! exports provided: marketShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketShare", function() { return marketShare; });
var marketShare = function marketShare() {
  d3.csv('../data/market_share.csv').then(function (d) {
    return graph(d);
  });

  function graph(data) {
    var keys = data.columns.slice(1);
    var margin = {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40
    };
    var width = 900 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;
    data.forEach(function (d) {
      return d;
    });
    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().range([height, 0]);
    var zScale = d3.scaleOrdinal(d3.schemeCategory10);
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    var line = d3.line().x(function (d) {
      return xScale(d.year);
    }).y(function (d) {
      return yScale(d.share);
    }).curve(d3.curveCardinal);
    var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    color.domain(d3.keys(data[0]).filter(function (key) {
      return key !== "year";
    }));
    var companies = color.domain().map(function (name) {
      return {
        name: name,
        values: data.map(function (d) {
          return {
            year: d.year,
            share: +d[name]
          };
        })
      };
    });
    xScale.domain(d3.extent(data, function (d) {
      return d.year;
    }));
    yScale.domain([d3.min(companies, function (c) {
      return d3.min(c.values, function (v) {
        return v.share;
      });
    }), // d3.max(companies, function(c) {
    //     return d3.max(c.values, function(v) {
    //         return v.share
    //     })
    // })
    50]);
    var legend = svg.selectAll('g').data(companies).enter().append('g').attr('class', 'legend');
    legend.append('rect').attr('x', width - 20).attr('y', function (d, i) {
      return i * 20;
    }).attr('width', 10).attr('height', 10).style('fill', function (d) {
      return color(d.name);
    });
    legend.append('text').attr('x', width - 8).attr('y', function (d, i) {
      return i * 20 + 9;
    }).text(function (d) {
      return d.name;
    });
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".7em").style("text-anchor", "end").text("Market Share (%)");
    var company = svg.selectAll(".company").data(companies).enter().append("g").attr("class", "company");
    company.append("path").attr("class", "line").attr("d", function (d) {
      return line(d.values);
    }).style("stroke", function (d) {
      return color(d.name);
    });
    debugger;
    company.append("text").datum(function (d) {
      return {
        name: d.name,
        value: d.values[d.values.length - 1]
      };
    }).attr("transform", function (d) {
      return "translate(" + xScale(d.value.year) + "," + yScale(d.value.share) + ")";
    }).attr("x", 3).attr("dy", ".35em").text(function (d) {
      return d.name;
    }); // Credit to larsenmtl(bl.ocks.org/larsenmtl)

    var mouseG = svg.append("g").attr("class", "mouse-over-effects");
    mouseG.append("path") // this is the black vertical line to follow mouse
    .attr("class", "mouse-line").style("stroke", "black").style("stroke-width", "1px").style("opacity", "0");
    var lines = document.getElementsByClassName('line');
    var mousePerLine = mouseG.selectAll('.mouse-per-line').data(companies).enter().append("g").attr("class", "mouse-per-line");
    mousePerLine.append("circle").attr("r", 7).style("stroke", function (d) {
      return color(d.name);
    }).style("fill", "none").style("stroke-width", "1px").style("opacity", "0");
    mousePerLine.append("text").attr("transform", "translate(10,3)");
    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
    .attr('width', width) // can't catch mouse events on a g element
    .attr('height', height).attr('fill', 'none').attr('pointer-events', 'all').on('mouseout', function () {
      // on mouse out hide line, circles and text
      d3.select(".mouse-line").style("opacity", "0");
      d3.selectAll(".mouse-per-line circle").style("opacity", "0");
      d3.selectAll(".mouse-per-line text").style("opacity", "0");
    }).on('mouseover', function () {
      // on mouse in show line, circles and text
      d3.select(".mouse-line").style("opacity", "1");
      d3.selectAll(".mouse-per-line circle").style("opacity", "1");
      d3.selectAll(".mouse-per-line text").style("opacity", "1");
    }).on('mousemove', function () {
      // mouse moving over canvas
      var mouse = d3.mouse(this);
      d3.select(".mouse-line").attr("d", function () {
        var d = "M" + mouse[0] + "," + height;
        d += " " + mouse[0] + "," + 0;
        return d;
      });
      d3.selectAll(".mouse-per-line").attr("transform", function (d, i) {
        var xYear = xScale.invert(mouse[0]),
            bisect = d3.bisector(function (d) {
          return d.year;
        }).right;
        var idx = bisect(d.values, xYear);
        var beginning = 0,
            end = lines[i].getTotalLength(),
            target = null;

        while (true) {
          var _target = Math.floor((beginning + end) / 2);

          var _pos = lines[i].getPointAtLength(_target);

          if ((_target === end || _target === beginning) && _pos.x !== mouse[0]) {
            break;
          }

          if (_pos.x > mouse[0]) end = _target;else if (_pos.x < mouse[0]) beginning = _target;else break; //position found
        }

        d3.select(this).select('text').text(yScale.invert(pos.y).toFixed(2));
        return "translate(" + mouse[0] + "," + pos.y + ")";
      });
    });
  }
};

/***/ }),

/***/ "./src/scripts/marvel_year_by_year.js":
/*!********************************************!*\
  !*** ./src/scripts/marvel_year_by_year.js ***!
  \********************************************/
/*! exports provided: yearBreakdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearBreakdown", function() { return yearBreakdown; });
var yearBreakdown = function yearBreakdown() {
  d3.select("body").append("svg").attr("id", "svg2").attr("width", 1200).attr("height", 700);
  var svg2 = d3.select("#svg2"),
      margin = 150,
      width2 = svg2.attr("width") - margin,
      height2 = svg2.attr("height") - margin;
  var xScale = d3.scaleBand().range([0, width2]).padding(0.6),
      yScale = d3.scaleLinear().range([height2, 0]);
  var g = svg2.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");
  d3.csv("./data/yearData.csv").then(function (data) {
    xScale.domain(data.map(function (d) {
      return d.year;
    }));
    yScale.domain([0, 1300]);
    g.append("g").attr("transform", "translate(0," + height2 + ")").call(d3.axisBottom(xScale)).append("text").attr("y", height2 - 200).attr("x", width2 - 100).attr("text-anchor", "end").attr("stroke", "black").text("Year");
    g.append("g").call(d3.axisLeft(yScale).tickFormat(function (d) {
      return d;
    }).ticks(10)).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "-5.1em").attr("text-anchor", "end").attr("stroke", "black").text("(Unique) issues released");
    svg2.append("text").attr("transform", "translate(100,0)").attr("x", 50).attr("y", 50).attr("font-size", "24px").text("# of releases (Marvel)");
    g.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").on("mouseover", onMouseOver).on("mouseout", onMouseOut).attr("x", function (d) {
      return xScale(d.year);
    }).attr("y", function (d) {
      return yScale(0);
    }).attr("width", xScale.bandwidth()).attr("height", function (d) {
      return height2 - yScale(0);
    });
    svg2.selectAll("rect").transition().duration(1200).attr("y", function (d) {
      return yScale(d.issues);
    }).attr("height", function (d) {
      return height2 - yScale(d.issues);
    }).delay(function (d, i) {
      return i * 13;
    });
  });

  function onMouseOver(d, i) {
    d3.select(this).attr('class', 'highlight');
    d3.select(this).transition().duration(400).attr('width', xScale.bandwidth() + 2).attr("y", function (d) {
      return yScale(d.issues) - 10;
    }).attr("height", function (d) {
      return height2 - yScale(d.issues) + 10;
    });
    g.append("text").attr('class', 'val').attr('x', function () {
      return xScale(d.year) + 10;
    }).attr('y', function () {
      return yScale(d.issues) - 20;
    }).text(function () {
      return [d.issues];
    });
  }

  function onMouseOut(d, i) {
    d3.select(this).attr('class', 'bar');
    d3.select(this).transition().duration(400).attr('width', xScale.bandwidth()).attr("y", function (d) {
      return yScale(d.issues);
    }).attr("height", function (d) {
      return height2 - yScale(d.issues);
    });
    d3.selectAll('.val').remove();
  }
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwibmFtZXMiOlsiY3VycmVudEZvY3VzIiwiY3VycmVudEV4YW1wbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ29ZZWFyQnJlYWtkb3duIiwiZ29HZW5kZXJCcmVha2Rvd24iLCJnb0JveE9mZmljZUJ1YmJsZSIsImdvTWFya2V0U2hhcmUiLCJ5ZWFyQnJlYWtkb3duIiwiZ2VuZGVyRG9udXQiLCJib3hPZmZpY2VCdWJibGUiLCJtYXJrZXRTaGFyZSIsImRhdGFzZXQiLCJkaWFtZXRlciIsImNvbG9yMiIsImQzIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImRlZmF1bHRfaGVpZ2h0IiwiZGVmYXVsdF9yYXRpbyIsInNldF9zaXplIiwiY3VycmVudF93aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjdXJyZW50X2hlaWdodCIsImlubmVySGVpZ2h0IiwiY3VycmVudF9yYXRpbyIsImJ1YmJsZSIsInBhY2siLCJzaXplIiwicGFkZGluZyIsInN2ZzMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibm9kZXMiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwiYm94T2ZmaWNlIiwibm9kZSIsInNlbGVjdEFsbCIsImRhdGEiLCJkZXNjZW5kYW50cyIsImVudGVyIiwiZmlsdGVyIiwiY2hpbGRyZW4iLCJvbiIsImkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ4IiwieSIsInRleHQiLCJ0aXRsZSIsInN0dWRpbyIsInIiLCJzdHlsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlbGYiLCJmcmFtZUVsZW1lbnQiLCJ0b3RhbCIsImNvdW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiZG9udXRXaWR0aCIsImNvbG9yIiwic3ZnIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBpZSIsInZhbHVlIiwic29ydCIsImRvbnV0VGlwIiwicGF0aCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImVhc2UiLCJlYXNlTGluZWFyIiwiYXR0clR3ZWVuIiwidHdlZW5QaWUiLCJiIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsInQiLCJudW0iLCJyb3VuZCIsImh0bWwiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJsZWdlbmRSZWN0U2l6ZSIsImxlZ2VuZFNwYWNpbmciLCJsZWdlbmQiLCJkb21haW4iLCJvZmZzZXQiLCJsZW5ndGgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjc3YiLCJ0aGVuIiwiZ3JhcGgiLCJrZXlzIiwiY29sdW1ucyIsInNsaWNlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZm9yRWFjaCIsInhTY2FsZSIsInNjYWxlVGltZSIsInJhbmdlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJ6U2NhbGUiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ5QXhpcyIsImF4aXNMZWZ0IiwibGluZSIsInllYXIiLCJzaGFyZSIsImN1cnZlIiwiY3VydmVDYXJkaW5hbCIsImtleSIsImNvbXBhbmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZXMiLCJleHRlbnQiLCJjIiwidiIsImNhbGwiLCJjb21wYW55IiwiZGF0dW0iLCJtb3VzZUciLCJsaW5lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb3VzZVBlckxpbmUiLCJtb3VzZSIsInhZZWFyIiwiaW52ZXJ0IiwiYmlzZWN0IiwiYmlzZWN0b3IiLCJpZHgiLCJiZWdpbm5pbmciLCJlbmQiLCJnZXRUb3RhbExlbmd0aCIsInRhcmdldCIsImZsb29yIiwicG9zIiwiZ2V0UG9pbnRBdExlbmd0aCIsInRvRml4ZWQiLCJzdmcyIiwid2lkdGgyIiwiaGVpZ2h0MiIsInNjYWxlQmFuZCIsImciLCJ0aWNrRm9ybWF0IiwidGlja3MiLCJiYW5kd2lkdGgiLCJpc3N1ZXMiLCJkZWxheSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsZ0JBQWMsRUFBRTtBQURDLENBQXJCO0FBSUFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIs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SCxDQUF2QjtBQUFvQyxLQUxyRTtBQU9BM0osTUFBRSxDQUFDMEIsU0FBSCxDQUFhLE1BQWIsRUFDR21JLE1BREg7QUFFRDtBQUNBLENBM0dNLEM7Ozs7Ozs7Ozs7O0FDQVAsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJztcbmltcG9ydCB7eWVhckJyZWFrZG93bn0gZnJvbSAnLi9zY3JpcHRzL21hcnZlbF95ZWFyX2J5X3llYXInO1xuaW1wb3J0IHtnZW5kZXJEb251dH0gZnJvbSAnLi9zY3JpcHRzL2dlbmRlcl9kb251dCc7XG5pbXBvcnQge2JveE9mZmljZUJ1YmJsZX0gZnJvbSAnLi9zY3JpcHRzL2JveF9vZmZpY2UnXG5pbXBvcnQge21hcmtldFNoYXJlfSBmcm9tICcuL3NjcmlwdHMvbWFya2V0X3NoYXJlJ1xuXG5jb25zdCBjdXJyZW50Rm9jdXMgPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGxcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29ZZWFyQnJlYWtkb3duKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0dlbmRlckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Cb3hPZmZpY2VCdWJibGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29NYXJrZXRTaGFyZSlcblxuZnVuY3Rpb24gZ29ZZWFyQnJlYWtkb3duICgpIHtcbiAgICB5ZWFyQnJlYWtkb3duKCk7XG4gICAgY3VycmVudEZvY3VzLmN1cnJlbnRFeGFtcGxlID0gXCJZZWFyIEJyZWFrZG93blwiO1xufVxuXG5mdW5jdGlvbiBnb0dlbmRlckJyZWFrZG93biAoKSB7XG4gICAgZ2VuZGVyRG9udXQoKTtcbiAgICBjdXJyZW50Rm9jdXMuY3VycmVudEV4YW1wbGUgPSBcIkdlbmRlciBCcmVha2Rvd25cIjtcbn1cblxuZnVuY3Rpb24gZ29Cb3hPZmZpY2VCdWJibGUgKCkge1xuICAgIGJveE9mZmljZUJ1YmJsZSgpO1xuICAgIGN1cnJlbnRGb2N1cy5jdXJyZW50RXhhbXBsZSA9IFwiQm94IE9mZmljZVwiO1xufVxuXG5mdW5jdGlvbiBnb01hcmtldFNoYXJlICgpIHtcbiAgICBtYXJrZXRTaGFyZSgpO1xuICAgIGN1cnJlbnRGb2N1cy5jdXJyZW50RXhhbXBsZSA9IFwiTWFya2V0IFNoYXJlXCI7XG59IiwiZXhwb3J0IGNvbnN0IGJveE9mZmljZUJ1YmJsZSA9ICgpID0+IHtcblxuY29uc3QgZGF0YXNldCA9IHtcbiAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogRW5kZ2FtZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjc5NzgwMDU2NCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBJbmZpbml0eSBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBdmVuZ2Vyc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTUxODgxMjk4OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEFnZSBvZiBVbHRyb25cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE0MDU0MDM2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsYWNrIFBhbnRoZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEzNDY5MTMxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluY3JlZGlibGVzIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEaXNuZXkvUGl4YXJcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTI0MjgwNTM1OVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXJvbiBNYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTIxNDgxMTI1MlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExNTMzMDQ0OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFxdWFtYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogRmFyIEZyb20gSG9tZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMzE5Mjc5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gTWFydmVsXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTI4Mjc0Nzk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHQgUmlzZXNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA4MTA0MTI4N1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSm9rZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA3NDI1MTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0XCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwMDQ1NTg0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg5MDg3MTYyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogSG9tZWNvbWluZ1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg4MDE2NjkyNFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF0bWFuIHYuIFN1cGVybWFuOiBEYXduIG9mIEp1c3RpY2VcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODczNjM0OTE5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eSBWb2wuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVub21cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTYwODUxNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRob3I6IFJhZ25hcm9rXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTM5NzcxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldvbmRlciBXb21hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4MjE3MDg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4ODk3NjQ1M1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2wgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4NTA0NjkyMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2xcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODMxMTI5NzlcbiAgICB9LFxuXG4gICAgXVxufVxuXG5jb25zdCBkaWFtZXRlciA9IDkwMDtcbmNvbnN0IGNvbG9yMiA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuY29uc3QgZGVmYXVsdF9oZWlnaHQgPSA2NTA7XG5jb25zdCBkZWZhdWx0X3JhdGlvID0gZGlhbWV0ZXIgLyBkZWZhdWx0X2hlaWdodDtcblxuXG5mdW5jdGlvbiBzZXRfc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgY3VycmVudF9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudF9yYXRpbyA9IGN1cnJlbnRfd2lkdGggLyBjdXJyZW50X2hlaWdodDtcblxuICAgIGlmIChjdXJyZW50X3JhdGlvID4gZGVmYXVsdF9yYXRpbykge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSAxMjAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDYwMDtcbiAgICB9XG59O1xuc2V0X3NpemUoKTtcblxuY29uc3QgYnViYmxlID0gZDMucGFjayhkYXRhc2V0KVxuICAgIC5zaXplKFtkaWFtZXRlciwgZGlhbWV0ZXJdKVxuICAgIC5wYWRkaW5nKC45KTtcblxuY29uc3Qgc3ZnMyA9IGQzLnNlbGVjdChcIiNidWJibGVcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImhlaWdodFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYnViYmxlXCIpO1xuXG5jb25zdCBub2RlcyA9IGQzLmhpZXJhcmNoeShkYXRhc2V0KVxuICAgIC5zdW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuYm94T2ZmaWNlO1xuICAgIH0pO1xuXG5cbmNvbnN0IG5vZGUgPSBzdmczLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgLmRhdGEoYnViYmxlKG5vZGVzKS5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gIWQuY2hpbGRyZW5cbiAgICB9KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNycpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0aXRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnRpdGxlO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInN0dWRpb1wiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnN0dWRpbztcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucjtcbiAgICB9KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yMihpKTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4wM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLnRpdGxlO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMS4zZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGQuZGF0YS5ib3hPZmZpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmQzLnNlbGVjdChzZWxmLmZyYW1lRWxlbWVudClcbiAgICAuc3R5bGUoXCJoZWlnaHRcIiwgZGlhbWV0ZXIgKyBcInB4XCIpO1xuXG59IiwiZXhwb3J0IGNvbnN0IGdlbmRlckRvbnV0ID0gKCkgPT4ge1xuXG5jb25zdCB0b3RhbCA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1hbGVcIixcbiAgICAgICAgY291bnQ6IDg1MDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlbWFsZVwiLFxuICAgICAgICBjb3VudDogMzc3NjJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiT3RoZXJcIixcbiAgICAgICAgY291bnQ6IDE2NjI2XG4gICAgfV1cblxuY29uc3QgaGVpZ2h0ID0gMzYwO1xuY29uc3Qgd2lkdGggPSAzNjA7XG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDI7XG5jb25zdCBkb251dFdpZHRoID0gNzU7XG5jb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuZDMuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtc3ZnXCIpXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0LXN2ZycpXG4gICAgLy8gLmFwcGVuZChzdmcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHdpZHRoIC8gMikgKyBcIixcIiArIChoZWlnaHQgLyAyKSArICcpJylcblxuY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMocmFkaXVzIC0gZG9udXRXaWR0aClcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzKTtcblxuY29uc3QgcGllID0gZDMucGllKClcbiAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY291bnRcbiAgICB9KVxuICAgIC5zb3J0KG51bGwpO1xuXG5jb25zdCBkb251dFRpcCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbnV0LXRpcFwiKVxuICAgIC5zdHlsZShcIm9wYWN0aXlcIiwgMClcblxuY29uc3QgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC5kYXRhKHBpZSh0b3RhbCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsIGFyYylcbiAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvcihkLmRhdGEudGl0bGUpXG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAuZHVyYXRpb24oMTcwMClcbiAgICAuYXR0clR3ZWVuKFwiZFwiLCB0d2VlblBpZSlcblxuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgLTI1KVxuICAgIC5hdHRyKFwieVwiLCA1MClcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjI0cHhcIilcbiAgICAudGV4dChcIkNoYXJhY3RlciBnZW5kZXIgKEFsbCBQdWJsaXNoZXJzKVwiKVxuXG5mdW5jdGlvbiB0d2VlblBpZShiKSB7XG4gICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHsgc3RhcnRBbmdsZTogMS4xICogTWF0aC5QSSwgZW5kQW5nbGU6IDEuMSAqIE1hdGguUEkgfSwgYik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBhcmMoaSh0KSk7IH07XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKVxuICAgIGRvbnV0VGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICBsZXQgbnVtID0gKE1hdGgucm91bmQoKGQuZGF0YS5jb3VudCAvIDE0MDAwMCkgKiAxMDApKS50b1N0cmluZygpICsgXCIlXCJcbiAgICBkb251dFRpcC5odG1sKG51bSlcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAxMCkgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAxNSkgKyBcInB4XCIpXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG59XG5cbmNvbnN0IGxlZ2VuZFJlY3RTaXplID0gMTA7XG5jb25zdCBsZWdlbmRTcGFjaW5nID0gMTE7XG5cbmNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKVxuICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NpcmNsZS1sZWdlbmQnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gaGVpZ2h0ICogY29sb3IuZG9tYWluKCkubGVuZ3RoIC8gMjtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSAtMiAqIGxlZ2VuZFJlY3RTaXplIC0gMTM7XG4gICAgICAgIGxldCB2ZXJ0aWNhbCA9IGkgKiBoZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBob3Jpem9udGFsICsgJywnICsgdmVydGljYWwgKyAnKSc7XG4gICAgfSlcblxubGVnZW5kLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGNvbG9yKVxuICAgIC5hdHRyKCdjeCcsIDApXG4gICAgLmF0dHIoJ2N5JywgMClcbiAgICAuYXR0cigncicsICcuNXJlbScpXG5cbmxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4JywgbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nICsgMjUpXG4gICAgLmF0dHIoJ3knLCBsZWdlbmRSZWN0U2l6ZSAtIGxlZ2VuZFNwYWNpbmcgKyAzKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xufSlcblxufSIsImV4cG9ydCBjb25zdCBtYXJrZXRTaGFyZSA9ICgpID0+IHtcblxuZDMuY3N2KCcuLi9kYXRhL21hcmtldF9zaGFyZS5jc3YnKS50aGVuKGQgPT4gZ3JhcGgoZCkpXG5cblxuZnVuY3Rpb24gZ3JhcGgoZGF0YSkge1xuXG4gICAgY29uc3Qga2V5cyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKTtcbiAgICBjb25zdCBtYXJnaW4gPSB7dG9wOjIwLCByaWdodDogNDAsIGJvdHRvbTogMjAsIGxlZnQ6IDQwfVxuICAgIGNvbnN0IHdpZHRoID0gOTAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRcbiAgICBjb25zdCBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLHdpZHRoXSlcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgIGNvbnN0IHpTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICBcbiAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeVNjYWxlKVxuXG4gICAgXG4gICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHhTY2FsZShkLnllYXIpXG4gICAgfSlcbiAgICAueShmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB5U2NhbGUoZC5zaGFyZSlcbiAgICB9KVxuICAgIC5jdXJ2ZShkMy5jdXJ2ZUNhcmRpbmFsKVxuICAgIFxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXG5cbiAgICBjb2xvci5kb21haW4oZDMua2V5cyhkYXRhWzBdKS5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgIT09IFwieWVhclwiXG4gICAgfSkpXG5cbiAgICBjb25zdCBjb21wYW5pZXMgPSBjb2xvci5kb21haW4oKS5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHllYXI6IGQueWVhcixcbiAgICAgICAgICAgICAgICAgICAgc2hhcmU6ICtkW25hbWVdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB4U2NhbGUuZG9tYWluKGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnllYXJcbiAgICB9KSlcblxuICAgIHlTY2FsZS5kb21haW4oW1xuICAgICAgICBkMy5taW4oY29tcGFuaWVzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMubWluKGMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuc2hhcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBkMy5tYXgoY29tcGFuaWVzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHYuc2hhcmVcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pXG4gICAgICAgIDUwXG4gICAgXSlcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gMjApXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqIDIwXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpXG4gICAgICAgIH0pXG4gICAgXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLSA4KVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIChpICogMjApICsgOTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQubmFtZVxuICAgICAgICB9KVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAuY2FsbCh4QXhpcylcblxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmNhbGwoeUF4aXMpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuN2VtXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgIC50ZXh0KFwiTWFya2V0IFNoYXJlICglKVwiKVxuXG4gICAgY29uc3QgY29tcGFueSA9IHN2Zy5zZWxlY3RBbGwoXCIuY29tcGFueVwiKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb21wYW55XCIpXG5cbiAgICBjb21wYW55LmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKVxuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcblxuICAgIGRlYnVnZ2VyXG4gICAgY29tcGFueS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmRhdHVtKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHhTY2FsZShkLnZhbHVlLnllYXIpICsgXCIsXCIgKyB5U2NhbGUoZC52YWx1ZS5zaGFyZSkgKyBcIilcIlxuICAgIH0pXG4gICAgLmF0dHIoXCJ4XCIsIDMpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgfSlcbiAgICBcbiAgICAvLyBDcmVkaXQgdG8gbGFyc2VubXRsKGJsLm9ja3Mub3JnL2xhcnNlbm10bClcbiAgICBjb25zdCBtb3VzZUcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2Utb3Zlci1lZmZlY3RzXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZChcInBhdGhcIikgLy8gdGhpcyBpcyB0aGUgYmxhY2sgdmVydGljYWwgbGluZSB0byBmb2xsb3cgbW91c2VcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLWxpbmVcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuXG4gICAgY29uc3QgbGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lJyk7XG5cbiAgICBjb25zdCBtb3VzZVBlckxpbmUgPSBtb3VzZUcuc2VsZWN0QWxsKCcubW91c2UtcGVyLWxpbmUnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1wZXItbGluZVwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwLDMpXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZCgnc3ZnOnJlY3QnKSAvLyBhcHBlbmQgYSByZWN0IHRvIGNhdGNoIG1vdXNlIG1vdmVtZW50cyBvbiBjYW52YXNcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpIC8vIGNhbid0IGNhdGNoIG1vdXNlIGV2ZW50cyBvbiBhIGcgZWxlbWVudFxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIG91dCBoaWRlIGxpbmUsIGNpcmNsZXMgYW5kIHRleHRcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgdGV4dFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHsgLy8gb24gbW91c2UgaW4gc2hvdyBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdXNlIG1vdmluZyBvdmVyIGNhbnZhc1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBcIk1cIiArIG1vdXNlWzBdICsgXCIsXCIgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gXCIgXCIgKyBtb3VzZVswXSArIFwiLFwiICsgMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhZZWFyID0geFNjYWxlLmludmVydChtb3VzZVswXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXNlY3QgPSBkMy5iaXNlY3RvcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC55ZWFyOyB9KS5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gYmlzZWN0KGQudmFsdWVzLCB4WWVhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlZ2lubmluZyA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBsaW5lc1tpXS5nZXRUb3RhbExlbmd0aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gTWF0aC5mbG9vcigoYmVnaW5uaW5nICsgZW5kKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gbGluZXNbaV0uZ2V0UG9pbnRBdExlbmd0aCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0YXJnZXQgPT09IGVuZCB8fCB0YXJnZXQgPT09IGJlZ2lubmluZykgJiYgcG9zLnggIT09IG1vdXNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggPiBtb3VzZVswXSkgZW5kID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zLnggPCBtb3VzZVswXSkgYmVnaW5uaW5nID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhazsgLy9wb3NpdGlvbiBmb3VuZFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dCh5U2NhbGUuaW52ZXJ0KHBvcy55KS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBtb3VzZVswXSArIFwiLFwiICsgcG9zLnkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbn1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgeWVhckJyZWFrZG93biA9ICgpID0+IHtcblxuZDMuc2VsZWN0KFwiYm9keVwiKVxuICAuYXBwZW5kKFwic3ZnXCIpXG4gIC5hdHRyKFwiaWRcIiwgXCJzdmcyXCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgMTIwMClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgNzAwKVxuXG5jb25zdCBzdmcyID0gZDMuc2VsZWN0KFwiI3N2ZzJcIiksXG4gIG1hcmdpbiA9IDE1MCxcbiAgd2lkdGgyID0gc3ZnMi5hdHRyKFwid2lkdGhcIikgLSBtYXJnaW4sXG4gIGhlaWdodDIgPSBzdmcyLmF0dHIoXCJoZWlnaHRcIikgLSBtYXJnaW47XG5cblxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoMl0pLnBhZGRpbmcoMC42KSxcbiAgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0MiwgMF0pO1xuXG5jb25zdCBnID0gc3ZnMi5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgMTAwICsgXCIsXCIgKyAxMDAgKyBcIilcIik7XG5cbmQzLmNzdihcIi4vZGF0YS95ZWFyRGF0YS5jc3ZcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICB4U2NhbGUuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pKTtcbiAgeVNjYWxlLmRvbWFpbihbMCwgMTMwMF0pO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQyICsgXCIpXCIpXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIGhlaWdodDIgLSAyMDApXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoMiAtIDEwMClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiWWVhclwiKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLnRpY2tzKDEwKSlcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgNilcbiAgICAuYXR0cihcImR5XCIsIFwiLTUuMWVtXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAudGV4dChcIihVbmlxdWUpIGlzc3VlcyByZWxlYXNlZFwiKTtcblxuICBzdmcyLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiIyBvZiByZWxlYXNlcyAoTWFydmVsKVwiKVxuXG4gIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLnllYXIpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKDApOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKDApOyB9KTtcblxuICBzdmcyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqIDEzKSB9KVxufSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2hpZ2hsaWdodCcpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAyKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDEwOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKSArIDEwOyB9KTtcblxuICBnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cignY2xhc3MnLCAndmFsJylcbiAgICAuYXR0cigneCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB4U2NhbGUoZC55ZWFyKSArIDEwO1xuICAgIH0pXG4gICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDIwO1xuICAgIH0pXG4gICAgLnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtkLmlzc3Vlc107XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnLCAnYmFyJyk7XG4gIGQzLnNlbGVjdCh0aGlzKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLmlzc3Vlcyk7IH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpOyB9KTtcblxuICBkMy5zZWxlY3RBbGwoJy52YWwnKVxuICAgIC5yZW1vdmUoKVxufVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==