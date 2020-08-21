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

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
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

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
    document.querySelector("#gender-breakdown").removeAttribute("class");
  }

  var button = document.getElementById("box-office");
  button.classList.add("clicked");
  var body = document.getElementById("body");
  debugger;
  d3.select(body).transition("500").attr("background-image", "background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%");
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

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
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
  var default_height = 750;
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
  var height = 540;
  var width = 540;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 100;
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  d3.select("#chart-container").append("svg").attr("id", "donut-chart");
  var svg = d3.select('#donut-chart') // .append(svg)
  .attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + "," + height / 2 + ')');
  var arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);
  var pie = d3.pie().value(function (d) {
    return d.count;
  }).sort(null);
  var donutTip = d3.select("body").append("div").attr("id", "donut-tip").style("opacity", 0);
  var path = svg.selectAll('path').data(pie(total)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
    return color(d.data.title);
  }).on("mouseover", onMouseOver).on("mouseout", onMouseOut).attr('transform', 'translate(0,0)').transition().ease(d3.easeLinear).duration(1700).attrTween("d", tweenPie);
  svg.append("text").attr("transform", "translate(100,0)").attr("x", -25).attr("y", 50).text("Character gender (All Publishers)");

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
    donutTip.html(num).style("left", d3.event.pageX + 210 + "px").style("top", d3.event.pageY - 315 + "px");
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
    var xScale = d3.scaleLinear().range([0, width]);
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
  d3.select("#chart-container").append("svg").attr("id", "bar-chart").attr("width", 1200).attr("height", 500);
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
    g.append("text").attr('class', 'val').attr('id', 'issues').attr('x', function () {
      return 590;
    }).attr('y', function () {
      return 10;
    }).text(function () {
      return "".concat([d.issues], " issues released in ").concat(d.year);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NjU1MSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ29ZZWFyQnJlYWtkb3duIiwiZ29HZW5kZXJCcmVha2Rvd24iLCJnb0JveE9mZmljZUJ1YmJsZSIsImdvTWFya2V0U2hhcmUiLCJlbGVtIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiZWxlbTIiLCJidXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInllYXJCcmVha2Rvd24iLCJnZW5kZXJEb251dCIsImJvZHkiLCJkMyIsInNlbGVjdCIsInRyYW5zaXRpb24iLCJhdHRyIiwiYm94T2ZmaWNlQnViYmxlIiwibWFya2V0U2hhcmUiLCJkYXRhc2V0IiwiZGlhbWV0ZXIiLCJjb2xvcjIiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZGVmYXVsdF9oZWlnaHQiLCJkZWZhdWx0X3JhdGlvIiwic2V0X3NpemUiLCJjdXJyZW50X3dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImN1cnJlbnRfaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdXJyZW50X3JhdGlvIiwiYnViYmxlIiwicGFjayIsInNpemUiLCJwYWRkaW5nIiwic3ZnMyIsImFwcGVuZCIsIm5vZGVzIiwiaGllcmFyY2h5Iiwic3VtIiwiZCIsImJveE9mZmljZSIsIm5vZGUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZGVzY2VuZGFudHMiLCJlbnRlciIsImZpbHRlciIsImNoaWxkcmVuIiwib24iLCJpIiwiZHVyYXRpb24iLCJ4IiwieSIsInRleHQiLCJ0aXRsZSIsInN0dWRpbyIsInIiLCJzdHlsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlbGYiLCJmcmFtZUVsZW1lbnQiLCJ0b3RhbCIsImNvdW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiZG9udXRXaWR0aCIsImNvbG9yIiwic3ZnIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBpZSIsInZhbHVlIiwic29ydCIsImRvbnV0VGlwIiwicGF0aCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImVhc2UiLCJlYXNlTGluZWFyIiwiYXR0clR3ZWVuIiwidHdlZW5QaWUiLCJiIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsInQiLCJudW0iLCJyb3VuZCIsImh0bWwiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJsZWdlbmRSZWN0U2l6ZSIsImxlZ2VuZFNwYWNpbmciLCJsZWdlbmQiLCJkb21haW4iLCJvZmZzZXQiLCJsZW5ndGgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjc3YiLCJ0aGVuIiwiZ3JhcGgiLCJrZXlzIiwiY29sdW1ucyIsInNsaWNlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInlTY2FsZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInlBeGlzIiwiYXhpc0xlZnQiLCJsaW5lIiwieWVhciIsInNoYXJlIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwia2V5IiwiY29tcGFuaWVzIiwibWFwIiwibmFtZSIsInZhbHVlcyIsImV4dGVudCIsImMiLCJ2IiwiY2FsbCIsImNvbXBhbnkiLCJkYXR1bSIsIm1vdXNlRyIsImxpbmVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdXNlUGVyTGluZSIsIm1vdXNlIiwieFllYXIiLCJpbnZlcnQiLCJiaXNlY3QiLCJiaXNlY3RvciIsImlkeCIsImJlZ2lubmluZyIsImVuZCIsImdldFRvdGFsTGVuZ3RoIiwidGFyZ2V0IiwiZmxvb3IiLCJwb3MiLCJnZXRQb2ludEF0TGVuZ3RoIiwidG9GaXhlZCIsInN2ZzIiLCJ3aWR0aDIiLCJoZWlnaHQyIiwic2NhbGVCYW5kIiwiZyIsInRpY2tGb3JtYXQiLCJ0aWNrcyIsImJhbmR3aWR0aCIsImlzc3VlcyIsImRlbGF5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFB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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYm94X29mZmljZSc7XG5pbXBvcnQge3llYXJCcmVha2Rvd259IGZyb20gJy4vc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyJztcbmltcG9ydCB7Z2VuZGVyRG9udXR9IGZyb20gJy4vc2NyaXB0cy9nZW5kZXJfZG9udXQnO1xuaW1wb3J0IHtib3hPZmZpY2VCdWJibGV9IGZyb20gJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJ1xuaW1wb3J0IHttYXJrZXRTaGFyZX0gZnJvbSAnLi9zY3JpcHRzL21hcmtldF9zaGFyZSdcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1llYXJCcmVha2Rvd24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvR2VuZGVyQnJlYWtkb3duKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0JveE9mZmljZUJ1YmJsZSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb01hcmtldFNoYXJlKVxuXG5kZWJ1Z2dlclxuZnVuY3Rpb24gZ29ZZWFyQnJlYWtkb3duICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGxldCBlbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb251dC10aXAnKVxuICAgICAgICBlbGVtMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0yKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cbiAgICBcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyLWJyZWFrZG93blwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIHllYXJCcmVha2Rvd24oKTtcbn1cblxuZnVuY3Rpb24gZ29HZW5kZXJCcmVha2Rvd24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5kZXItYnJlYWtkb3duXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4gICAgZ2VuZGVyRG9udXQoKTtcbn1cblxuZnVuY3Rpb24gZ29Cb3hPZmZpY2VCdWJibGUgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgbGV0IGVsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbnV0LXRpcCcpXG4gICAgICAgIGVsZW0yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbTIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveC1vZmZpY2VcIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKVxuICAgIGRlYnVnZ2VyXG4gICAgZDMuc2VsZWN0KGJvZHkpLnRyYW5zaXRpb24oXCI1MDBcIikuYXR0cihcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIDI0OHB4IGF0IGNlbnRlciwgIzE2ZDllMyAwJSwgIzMwYzdlYyA0NyUsICM0NmFlZjcgMTAwJVwiKTtcbiAgICBib3hPZmZpY2VCdWJibGUoKTtcbn1cblxuZnVuY3Rpb24gZ29NYXJrZXRTaGFyZSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBsZXQgZWxlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9udXQtdGlwJylcbiAgICAgICAgZWxlbTIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtMilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrZXQtc2hhcmVcIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBtYXJrZXRTaGFyZSgpO1xufSIsImV4cG9ydCBjb25zdCBib3hPZmZpY2VCdWJibGUgPSAoKSA9PiB7XG5cbmNvbnN0IGRhdGFzZXQgPSB7XG4gICAgXCJjaGlsZHJlblwiOiBbe1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEVuZGdhbWVcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDI3OTc4MDA1NjQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogSW5maW5pdHkgV2FyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAyMDQ4MzU5NzU0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQXZlbmdlcnNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE1MTg4MTI5ODhcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBBZ2Ugb2YgVWx0cm9uXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxNDA1NDAzNjk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCbGFjayBQYW50aGVyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMzQ2OTEzMTcxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbmNyZWRpYmxlcyAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiRGlzbmV5L1BpeGFyXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEyNDI4MDUzNTlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklyb24gTWFuIDNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEyMTQ4MTEyNTJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gQW1lcmljYTogQ2l2aWwgV2FyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTUzMzA0NDk1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcXVhbWFuXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW46IEZhciBGcm9tIEhvbWVcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTMxOTI3OTk2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXB0YWluIE1hcnZlbFwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTEyODI3NDc5NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0IFJpc2VzXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwODEwNDEyODdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkpva2VyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwNzQyNTEzMTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEYXJrIEtuaWdodFwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMDA0NTU4NDQ0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuIDNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4OTA4NzE2MjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW46IEhvbWVjb21pbmdcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4ODAxNjY5MjRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJhdG1hbiB2LiBTdXBlcm1hbjogRGF3biBvZiBKdXN0aWNlXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg3MzYzNDkxOVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3VhcmRpYW5zIG9mIHRoZSBHYWxheHkgVm9sLiAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZlbm9tXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODU2MDg1MTUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaG9yOiBSYWduYXJva1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODUzOTc3MTI2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXb25kZXIgV29tYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODYzNzU2MDUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODIxNzA4NTUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODg5NzY0NTNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYWRwb29sIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODUwNDY5MjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYWRwb29sXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsLzIwdGggQ2VudHVyeSBGb3hcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogNzgzMTEyOTc5XG4gICAgfSxcblxuICAgIF1cbn1cblxubGV0IGRpYW1ldGVyID0gOTAwO1xuY29uc3QgY29sb3IyID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuXG5jb25zdCBkZWZhdWx0X2hlaWdodCA9IDc1MDtcbmNvbnN0IGRlZmF1bHRfcmF0aW8gPSBkaWFtZXRlciAvIGRlZmF1bHRfaGVpZ2h0O1xuXG5cbmZ1bmN0aW9uIHNldF9zaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBjdXJyZW50X2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdXJyZW50X3JhdGlvID0gY3VycmVudF93aWR0aCAvIGN1cnJlbnRfaGVpZ2h0O1xuXG4gICAgaWYgKGN1cnJlbnRfcmF0aW8gPiBkZWZhdWx0X3JhdGlvKSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDEyMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpYW1ldGVyID0gNjAwO1xuICAgIH1cbn07XG5zZXRfc2l6ZSgpO1xuXG5jb25zdCBidWJibGUgPSBkMy5wYWNrKGRhdGFzZXQpXG4gICAgLnNpemUoW2RpYW1ldGVyLCBkaWFtZXRlcl0pXG4gICAgLnBhZGRpbmcoLjkpO1xuXG5jb25zdCBzdmczID0gZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiYnViYmxlLWNoYXJ0XCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImhlaWdodFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYnViYmxlXCIpO1xuXG5jb25zdCBub2RlcyA9IGQzLmhpZXJhcmNoeShkYXRhc2V0KVxuICAgIC5zdW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuYm94T2ZmaWNlO1xuICAgIH0pO1xuXG5cbmNvbnN0IG5vZGUgPSBzdmczLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgLmRhdGEoYnViYmxlKG5vZGVzKS5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gIWQuY2hpbGRyZW5cbiAgICB9KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNycpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0aXRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnRpdGxlO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInN0dWRpb1wiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnN0dWRpbztcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucjtcbiAgICB9KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yMihpKTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4wM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLnRpdGxlO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMS4zZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGQuZGF0YS5ib3hPZmZpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmQzLnNlbGVjdChzZWxmLmZyYW1lRWxlbWVudClcbiAgICAuc3R5bGUoXCJoZWlnaHRcIiwgZGlhbWV0ZXIgKyBcInB4XCIpO1xuXG59IiwiZXhwb3J0IGNvbnN0IGdlbmRlckRvbnV0ID0gKCkgPT4ge1xuXG5jb25zdCB0b3RhbCA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1hbGVcIixcbiAgICAgICAgY291bnQ6IDg1MDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlbWFsZVwiLFxuICAgICAgICBjb3VudDogMzc3NjJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiT3RoZXJcIixcbiAgICAgICAgY291bnQ6IDE2NjI2XG4gICAgfV1cblxuY29uc3QgaGVpZ2h0ID0gNTQwO1xuY29uc3Qgd2lkdGggPSA1NDA7XG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDI7XG5jb25zdCBkb251dFdpZHRoID0gMTAwO1xuY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LWNoYXJ0XCIpXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0LWNoYXJ0JylcbiAgICAvLyAuYXBwZW5kKHN2ZylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAod2lkdGggLyAyKSArIFwiLFwiICsgKGhlaWdodCAvIDIpICsgJyknKVxuXG5jb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSBkb251dFdpZHRoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG5jb25zdCBwaWUgPSBkMy5waWUoKVxuICAgIC52YWx1ZShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5jb3VudFxuICAgIH0pXG4gICAgLnNvcnQobnVsbCk7XG5cbmNvbnN0IGRvbnV0VGlwID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtdGlwXCIpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXG5jb25zdCBwYXRoID0gc3ZnLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLmRhdGEocGllKHRvdGFsKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgYXJjKVxuICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yKGQuZGF0YS50aXRsZSlcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBvbk1vdXNlT3ZlcilcbiAgICAub24oXCJtb3VzZW91dFwiLCBvbk1vdXNlT3V0KVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgIC5kdXJhdGlvbigxNzAwKVxuICAgIC5hdHRyVHdlZW4oXCJkXCIsIHR3ZWVuUGllKVxuXG5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCAtMjUpXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC50ZXh0KFwiQ2hhcmFjdGVyIGdlbmRlciAoQWxsIFB1Ymxpc2hlcnMpXCIpXG5cbmZ1bmN0aW9uIHR3ZWVuUGllKGIpIHtcbiAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoeyBzdGFydEFuZ2xlOiAxLjEgKiBNYXRoLlBJLCBlbmRBbmdsZTogMS4xICogTWF0aC5QSSB9LCBiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGFyYyhpKHQpKTsgfTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpXG4gICAgZG9udXRUaXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIGxldCBudW0gPSAoTWF0aC5yb3VuZCgoZC5kYXRhLmNvdW50IC8gMTQwMDAwKSAqIDEwMCkpLnRvU3RyaW5nKCkgKyBcIiVcIlxuICAgIGRvbnV0VGlwLmh0bWwobnVtKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDIxMCkgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAzMTUpICsgXCJweFwiKVxufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGQsIGkpIHtcbiAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgZG9udXRUaXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxufVxuXG5jb25zdCBsZWdlbmRSZWN0U2l6ZSA9IDEwO1xuY29uc3QgbGVnZW5kU3BhY2luZyA9IDExO1xuXG5jb25zdCBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJylcbiAgICAuZGF0YShjb2xvci5kb21haW4oKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdjbGFzcycsICdjaXJjbGUtbGVnZW5kJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZztcbiAgICAgICAgbGV0IG9mZnNldCA9IGhlaWdodCAqIGNvbG9yLmRvbWFpbigpLmxlbmd0aCAvIDI7XG4gICAgICAgIGxldCBob3Jpem9udGFsID0gLTIgKiBsZWdlbmRSZWN0U2l6ZSAtIDEzO1xuICAgICAgICBsZXQgdmVydGljYWwgPSBpICogaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgaG9yaXpvbnRhbCArICcsJyArIHZlcnRpY2FsICsgJyknO1xuICAgIH0pXG5cbmxlZ2VuZC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgLnN0eWxlKCdmaWxsJywgY29sb3IpXG4gICAgLnN0eWxlKCdzdHJva2UnLCBjb2xvcilcbiAgICAuYXR0cignY3gnLCAwKVxuICAgIC5hdHRyKCdjeScsIDApXG4gICAgLmF0dHIoJ3InLCAnLjVyZW0nKVxuXG5sZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cigneCcsIGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZyArIDI1KVxuICAgIC5hdHRyKCd5JywgbGVnZW5kUmVjdFNpemUgLSBsZWdlbmRTcGFjaW5nICsgMylcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbn0pXG5cbn0iLCJleHBvcnQgY29uc3QgbWFya2V0U2hhcmUgPSAoKSA9PiB7XG5cbmQzLmNzdignLi4vZGF0YS9tYXJrZXRfc2hhcmUuY3N2JykudGhlbihkID0+IGdyYXBoKGQpKVxuXG5cbmZ1bmN0aW9uIGdyYXBoKGRhdGEpIHtcblxuICAgIGNvbnN0IGtleXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSk7XG4gICAgY29uc3QgbWFyZ2luID0ge3RvcDoyMCwgcmlnaHQ6IDQwLCBib3R0b206IDIwLCBsZWZ0OiA0MH1cbiAgICBjb25zdCB3aWR0aCA9IDkwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0XG4gICAgY29uc3QgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b21cbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLHdpZHRoXSlcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5U2NhbGUpXG5cbiAgICBcbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgLngoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geFNjYWxlKGQueWVhcilcbiAgICB9KVxuICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHlTY2FsZShkLnNoYXJlKVxuICAgIH0pXG4gICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpXG4gICAgXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgXCJsaW5lLWNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcblxuICAgIGNvbG9yLmRvbWFpbihkMy5rZXlzKGRhdGFbMF0pLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gXCJ5ZWFyXCJcbiAgICB9KSlcblxuICAgIGNvbnN0IGNvbXBhbmllcyA9IGNvbG9yLmRvbWFpbigpLm1hcChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogZC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZTogK2RbbmFtZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHhTY2FsZS5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueWVhclxuICAgIH0pKVxuXG4gICAgeVNjYWxlLmRvbWFpbihbXG4gICAgICAgIGQzLm1pbihjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5taW4oYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGQzLm1heChjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgNTBcbiAgICBdKVxuXG4gICAgY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLSAyMClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogMjBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcbiAgICBcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDI1KVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIChpICogMjApICsgOTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQubmFtZVxuICAgICAgICB9KVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAuY2FsbCh4QXhpcylcblxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmNhbGwoeUF4aXMpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDgpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuN2VtXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgIC50ZXh0KFwiTWFya2V0IFNoYXJlICglKVwiKVxuXG4gICAgY29uc3QgY29tcGFueSA9IHN2Zy5zZWxlY3RBbGwoXCIuY29tcGFueVwiKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb21wYW55XCIpXG5cbiAgICBjb21wYW55LmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKVxuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcblxuICAgIGRlYnVnZ2VyXG4gICAgY29tcGFueS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmRhdHVtKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHhTY2FsZShkLnZhbHVlLnllYXIpICsgXCIsXCIgKyB5U2NhbGUoZC52YWx1ZS5zaGFyZSkgKyBcIilcIlxuICAgIH0pXG4gICAgLmF0dHIoXCJ4XCIsIDM2KVxuICAgIC5hdHRyKFwiZHlcIiwgXCIuODVlbVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubmFtZVxuICAgIH0pXG4gICAgXG4gICAgLy8gQ3JlZGl0IHRvIGxhcnNlbm10bChibC5vY2tzLm9yZy9sYXJzZW5tdGwpXG4gICAgY29uc3QgbW91c2VHID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLW92ZXItZWZmZWN0c1wiKTtcblxuICAgIG1vdXNlRy5hcHBlbmQoXCJwYXRoXCIpIC8vIHRoaXMgaXMgdGhlIGJsYWNrIHZlcnRpY2FsIGxpbmUgdG8gZm9sbG93IG1vdXNlXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1saW5lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIGNvbnN0IGxpbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZScpO1xuXG4gICAgY29uc3QgbW91c2VQZXJMaW5lID0gbW91c2VHLnNlbGVjdEFsbCgnLm1vdXNlLXBlci1saW5lJylcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2UtcGVyLWxpbmVcIik7XG5cbiAgICBtb3VzZVBlckxpbmUuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiclwiLCA3KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG5cbiAgICBtb3VzZVBlckxpbmUuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMCwzKVwiKTtcbiAgICBkZWJ1Z2dlclxuICAgIG1vdXNlRy5hcHBlbmQoJ3N2ZzpyZWN0JykgLy8gYXBwZW5kIGEgcmVjdCB0byBjYXRjaCBtb3VzZSBtb3ZlbWVudHMgb24gY2FudmFzXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKSAvLyBjYW4ndCBjYXRjaCBtb3VzZSBldmVudHMgb24gYSBnIGVsZW1lbnRcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5hdHRyKCdwb2ludGVyLWV2ZW50cycsICdhbGwnKVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkgeyAvLyBvbiBtb3VzZSBvdXQgaGlkZSBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIGluIHNob3cgbGluZSwgY2lyY2xlcyBhbmQgdGV4dFxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLm1vdXNlLWxpbmVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSBjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSB0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkgeyAvLyBtb3VzZSBtb3Zpbmcgb3ZlciBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2UodGhpcyk7XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkID0gXCJNXCIgKyBtb3VzZVswXSArIFwiLFwiICsgaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkICs9IFwiIFwiICsgbW91c2VbMF0gKyBcIixcIiArIDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhZZWFyID0geFNjYWxlLmludmVydChtb3VzZVswXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXNlY3QgPSBkMy5iaXNlY3RvcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC55ZWFyOyB9KS5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gYmlzZWN0KGQudmFsdWVzLCB4WWVhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlZ2lubmluZyA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxpbmVzW2ldLmdldFRvdGFsTGVuZ3RoKClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBNYXRoLmZsb29yKChiZWdpbm5pbmcgKyBlbmQpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gbGluZXNbaV0uZ2V0UG9pbnRBdExlbmd0aCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0YXJnZXQgPT09IGVuZCB8fCB0YXJnZXQgPT09IGJlZ2lubmluZykgJiYgcG9zLnggIT09IG1vdXNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggPiBtb3VzZVswXSkgZW5kID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zLnggPCBtb3VzZVswXSkgYmVnaW5uaW5nID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhazsgLy9wb3NpdGlvbiBmb3VuZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoeVNjYWxlLmludmVydChwb3MueSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIG1vdXNlWzBdICsgXCIsXCIgKyBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCkueSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxufVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCB5ZWFyQnJlYWtkb3duID0gKCkgPT4ge1xuXG5kMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJpZFwiLCBcImJhci1jaGFydFwiKVxuICAuYXR0cihcIndpZHRoXCIsIDEyMDApXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMClcblxuY29uc3Qgc3ZnMiA9IGQzLnNlbGVjdChcIiNiYXItY2hhcnRcIiksXG4gIG1hcmdpbiA9IDE1MCxcbiAgd2lkdGgyID0gc3ZnMi5hdHRyKFwid2lkdGhcIikgLSBtYXJnaW4sXG4gIGhlaWdodDIgPSBzdmcyLmF0dHIoXCJoZWlnaHRcIikgLSBtYXJnaW47XG5cblxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoMl0pLnBhZGRpbmcoMC42KSxcbiAgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0MiwgMF0pO1xuXG5jb25zdCBnID0gc3ZnMi5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgMTAwICsgXCIsXCIgKyAxMDAgKyBcIilcIik7XG5cbmQzLmNzdihcIi4vZGF0YS95ZWFyRGF0YS5jc3ZcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICB4U2NhbGUuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pKTtcbiAgeVNjYWxlLmRvbWFpbihbMCwgMTMwMF0pO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQyICsgXCIpXCIpXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIGhlaWdodDIgLSAyMDApXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoMiAtIDEwMClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiWWVhclwiKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLnRpY2tzKDEwKSlcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgNilcbiAgICAuYXR0cihcImR5XCIsIFwiLTUuMWVtXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAudGV4dChcIihVbmlxdWUpIGlzc3VlcyByZWxlYXNlZFwiKTtcblxuICBzdmcyLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiIyBvZiByZWxlYXNlcyAoTWFydmVsKVwiKVxuXG4gIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLnllYXIpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKDApOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKDApOyB9KTtcblxuICBzdmcyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqIDEzKSB9KVxufSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2hpZ2hsaWdodCcpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAyKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDEwOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKSArIDEwOyB9KTtcblxuICBnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cignY2xhc3MnLCAndmFsJylcbiAgICAuYXR0cignaWQnLCAnaXNzdWVzJylcbiAgICAuYXR0cigneCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA1OTA7XG4gICAgfSlcbiAgICAuYXR0cigneScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAxMDtcbiAgICB9KVxuICAgIC50ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgJHtbZC5pc3N1ZXNdfSBpc3N1ZXMgcmVsZWFzZWQgaW4gJHtkLnllYXJ9YDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdjbGFzcycsICdiYXInKTtcbiAgZDMuc2VsZWN0KHRoaXMpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig0MDApXG4gICAgLmF0dHIoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3Vlcyk7IH0pO1xuXG4gIGQzLnNlbGVjdEFsbCgnLnZhbCcpXG4gICAgLnJlbW92ZSgpXG59XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9