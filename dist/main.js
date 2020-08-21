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






document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown);
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown);
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble);
document.querySelector("#market-share").addEventListener("click", goMarketShare);
debugger;

function goYearBreakdown() {
  if (document.querySelector("#line-chart") !== null) {
    var elem = document.querySelector("#line-chart");
    elem.parentNode.removeChild(elem);
    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem = document.querySelector("#donut-chart");

    _elem.parentNode.removeChild(_elem);

    document.querySelector("#gender-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem2 = document.querySelector("#bubble-chart");

    _elem2.parentNode.removeChild(_elem2);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("year-breakdown");
  button.classList.add("clicked");
  Object(_scripts_marvel_year_by_year__WEBPACK_IMPORTED_MODULE_2__["yearBreakdown"])();
}

function goGenderBreakdown() {
  if (document.querySelector("#line-chart") !== null) {
    var elem = document.querySelector("#line-chart");
    elem.parentNode.removeChild(elem);
    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#bar-chart") !== null) {
    var _elem3 = document.querySelector("#bar-chart");

    _elem3.parentNode.removeChild(_elem3);

    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem4 = document.querySelector("#bubble-chart");

    _elem4.parentNode.removeChild(_elem4);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("gender-breakdown");
  button.classList.add("clicked");
  Object(_scripts_gender_donut__WEBPACK_IMPORTED_MODULE_3__["genderDonut"])();
}

function goBoxOfficeBubble() {
  if (document.querySelector("#line-chart") !== null) {
    var elem = document.querySelector("#line-chart");
    elem.parentNode.removeChild(elem);
    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#bar-chart") !== null) {
    var _elem5 = document.querySelector("#bar-chart");

    _elem5.parentNode.removeChild(_elem5);

    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem6 = document.querySelector("#donut-chart");

    _elem6.parentNode.removeChild(_elem6);

    document.querySelector("#gender-breakdown").removeAttribute("class");
  }

  var button = document.getElementById("box-office");
  button.classList.add("clicked");
  Object(_scripts_box_office__WEBPACK_IMPORTED_MODULE_1__["boxOfficeBubble"])();
}

function goMarketShare() {
  if (document.querySelector("#bar-chart") !== null) {
    var elem = document.querySelector("#bar-chart");
    elem.parentNode.removeChild(elem);
    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem7 = document.querySelector("#donut-chart");

    _elem7.parentNode.removeChild(_elem7);

    document.querySelector("#gender-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem8 = document.querySelector("#bubble-chart");

    _elem8.parentNode.removeChild(_elem8);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("market-share");
  button.classList.add("clicked");
  Object(_scripts_market_share__WEBPACK_IMPORTED_MODULE_4__["marketShare"])();
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
  var svg3 = d3.select("#chart-container").append("svg").attr("id", "bubble-chart").attr("width", diameter).attr("height", diameter).attr("class", "bubble");
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
  d3.select("#chart-container").append("svg").attr("id", "donut-chart");
  var svg = d3.select('#donut-chart') // .append(svg)
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
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    var line = d3.line().x(function (d) {
      return xScale(d.year);
    }).y(function (d) {
      return yScale(d.share);
    }).curve(d3.curveCardinal);
    var svg = d3.select("#chart-container").append("svg").attr("id", "line-chart").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
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
    legend.append('text').attr('x', width - 25).attr('y', function (d, i) {
      return i * 20 + 9;
    }).text(function (d) {
      return d.name;
    });
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 8).attr("dy", ".7em").style("text-anchor", "end").text("Market Share (%)");
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
    }).attr("x", 36).attr("dy", ".85em").text(function (d) {
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
    debugger;
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
      debugger;
      d3.selectAll(".mouse-per-line").attr("transform", function (d, i) {
        var xYear = xScale.invert(mouse[0]),
            bisect = d3.bisector(function (d) {
          return d.year;
        }).right;
        var idx = bisect(d.values, xYear);
        var beginning = 0;
        var end = lines[i].getTotalLength();
        var target = null;

        while (true) {
          var _target = Math.floor((beginning + end) / 2);

          var _pos = lines[i].getPointAtLength(_target);

          if ((_target === end || _target === beginning) && _pos.x !== mouse[0]) {
            break;
          }

          if (_pos.x > mouse[0]) end = _target;else if (_pos.x < mouse[0]) beginning = _target;else break; //position found
        }

        debugger;
        d3.select(this).select('text').text(yScale.invert(pos.y).toFixed(2));
        debugger;
        return "translate(" + mouse[0] + "," + lines[i].getPointAtLength(target).y + ")";
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
  d3.select("#chart-container").append("svg").attr("id", "bar-chart").attr("width", 1200).attr("height", 700);
  var svg2 = d3.select("#bar-chart"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NjU1MSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ29ZZWFyQnJlYWtkb3duIiwiZ29HZW5kZXJCcmVha2Rvd24iLCJnb0JveE9mZmljZUJ1YmJsZSIsImdvTWFya2V0U2hhcmUiLCJlbGVtIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ5ZWFyQnJlYWtkb3duIiwiZ2VuZGVyRG9udXQiLCJib3hPZmZpY2VCdWJibGUiLCJtYXJrZXRTaGFyZSIsImRhdGFzZXQiLCJkaWFtZXRlciIsImNvbG9yMiIsImQzIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImRlZmF1bHRfaGVpZ2h0IiwiZGVmYXVsdF9yYXRpbyIsInNldF9zaXplIiwiY3VycmVudF93aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjdXJyZW50X2hlaWdodCIsImlubmVySGVpZ2h0IiwiY3VycmVudF9yYXRpbyIsImJ1YmJsZSIsInBhY2siLCJzaXplIiwicGFkZGluZyIsInN2ZzMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibm9kZXMiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwiYm94T2ZmaWNlIiwibm9kZSIsInNlbGVjdEFsbCIsImRhdGEiLCJkZXNjZW5kYW50cyIsImVudGVyIiwiZmlsdGVyIiwiY2hpbGRyZW4iLCJvbiIsImkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ4IiwieSIsInRleHQiLCJ0aXRsZSIsInN0dWRpbyIsInIiLCJzdHlsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlbGYiLCJmcmFtZUVsZW1lbnQiLCJ0b3RhbCIsImNvdW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiZG9udXRXaWR0aCIsImNvbG9yIiwic3ZnIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBpZSIsInZhbHVlIiwic29ydCIsImRvbnV0VGlwIiwicGF0aCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImVhc2UiLCJlYXNlTGluZWFyIiwiYXR0clR3ZWVuIiwidHdlZW5QaWUiLCJiIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsInQiLCJudW0iLCJyb3VuZCIsImh0bWwiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJsZWdlbmRSZWN0U2l6ZSIsImxlZ2VuZFNwYWNpbmciLCJsZWdlbmQiLCJkb21haW4iLCJvZmZzZXQiLCJsZW5ndGgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjc3YiLCJ0aGVuIiwiZ3JhcGgiLCJrZXlzIiwiY29sdW1ucyIsInNsaWNlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZm9yRWFjaCIsInhTY2FsZSIsInNjYWxlVGltZSIsInJhbmdlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ5QXhpcyIsImF4aXNMZWZ0IiwibGluZSIsInllYXIiLCJzaGFyZSIsImN1cnZlIiwiY3VydmVDYXJkaW5hbCIsImtleSIsImNvbXBhbmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZXMiLCJleHRlbnQiLCJjIiwidiIsImNhbGwiLCJjb21wYW55IiwiZGF0dW0iLCJtb3VzZUciLCJsaW5lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb3VzZVBlckxpbmUiLCJtb3VzZSIsInhZZWFyIiwiaW52ZXJ0IiwiYmlzZWN0IiwiYmlzZWN0b3IiLCJpZHgiLCJiZWdpbm5pbmciLCJlbmQiLCJnZXRUb3RhbExlbmd0aCIsInRhcmdldCIsImZsb29yIiwicG9zIiwiZ2V0UG9pbnRBdExlbmd0aCIsInRvRml4ZWQiLCJzdmcyIiwid2lkdGgyIiwiaGVpZ2h0MiIsInNjYWxlQmFuZCIsImciLCJ0aWNrRm9ybWF0IiwidGlja3MiLCJiYW5kd2lkdGgiLCJpc3N1ZXMiLCJkZWxheSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxRQUFRLENBQUNDLGFBQVQsQ0FB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LENBQXBCLEVBQXVCVSxDQUF2QixFQUEwQjtBQUN4QmpDLE1BQUUsQ0FBQ2lCLE1BQUgsQ0FBVSxJQUFWLEVBQWdCRSxJQUFoQixDQUFxQixPQUFyQixFQUE4QixLQUE5QjtBQUNBbkIsTUFBRSxDQUFDaUIsTUFBSCxDQUFVLElBQVYsRUFDR2lCLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHR2hCLElBSEgsQ0FHUSxPQUhSLEVBR2lCb0YsTUFBTSxDQUFDa0QsU0FBUCxFQUhqQixFQUlHdEksSUFKSCxDQUlRLEdBSlIsRUFJYSxVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPbUYsTUFBTSxDQUFDbkYsQ0FBQyxDQUFDbUksTUFBSCxDQUFiO0FBQTBCLEtBSnRELEVBS0d2SSxJQUxILENBS1EsUUFMUixFQUtrQixVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPNkgsT0FBTyxHQUFHMUMsTUFBTSxDQUFDbkYsQ0FBQyxDQUFDbUksTUFBSCxDQUF2QjtBQUFvQyxLQUxyRTtBQU9BMUosTUFBRSxDQUFDMEIsU0FBSCxDQUFhLE1BQWIsRUFDR2tJLE1BREg7QUFFRDtBQUNBLENBM0dNLEM7Ozs7Ozs7Ozs7O0FDQVAsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJztcbmltcG9ydCB7eWVhckJyZWFrZG93bn0gZnJvbSAnLi9zY3JpcHRzL21hcnZlbF95ZWFyX2J5X3llYXInO1xuaW1wb3J0IHtnZW5kZXJEb251dH0gZnJvbSAnLi9zY3JpcHRzL2dlbmRlcl9kb251dCc7XG5pbXBvcnQge2JveE9mZmljZUJ1YmJsZX0gZnJvbSAnLi9zY3JpcHRzL2JveF9vZmZpY2UnXG5pbXBvcnQge21hcmtldFNoYXJlfSBmcm9tICcuL3NjcmlwdHMvbWFya2V0X3NoYXJlJ1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvWWVhckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29HZW5kZXJCcmVha2Rvd24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQm94T2ZmaWNlQnViYmxlKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvTWFya2V0U2hhcmUpXG5cbmRlYnVnZ2VyXG5mdW5jdGlvbiBnb1llYXJCcmVha2Rvd24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG4gICAgXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhci1icmVha2Rvd25cIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICB5ZWFyQnJlYWtkb3duKCk7XG59XG5cbmZ1bmN0aW9uIGdvR2VuZGVyQnJlYWtkb3duICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VuZGVyLWJyZWFrZG93blwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIGdlbmRlckRvbnV0KCk7XG59XG5cbmZ1bmN0aW9uIGdvQm94T2ZmaWNlQnViYmxlICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveC1vZmZpY2VcIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBib3hPZmZpY2VCdWJibGUoKTtcbn1cblxuZnVuY3Rpb24gZ29NYXJrZXRTaGFyZSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtldC1zaGFyZVwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIG1hcmtldFNoYXJlKCk7XG59IiwiZXhwb3J0IGNvbnN0IGJveE9mZmljZUJ1YmJsZSA9ICgpID0+IHtcblxuY29uc3QgZGF0YXNldCA9IHtcbiAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogRW5kZ2FtZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjc5NzgwMDU2NCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBJbmZpbml0eSBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBdmVuZ2Vyc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTUxODgxMjk4OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEFnZSBvZiBVbHRyb25cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE0MDU0MDM2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsYWNrIFBhbnRoZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEzNDY5MTMxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluY3JlZGlibGVzIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEaXNuZXkvUGl4YXJcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTI0MjgwNTM1OVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXJvbiBNYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTIxNDgxMTI1MlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExNTMzMDQ0OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFxdWFtYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogRmFyIEZyb20gSG9tZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMzE5Mjc5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gTWFydmVsXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTI4Mjc0Nzk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHQgUmlzZXNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA4MTA0MTI4N1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSm9rZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA3NDI1MTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0XCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwMDQ1NTg0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg5MDg3MTYyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogSG9tZWNvbWluZ1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg4MDE2NjkyNFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF0bWFuIHYuIFN1cGVybWFuOiBEYXduIG9mIEp1c3RpY2VcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODczNjM0OTE5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eSBWb2wuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVub21cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTYwODUxNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRob3I6IFJhZ25hcm9rXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTM5NzcxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldvbmRlciBXb21hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4MjE3MDg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4ODk3NjQ1M1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2wgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4NTA0NjkyMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2xcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODMxMTI5NzlcbiAgICB9LFxuXG4gICAgXVxufVxuXG5jb25zdCBkaWFtZXRlciA9IDkwMDtcbmNvbnN0IGNvbG9yMiA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuY29uc3QgZGVmYXVsdF9oZWlnaHQgPSA2NTA7XG5jb25zdCBkZWZhdWx0X3JhdGlvID0gZGlhbWV0ZXIgLyBkZWZhdWx0X2hlaWdodDtcblxuXG5mdW5jdGlvbiBzZXRfc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgY3VycmVudF9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudF9yYXRpbyA9IGN1cnJlbnRfd2lkdGggLyBjdXJyZW50X2hlaWdodDtcblxuICAgIGlmIChjdXJyZW50X3JhdGlvID4gZGVmYXVsdF9yYXRpbykge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSAxMjAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDYwMDtcbiAgICB9XG59O1xuc2V0X3NpemUoKTtcblxuY29uc3QgYnViYmxlID0gZDMucGFjayhkYXRhc2V0KVxuICAgIC5zaXplKFtkaWFtZXRlciwgZGlhbWV0ZXJdKVxuICAgIC5wYWRkaW5nKC45KTtcblxuY29uc3Qgc3ZnMyA9IGQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImJ1YmJsZS1jaGFydFwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgZGlhbWV0ZXIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZGlhbWV0ZXIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJ1YmJsZVwiKTtcblxuY29uc3Qgbm9kZXMgPSBkMy5oaWVyYXJjaHkoZGF0YXNldClcbiAgICAuc3VtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmJveE9mZmljZTtcbiAgICB9KTtcblxuXG5jb25zdCBub2RlID0gc3ZnMy5zZWxlY3RBbGwoXCIubm9kZVwiKVxuICAgIC5kYXRhKGJ1YmJsZShub2RlcykuZGVzY2VuZGFudHMoKSlcbiAgICAuZW50ZXIoKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICFkLmNoaWxkcmVuXG4gICAgfSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCcxMDAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjcnKTtcbiAgICB9KVxuICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgfSlcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwidGl0bGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC50aXRsZTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJzdHVkaW9cIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5zdHVkaW87XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnI7XG4gICAgfSlcbiAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvcjIoaSk7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIuMDNlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YS50aXRsZTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjEuM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBkLmRhdGEuYm94T2ZmaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG4gICAgfSlcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yIC8gNTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5kMy5zZWxlY3Qoc2VsZi5mcmFtZUVsZW1lbnQpXG4gICAgLnN0eWxlKFwiaGVpZ2h0XCIsIGRpYW1ldGVyICsgXCJweFwiKTtcblxufSIsImV4cG9ydCBjb25zdCBnZW5kZXJEb251dCA9ICgpID0+IHtcblxuY29uc3QgdG90YWwgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJNYWxlXCIsXG4gICAgICAgIGNvdW50OiA4NTAyM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJGZW1hbGVcIixcbiAgICAgICAgY291bnQ6IDM3NzYyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk90aGVyXCIsXG4gICAgICAgIGNvdW50OiAxNjYyNlxuICAgIH1dXG5cbmNvbnN0IGhlaWdodCA9IDM2MDtcbmNvbnN0IHdpZHRoID0gMzYwO1xuY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyO1xuY29uc3QgZG9udXRXaWR0aCA9IDc1O1xuY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LWNoYXJ0XCIpXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0LWNoYXJ0JylcbiAgICAvLyAuYXBwZW5kKHN2ZylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAod2lkdGggLyAyKSArIFwiLFwiICsgKGhlaWdodCAvIDIpICsgJyknKVxuXG5jb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSBkb251dFdpZHRoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG5jb25zdCBwaWUgPSBkMy5waWUoKVxuICAgIC52YWx1ZShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5jb3VudFxuICAgIH0pXG4gICAgLnNvcnQobnVsbCk7XG5cbmNvbnN0IGRvbnV0VGlwID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiZG9udXQtdGlwXCIpXG4gICAgLnN0eWxlKFwib3BhY3RpeVwiLCAwKVxuXG5jb25zdCBwYXRoID0gc3ZnLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLmRhdGEocGllKHRvdGFsKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgYXJjKVxuICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yKGQuZGF0YS50aXRsZSlcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBvbk1vdXNlT3ZlcilcbiAgICAub24oXCJtb3VzZW91dFwiLCBvbk1vdXNlT3V0KVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgIC5kdXJhdGlvbigxNzAwKVxuICAgIC5hdHRyVHdlZW4oXCJkXCIsIHR3ZWVuUGllKVxuXG5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCAtMjUpXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiQ2hhcmFjdGVyIGdlbmRlciAoQWxsIFB1Ymxpc2hlcnMpXCIpXG5cbmZ1bmN0aW9uIHR3ZWVuUGllKGIpIHtcbiAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoeyBzdGFydEFuZ2xlOiAxLjEgKiBNYXRoLlBJLCBlbmRBbmdsZTogMS4xICogTWF0aC5QSSB9LCBiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGFyYyhpKHQpKTsgfTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpXG4gICAgZG9udXRUaXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIGxldCBudW0gPSAoTWF0aC5yb3VuZCgoZC5kYXRhLmNvdW50IC8gMTQwMDAwKSAqIDEwMCkpLnRvU3RyaW5nKCkgKyBcIiVcIlxuICAgIGRvbnV0VGlwLmh0bWwobnVtKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDEwKSArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDE1KSArIFwicHhcIilcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuICAgIGRvbnV0VGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbn1cblxuY29uc3QgbGVnZW5kUmVjdFNpemUgPSAxMDtcbmNvbnN0IGxlZ2VuZFNwYWNpbmcgPSAxMTtcblxuY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnLmxlZ2VuZCcpXG4gICAgLmRhdGEoY29sb3IuZG9tYWluKCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAnY2lyY2xlLWxlZ2VuZCcpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSBsZWdlbmRSZWN0U2l6ZSArIGxlZ2VuZFNwYWNpbmc7XG4gICAgICAgIGxldCBvZmZzZXQgPSBoZWlnaHQgKiBjb2xvci5kb21haW4oKS5sZW5ndGggLyAyO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbCA9IC0yICogbGVnZW5kUmVjdFNpemUgLSAxMztcbiAgICAgICAgbGV0IHZlcnRpY2FsID0gaSAqIGhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGhvcml6b250YWwgKyAnLCcgKyB2ZXJ0aWNhbCArICcpJztcbiAgICB9KVxuXG5sZWdlbmQuYXBwZW5kKCdjaXJjbGUnKVxuICAgIC5zdHlsZSgnZmlsbCcsIGNvbG9yKVxuICAgIC5zdHlsZSgnc3Ryb2tlJywgY29sb3IpXG4gICAgLmF0dHIoJ2N4JywgMClcbiAgICAuYXR0cignY3knLCAwKVxuICAgIC5hdHRyKCdyJywgJy41cmVtJylcblxubGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3gnLCBsZWdlbmRSZWN0U2l6ZSArIGxlZ2VuZFNwYWNpbmcgKyAyNSlcbiAgICAuYXR0cigneScsIGxlZ2VuZFJlY3RTaXplIC0gbGVnZW5kU3BhY2luZyArIDMpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQ7XG59KVxuXG59IiwiZXhwb3J0IGNvbnN0IG1hcmtldFNoYXJlID0gKCkgPT4ge1xuXG5kMy5jc3YoJy4uL2RhdGEvbWFya2V0X3NoYXJlLmNzdicpLnRoZW4oZCA9PiBncmFwaChkKSlcblxuXG5mdW5jdGlvbiBncmFwaChkYXRhKSB7XG5cbiAgICBjb25zdCBrZXlzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHt0b3A6MjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAyMCwgbGVmdDogNDB9XG4gICAgY29uc3Qgd2lkdGggPSA5MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tXG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZFxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsd2lkdGhdKVxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG4gICAgXG4gICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSlcbiAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHlTY2FsZSlcblxuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAueChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB4U2NhbGUoZC55ZWFyKVxuICAgIH0pXG4gICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geVNjYWxlKGQuc2hhcmUpXG4gICAgfSlcbiAgICAuY3VydmUoZDMuY3VydmVDYXJkaW5hbClcbiAgICBcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImxpbmUtY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKVxuXG4gICAgY29sb3IuZG9tYWluKGQzLmtleXMoZGF0YVswXSkuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICE9PSBcInllYXJcIlxuICAgIH0pKVxuXG4gICAgY29uc3QgY29tcGFuaWVzID0gY29sb3IuZG9tYWluKCkubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBkLnllYXIsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlOiArZFtuYW1lXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgeFNjYWxlLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC55ZWFyXG4gICAgfSkpXG5cbiAgICB5U2NhbGUuZG9tYWluKFtcbiAgICAgICAgZDMubWluKGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIGQzLm1pbihjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gZDMubWF4KGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICA1MFxuICAgIF0pXG5cbiAgICBjb25zdCBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDIwKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAyMFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuICAgIFxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gMjUpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGkgKiAyMCkgKyA5O1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKHhBeGlzKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgICAuY2FsbCh5QXhpcylcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgOClcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi43ZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLnRleHQoXCJNYXJrZXQgU2hhcmUgKCUpXCIpXG5cbiAgICBjb25zdCBjb21wYW55ID0gc3ZnLnNlbGVjdEFsbChcIi5jb21wYW55XCIpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbXBhbnlcIilcblxuICAgIGNvbXBhbnkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpXG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuXG4gICAgZGVidWdnZXJcbiAgICBjb21wYW55LmFwcGVuZChcInRleHRcIilcbiAgICAuZGF0dW0oZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKGQudmFsdWUueWVhcikgKyBcIixcIiArIHlTY2FsZShkLnZhbHVlLnNoYXJlKSArIFwiKVwiXG4gICAgfSlcbiAgICAuYXR0cihcInhcIiwgMzYpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi44NWVtXCIpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgfSlcbiAgICBcbiAgICAvLyBDcmVkaXQgdG8gbGFyc2VubXRsKGJsLm9ja3Mub3JnL2xhcnNlbm10bClcbiAgICBjb25zdCBtb3VzZUcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2Utb3Zlci1lZmZlY3RzXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZChcInBhdGhcIikgLy8gdGhpcyBpcyB0aGUgYmxhY2sgdmVydGljYWwgbGluZSB0byBmb2xsb3cgbW91c2VcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLWxpbmVcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuXG4gICAgY29uc3QgbGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lJyk7XG5cbiAgICBjb25zdCBtb3VzZVBlckxpbmUgPSBtb3VzZUcuc2VsZWN0QWxsKCcubW91c2UtcGVyLWxpbmUnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1wZXItbGluZVwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwLDMpXCIpO1xuICAgIGRlYnVnZ2VyXG4gICAgbW91c2VHLmFwcGVuZCgnc3ZnOnJlY3QnKSAvLyBhcHBlbmQgYSByZWN0IHRvIGNhdGNoIG1vdXNlIG1vdmVtZW50cyBvbiBjYW52YXNcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpIC8vIGNhbid0IGNhdGNoIG1vdXNlIGV2ZW50cyBvbiBhIGcgZWxlbWVudFxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIG91dCBoaWRlIGxpbmUsIGNpcmNsZXMgYW5kIHRleHRcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgdGV4dFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHsgLy8gb24gbW91c2UgaW4gc2hvdyBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdXNlIG1vdmluZyBvdmVyIGNhbnZhc1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBcIk1cIiArIG1vdXNlWzBdICsgXCIsXCIgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gXCIgXCIgKyBtb3VzZVswXSArIFwiLFwiICsgMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeFllYXIgPSB4U2NhbGUuaW52ZXJ0KG1vdXNlWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpc2VjdCA9IGQzLmJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBiaXNlY3QoZC52YWx1ZXMsIHhZZWFyKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmVnaW5uaW5nID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGluZXNbaV0uZ2V0VG90YWxMZW5ndGgoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IE1hdGguZmxvb3IoKGJlZ2lubmluZyArIGVuZCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9PT0gZW5kIHx8IHRhcmdldCA9PT0gYmVnaW5uaW5nKSAmJiBwb3MueCAhPT0gbW91c2VbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MueCA+IG1vdXNlWzBdKSBlbmQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCA8IG1vdXNlWzBdKSBiZWdpbm5pbmcgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGJyZWFrOyAvL3Bvc2l0aW9uIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dCh5U2NhbGUuaW52ZXJ0KHBvcy55KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbW91c2VbMF0gKyBcIixcIiArIGxpbmVzW2ldLmdldFBvaW50QXRMZW5ndGgodGFyZ2V0KS55ICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG59XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHllYXJCcmVha2Rvd24gPSAoKSA9PiB7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgLmFwcGVuZChcInN2Z1wiKVxuICAuYXR0cihcImlkXCIsIFwiYmFyLWNoYXJ0XCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgMTIwMClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgNzAwKVxuXG5jb25zdCBzdmcyID0gZDMuc2VsZWN0KFwiI2Jhci1jaGFydFwiKSxcbiAgbWFyZ2luID0gMTUwLFxuICB3aWR0aDIgPSBzdmcyLmF0dHIoXCJ3aWR0aFwiKSAtIG1hcmdpbixcbiAgaGVpZ2h0MiA9IHN2ZzIuYXR0cihcImhlaWdodFwiKSAtIG1hcmdpbjtcblxuXG5jb25zdCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGgyXSkucGFkZGluZygwLjYpLFxuICB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQyLCAwXSk7XG5cbmNvbnN0IGcgPSBzdmcyLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuZDMuY3N2KFwiLi9kYXRhL3llYXJEYXRhLmNzdlwiKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gIHhTY2FsZS5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkpO1xuICB5U2NhbGUuZG9tYWluKFswLCAxMzAwXSk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodDIgKyBcIilcIilcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInlcIiwgaGVpZ2h0MiAtIDIwMClcbiAgICAuYXR0cihcInhcIiwgd2lkdGgyIC0gMTAwKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgLnRleHQoXCJZZWFyXCIpO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSlcbiAgICAgIC50aWNrRm9ybWF0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSkudGlja3MoMTApKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgIC5hdHRyKFwieVwiLCA2KVxuICAgIC5hdHRyKFwiZHlcIiwgXCItNS4xZW1cIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiKFVuaXF1ZSkgaXNzdWVzIHJlbGVhc2VkXCIpO1xuXG4gIHN2ZzIuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCA1MClcbiAgICAuYXR0cihcInlcIiwgNTApXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyNHB4XCIpXG4gICAgLnRleHQoXCIjIG9mIHJlbGVhc2VzIChNYXJ2ZWwpXCIpXG5cbiAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBvbk1vdXNlT3ZlcilcbiAgICAub24oXCJtb3VzZW91dFwiLCBvbk1vdXNlT3V0KVxuICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQueWVhcik7IH0pXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoMCk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoMCk7IH0pO1xuXG4gIHN2ZzIuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTIwMClcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIChpICogMTMpIH0pXG59KTtcblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnLCAnaGlnaGxpZ2h0Jyk7XG4gIGQzLnNlbGVjdCh0aGlzKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSArIDIpXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIC0gMTA7IH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpICsgMTA7IH0pO1xuXG4gIGcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKCdjbGFzcycsICd2YWwnKVxuICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHhTY2FsZShkLnllYXIpICsgMTA7XG4gICAgfSlcbiAgICAuYXR0cigneScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIC0gMjA7XG4gICAgfSlcbiAgICAudGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW2QuaXNzdWVzXTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdjbGFzcycsICdiYXInKTtcbiAgZDMuc2VsZWN0KHRoaXMpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig0MDApXG4gICAgLmF0dHIoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3Vlcyk7IH0pO1xuXG4gIGQzLnNlbGVjdEFsbCgnLnZhbCcpXG4gICAgLnJlbW92ZSgpXG59XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9