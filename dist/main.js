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
  body.setAttribute("style", "background: linear-gradient(to bottom, #43cea2, #185a9d);");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NjU1MSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ29ZZWFyQnJlYWtkb3duIiwiZ29HZW5kZXJCcmVha2Rvd24iLCJnb0JveE9mZmljZUJ1YmJsZSIsImdvTWFya2V0U2hhcmUiLCJlbGVtIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiZWxlbTIiLCJidXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInllYXJCcmVha2Rvd24iLCJnZW5kZXJEb251dCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJib3hPZmZpY2VCdWJibGUiLCJtYXJrZXRTaGFyZSIsImRhdGFzZXQiLCJkaWFtZXRlciIsImNvbG9yMiIsImQzIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImRlZmF1bHRfaGVpZ2h0IiwiZGVmYXVsdF9yYXRpbyIsInNldF9zaXplIiwiY3VycmVudF93aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjdXJyZW50X2hlaWdodCIsImlubmVySGVpZ2h0IiwiY3VycmVudF9yYXRpbyIsImJ1YmJsZSIsInBhY2siLCJzaXplIiwicGFkZGluZyIsInN2ZzMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibm9kZXMiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwiYm94T2ZmaWNlIiwibm9kZSIsInNlbGVjdEFsbCIsImRhdGEiLCJkZXNjZW5kYW50cyIsImVudGVyIiwiZmlsdGVyIiwiY2hpbGRyZW4iLCJvbiIsImkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ4IiwieSIsInRleHQiLCJ0aXRsZSIsInN0dWRpbyIsInIiLCJzdHlsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlbGYiLCJmcmFtZUVsZW1lbnQiLCJ0b3RhbCIsImNvdW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiZG9udXRXaWR0aCIsImNvbG9yIiwic3ZnIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBpZSIsInZhbHVlIiwic29ydCIsImRvbnV0VGlwIiwicGF0aCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImVhc2UiLCJlYXNlTGluZWFyIiwiYXR0clR3ZWVuIiwidHdlZW5QaWUiLCJiIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsInQiLCJudW0iLCJyb3VuZCIsImh0bWwiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJsZWdlbmRSZWN0U2l6ZSIsImxlZ2VuZFNwYWNpbmciLCJsZWdlbmQiLCJkb21haW4iLCJvZmZzZXQiLCJsZW5ndGgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjc3YiLCJ0aGVuIiwiZ3JhcGgiLCJrZXlzIiwiY29sdW1ucyIsInNsaWNlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInlTY2FsZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInlBeGlzIiwiYXhpc0xlZnQiLCJsaW5lIiwieWVhciIsInNoYXJlIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwia2V5IiwiY29tcGFuaWVzIiwibWFwIiwibmFtZSIsInZhbHVlcyIsImV4dGVudCIsImMiLCJ2IiwiY2FsbCIsImNvbXBhbnkiLCJkYXR1bSIsIm1vdXNlRyIsImxpbmVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdXNlUGVyTGluZSIsIm1vdXNlIiwieFllYXIiLCJpbnZlcnQiLCJiaXNlY3QiLCJiaXNlY3RvciIsImlkeCIsImJlZ2lubmluZyIsImVuZCIsImdldFRvdGFsTGVuZ3RoIiwidGFyZ2V0IiwiZmxvb3IiLCJwb3MiLCJnZXRQb2ludEF0TGVuZ3RoIiwidG9GaXhlZCIsInN2ZzIiLCJ3aWR0aDIiLCJoZWlnaHQyIiwic2NhbGVCYW5kIiwiZyIsInRpY2tGb3JtYXQiLCJ0aWNrcyIsImJhbmR3aWR0aCIsImlzc3VlcyIsImRlbGF5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLFFBQVEsQ0FBQ0Ms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T0FEUixFQUNpQixLQURqQixFQUVHQSxJQUZILENBRVEsSUFGUixFQUVjLFFBRmQsRUFHR0EsSUFISCxDQUdRLEdBSFIsRUFHYSxZQUFZO0FBQ3JCLGFBQU8sR0FBUDtBQUNELEtBTEgsRUFNR0EsSUFOSCxDQU1RLEdBTlIsRUFNYSxZQUFZO0FBQ3JCLGFBQU8sRUFBUDtBQUNELEtBUkgsRUFTR21CLElBVEgsQ0FTUSxZQUFZO0FBQ2hCLHVCQUFVLENBQUNmLENBQUMsQ0FBQ2lJLE1BQUgsQ0FBVixpQ0FBMkNqSSxDQUFDLENBQUN3RixJQUE3QztBQUNELEtBWEg7QUFZRDs7QUFFRCxXQUFTN0MsVUFBVCxDQUFvQjNDLENBQXBCLEVBQXVCVSxDQUF2QixFQUEwQjtBQUN4QmpDLE1BQUUsQ0FBQ2lCLE1BQUgsQ0FBVSxJQUFWLEVBQWdCRSxJQUFoQixDQUFxQixPQUFyQixFQUE4QixLQUE5QjtBQUNBbkIsTUFBRSxDQUFDaUIsTUFBSCxDQUFVLElBQVYsRUFDR2lCLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHR2hCLElBSEgsQ0FHUSxPQUhSLEVBR2lCbUYsTUFBTSxDQUFDaUQsU0FBUCxFQUhqQixFQUlHcEksSUFKSCxDQUlRLEdBSlIsRUFJYSxVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPa0YsTUFBTSxDQUFDbEYsQ0FBQyxDQUFDaUksTUFBSCxDQUFiO0FBQTBCLEtBSnRELEVBS0dySSxJQUxILENBS1EsUUFMUixFQUtrQixVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPMkgsT0FBTyxHQUFHekMsTUFBTSxDQUFDbEYsQ0FBQyxDQUFDaUksTUFBSCxDQUF2QjtBQUFvQyxLQUxyRTtBQU9BeEosTUFBRSxDQUFDMEIsU0FBSCxDQUFhLE1BQWIsRUFDR2dJLE1BREg7QUFFRDtBQUNBLENBNUdNLEM7Ozs7Ozs7Ozs7O0FDQVAsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJztcbmltcG9ydCB7eWVhckJyZWFrZG93bn0gZnJvbSAnLi9zY3JpcHRzL21hcnZlbF95ZWFyX2J5X3llYXInO1xuaW1wb3J0IHtnZW5kZXJEb251dH0gZnJvbSAnLi9zY3JpcHRzL2dlbmRlcl9kb251dCc7XG5pbXBvcnQge2JveE9mZmljZUJ1YmJsZX0gZnJvbSAnLi9zY3JpcHRzL2JveF9vZmZpY2UnXG5pbXBvcnQge21hcmtldFNoYXJlfSBmcm9tICcuL3NjcmlwdHMvbWFya2V0X3NoYXJlJ1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvWWVhckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29HZW5kZXJCcmVha2Rvd24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQm94T2ZmaWNlQnViYmxlKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvTWFya2V0U2hhcmUpXG5cbmRlYnVnZ2VyXG5mdW5jdGlvbiBnb1llYXJCcmVha2Rvd24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgbGV0IGVsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbnV0LXRpcCcpXG4gICAgICAgIGVsZW0yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbTIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuICAgIFxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXItYnJlYWtkb3duXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4gICAgeWVhckJyZWFrZG93bigpO1xufVxuXG5mdW5jdGlvbiBnb0dlbmRlckJyZWFrZG93biAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmRlci1icmVha2Rvd25cIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBnZW5kZXJEb251dCgpO1xufVxuXG5mdW5jdGlvbiBnb0JveE9mZmljZUJ1YmJsZSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBsZXQgZWxlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9udXQtdGlwJylcbiAgICAgICAgZWxlbTIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtMilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94LW9mZmljZVwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXG4gICAgZGVidWdnZXJcbiAgICBib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQzY2VhMiwgIzE4NWE5ZCk7XCIpO1xuICAgIGJveE9mZmljZUJ1YmJsZSgpO1xufVxuXG5mdW5jdGlvbiBnb01hcmtldFNoYXJlICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGxldCBlbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb251dC10aXAnKVxuICAgICAgICBlbGVtMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0yKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtldC1zaGFyZVwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIG1hcmtldFNoYXJlKCk7XG59IiwiZXhwb3J0IGNvbnN0IGJveE9mZmljZUJ1YmJsZSA9ICgpID0+IHtcblxuY29uc3QgZGF0YXNldCA9IHtcbiAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogRW5kZ2FtZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjc5NzgwMDU2NCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBJbmZpbml0eSBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBdmVuZ2Vyc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTUxODgxMjk4OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEFnZSBvZiBVbHRyb25cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE0MDU0MDM2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsYWNrIFBhbnRoZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEzNDY5MTMxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluY3JlZGlibGVzIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEaXNuZXkvUGl4YXJcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTI0MjgwNTM1OVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXJvbiBNYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTIxNDgxMTI1MlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExNTMzMDQ0OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFxdWFtYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogRmFyIEZyb20gSG9tZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMzE5Mjc5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gTWFydmVsXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTI4Mjc0Nzk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHQgUmlzZXNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA4MTA0MTI4N1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSm9rZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA3NDI1MTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0XCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwMDQ1NTg0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg5MDg3MTYyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogSG9tZWNvbWluZ1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg4MDE2NjkyNFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF0bWFuIHYuIFN1cGVybWFuOiBEYXduIG9mIEp1c3RpY2VcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODczNjM0OTE5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eSBWb2wuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVub21cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTYwODUxNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRob3I6IFJhZ25hcm9rXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTM5NzcxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldvbmRlciBXb21hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4MjE3MDg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4ODk3NjQ1M1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2wgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4NTA0NjkyMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2xcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODMxMTI5NzlcbiAgICB9LFxuXG4gICAgXVxufVxuXG5sZXQgZGlhbWV0ZXIgPSA5MDA7XG5jb25zdCBjb2xvcjIgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmNvbnN0IGRlZmF1bHRfaGVpZ2h0ID0gNzUwO1xuY29uc3QgZGVmYXVsdF9yYXRpbyA9IGRpYW1ldGVyIC8gZGVmYXVsdF9oZWlnaHQ7XG5cblxuZnVuY3Rpb24gc2V0X3NpemUoKSB7XG4gICAgY29uc3QgY3VycmVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGN1cnJlbnRfaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN1cnJlbnRfcmF0aW8gPSBjdXJyZW50X3dpZHRoIC8gY3VycmVudF9oZWlnaHQ7XG5cbiAgICBpZiAoY3VycmVudF9yYXRpbyA+IGRlZmF1bHRfcmF0aW8pIHtcbiAgICAgICAgbGV0IGRpYW1ldGVyID0gMTIwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSA2MDA7XG4gICAgfVxufTtcbnNldF9zaXplKCk7XG5cbmNvbnN0IGJ1YmJsZSA9IGQzLnBhY2soZGF0YXNldClcbiAgICAuc2l6ZShbZGlhbWV0ZXIsIGRpYW1ldGVyXSlcbiAgICAucGFkZGluZyguOSk7XG5cbmNvbnN0IHN2ZzMgPSBkMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJidWJibGUtY2hhcnRcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIGRpYW1ldGVyKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGRpYW1ldGVyKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidWJibGVcIik7XG5cbmNvbnN0IG5vZGVzID0gZDMuaGllcmFyY2h5KGRhdGFzZXQpXG4gICAgLnN1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5ib3hPZmZpY2U7XG4gICAgfSk7XG5cblxuY29uc3Qgbm9kZSA9IHN2ZzMuc2VsZWN0QWxsKFwiLm5vZGVcIilcbiAgICAuZGF0YShidWJibGUobm9kZXMpLmRlc2NlbmRhbnRzKCkpXG4gICAgLmVudGVyKClcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAhZC5jaGlsZHJlblxuICAgIH0pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy43Jyk7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCcxMDAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInRpdGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQudGl0bGU7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwic3R1ZGlvXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuc3R1ZGlvO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yO1xuICAgIH0pXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gY29sb3IyKGkpO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiLjAzZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEudGl0bGU7XG4gICAgfSlcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yIC8gNTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5cbm5vZGUuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIxLjNlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZC5kYXRhLmJveE9mZmljZS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxLCcpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuZDMuc2VsZWN0KHNlbGYuZnJhbWVFbGVtZW50KVxuICAgIC5zdHlsZShcImhlaWdodFwiLCBkaWFtZXRlciArIFwicHhcIik7XG5cbn0iLCJleHBvcnQgY29uc3QgZ2VuZGVyRG9udXQgPSAoKSA9PiB7XG5cbmNvbnN0IHRvdGFsID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTWFsZVwiLFxuICAgICAgICBjb3VudDogODUwMjNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVtYWxlXCIsXG4gICAgICAgIGNvdW50OiAzNzc2MlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJPdGhlclwiLFxuICAgICAgICBjb3VudDogMTY2MjZcbiAgICB9XVxuXG5jb25zdCBoZWlnaHQgPSA1NDA7XG5jb25zdCB3aWR0aCA9IDU0MDtcbmNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMjtcbmNvbnN0IGRvbnV0V2lkdGggPSAxMDA7XG5jb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtY2hhcnRcIilcblxuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZG9udXQtY2hhcnQnKVxuICAgIC8vIC5hcHBlbmQoc3ZnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArICh3aWR0aCAvIDIpICsgXCIsXCIgKyAoaGVpZ2h0IC8gMikgKyAnKScpXG5cbmNvbnN0IGFyYyA9IGQzLmFyYygpXG4gICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIGRvbnV0V2lkdGgpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbmNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmNvdW50XG4gICAgfSlcbiAgICAuc29ydChudWxsKTtcblxuY29uc3QgZG9udXRUaXAgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJkb251dC10aXBcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cbmNvbnN0IHBhdGggPSBzdmcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAuZGF0YShwaWUodG90YWwpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gY29sb3IoZC5kYXRhLnRpdGxlKVxuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdmVyXCIsIG9uTW91c2VPdmVyKVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIG9uTW91c2VPdXQpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpXG4gICAgLmR1cmF0aW9uKDE3MDApXG4gICAgLmF0dHJUd2VlbihcImRcIiwgdHdlZW5QaWUpXG5cbnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDApXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0yNSlcbiAgICAuYXR0cihcInlcIiwgNTApXG4gICAgLnRleHQoXCJDaGFyYWN0ZXIgZ2VuZGVyIChBbGwgUHVibGlzaGVycylcIilcblxuZnVuY3Rpb24gdHdlZW5QaWUoYikge1xuICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh7IHN0YXJ0QW5nbGU6IDEuMSAqIE1hdGguUEksIGVuZEFuZ2xlOiAxLjEgKiBNYXRoLlBJIH0sIGIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gYXJjKGkodCkpOyB9O1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3ZlcihkLCBpKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1JylcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDUwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgbGV0IG51bSA9IChNYXRoLnJvdW5kKChkLmRhdGEuY291bnQgLyAxNDAwMDApICogMTAwKSkudG9TdHJpbmcoKSArIFwiJVwiXG4gICAgZG9udXRUaXAuaHRtbChudW0pXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYICsgMjEwKSArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDMxNSkgKyBcInB4XCIpXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG59XG5cbmNvbnN0IGxlZ2VuZFJlY3RTaXplID0gMTA7XG5jb25zdCBsZWdlbmRTcGFjaW5nID0gMTE7XG5cbmNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKVxuICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NpcmNsZS1sZWdlbmQnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gaGVpZ2h0ICogY29sb3IuZG9tYWluKCkubGVuZ3RoIC8gMjtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSAtMiAqIGxlZ2VuZFJlY3RTaXplIC0gMTM7XG4gICAgICAgIGxldCB2ZXJ0aWNhbCA9IGkgKiBoZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBob3Jpem9udGFsICsgJywnICsgdmVydGljYWwgKyAnKSc7XG4gICAgfSlcblxubGVnZW5kLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGNvbG9yKVxuICAgIC5hdHRyKCdjeCcsIDApXG4gICAgLmF0dHIoJ2N5JywgMClcbiAgICAuYXR0cigncicsICcuNXJlbScpXG5cbmxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4JywgbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nICsgMjUpXG4gICAgLmF0dHIoJ3knLCBsZWdlbmRSZWN0U2l6ZSAtIGxlZ2VuZFNwYWNpbmcgKyAzKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xufSlcblxufSIsImV4cG9ydCBjb25zdCBtYXJrZXRTaGFyZSA9ICgpID0+IHtcblxuZDMuY3N2KCcuLi9kYXRhL21hcmtldF9zaGFyZS5jc3YnKS50aGVuKGQgPT4gZ3JhcGgoZCkpXG5cblxuZnVuY3Rpb24gZ3JhcGgoZGF0YSkge1xuXG4gICAgY29uc3Qga2V5cyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKTtcbiAgICBjb25zdCBtYXJnaW4gPSB7dG9wOjIwLCByaWdodDogNDAsIGJvdHRvbTogMjAsIGxlZnQ6IDQwfVxuICAgIGNvbnN0IHdpZHRoID0gOTAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRcbiAgICBjb25zdCBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsd2lkdGhdKVxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG4gICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSlcbiAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHlTY2FsZSlcblxuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAueChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB4U2NhbGUoZC55ZWFyKVxuICAgIH0pXG4gICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geVNjYWxlKGQuc2hhcmUpXG4gICAgfSlcbiAgICAuY3VydmUoZDMuY3VydmVDYXJkaW5hbClcbiAgICBcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImxpbmUtY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKVxuXG4gICAgY29sb3IuZG9tYWluKGQzLmtleXMoZGF0YVswXSkuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICE9PSBcInllYXJcIlxuICAgIH0pKVxuXG4gICAgY29uc3QgY29tcGFuaWVzID0gY29sb3IuZG9tYWluKCkubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBkLnllYXIsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlOiArZFtuYW1lXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgeFNjYWxlLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC55ZWFyXG4gICAgfSkpXG5cbiAgICB5U2NhbGUuZG9tYWluKFtcbiAgICAgICAgZDMubWluKGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIGQzLm1pbihjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gZDMubWF4KGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICA1MFxuICAgIF0pXG5cbiAgICBjb25zdCBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDIwKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAyMFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuICAgIFxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gMjUpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGkgKiAyMCkgKyA5O1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKHhBeGlzKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgICAuY2FsbCh5QXhpcylcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgOClcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi43ZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLnRleHQoXCJNYXJrZXQgU2hhcmUgKCUpXCIpXG5cbiAgICBjb25zdCBjb21wYW55ID0gc3ZnLnNlbGVjdEFsbChcIi5jb21wYW55XCIpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbXBhbnlcIilcblxuICAgIGNvbXBhbnkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpXG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuXG4gICAgZGVidWdnZXJcbiAgICBjb21wYW55LmFwcGVuZChcInRleHRcIilcbiAgICAuZGF0dW0oZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKGQudmFsdWUueWVhcikgKyBcIixcIiArIHlTY2FsZShkLnZhbHVlLnNoYXJlKSArIFwiKVwiXG4gICAgfSlcbiAgICAuYXR0cihcInhcIiwgMzYpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi44NWVtXCIpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgfSlcbiAgICBcbiAgICAvLyBDcmVkaXQgdG8gbGFyc2VubXRsKGJsLm9ja3Mub3JnL2xhcnNlbm10bClcbiAgICBjb25zdCBtb3VzZUcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2Utb3Zlci1lZmZlY3RzXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZChcInBhdGhcIikgLy8gdGhpcyBpcyB0aGUgYmxhY2sgdmVydGljYWwgbGluZSB0byBmb2xsb3cgbW91c2VcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLWxpbmVcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuXG4gICAgY29uc3QgbGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lJyk7XG5cbiAgICBjb25zdCBtb3VzZVBlckxpbmUgPSBtb3VzZUcuc2VsZWN0QWxsKCcubW91c2UtcGVyLWxpbmUnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1wZXItbGluZVwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwLDMpXCIpO1xuICAgIGRlYnVnZ2VyXG4gICAgbW91c2VHLmFwcGVuZCgnc3ZnOnJlY3QnKSAvLyBhcHBlbmQgYSByZWN0IHRvIGNhdGNoIG1vdXNlIG1vdmVtZW50cyBvbiBjYW52YXNcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpIC8vIGNhbid0IGNhdGNoIG1vdXNlIGV2ZW50cyBvbiBhIGcgZWxlbWVudFxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIG91dCBoaWRlIGxpbmUsIGNpcmNsZXMgYW5kIHRleHRcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgdGV4dFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHsgLy8gb24gbW91c2UgaW4gc2hvdyBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdXNlIG1vdmluZyBvdmVyIGNhbnZhc1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBcIk1cIiArIG1vdXNlWzBdICsgXCIsXCIgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gXCIgXCIgKyBtb3VzZVswXSArIFwiLFwiICsgMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeFllYXIgPSB4U2NhbGUuaW52ZXJ0KG1vdXNlWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpc2VjdCA9IGQzLmJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBiaXNlY3QoZC52YWx1ZXMsIHhZZWFyKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmVnaW5uaW5nID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGluZXNbaV0uZ2V0VG90YWxMZW5ndGgoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IE1hdGguZmxvb3IoKGJlZ2lubmluZyArIGVuZCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9PT0gZW5kIHx8IHRhcmdldCA9PT0gYmVnaW5uaW5nKSAmJiBwb3MueCAhPT0gbW91c2VbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MueCA+IG1vdXNlWzBdKSBlbmQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCA8IG1vdXNlWzBdKSBiZWdpbm5pbmcgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGJyZWFrOyAvL3Bvc2l0aW9uIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dCh5U2NhbGUuaW52ZXJ0KHBvcy55KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbW91c2VbMF0gKyBcIixcIiArIGxpbmVzW2ldLmdldFBvaW50QXRMZW5ndGgodGFyZ2V0KS55ICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG59XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHllYXJCcmVha2Rvd24gPSAoKSA9PiB7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgLmFwcGVuZChcInN2Z1wiKVxuICAuYXR0cihcImlkXCIsIFwiYmFyLWNoYXJ0XCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgMTIwMClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgNTAwKVxuXG5jb25zdCBzdmcyID0gZDMuc2VsZWN0KFwiI2Jhci1jaGFydFwiKSxcbiAgbWFyZ2luID0gMTUwLFxuICB3aWR0aDIgPSBzdmcyLmF0dHIoXCJ3aWR0aFwiKSAtIG1hcmdpbixcbiAgaGVpZ2h0MiA9IHN2ZzIuYXR0cihcImhlaWdodFwiKSAtIG1hcmdpbjtcblxuXG5jb25zdCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGgyXSkucGFkZGluZygwLjYpLFxuICB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQyLCAwXSk7XG5cbmNvbnN0IGcgPSBzdmcyLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuZDMuY3N2KFwiLi9kYXRhL3llYXJEYXRhLmNzdlwiKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gIHhTY2FsZS5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkpO1xuICB5U2NhbGUuZG9tYWluKFswLCAxMzAwXSk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodDIgKyBcIilcIilcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInlcIiwgaGVpZ2h0MiAtIDIwMClcbiAgICAuYXR0cihcInhcIiwgd2lkdGgyIC0gMTAwKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgLnRleHQoXCJZZWFyXCIpO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSlcbiAgICAgIC50aWNrRm9ybWF0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSkudGlja3MoMTApKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgIC5hdHRyKFwieVwiLCA2KVxuICAgIC5hdHRyKFwiZHlcIiwgXCItNS4xZW1cIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiKFVuaXF1ZSkgaXNzdWVzIHJlbGVhc2VkXCIpO1xuXG4gIHN2ZzIuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCA1MClcbiAgICAuYXR0cihcInlcIiwgNTApXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyNHB4XCIpXG4gICAgLnRleHQoXCIjIG9mIHJlbGVhc2VzIChNYXJ2ZWwpXCIpXG5cbiAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBvbk1vdXNlT3ZlcilcbiAgICAub24oXCJtb3VzZW91dFwiLCBvbk1vdXNlT3V0KVxuICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQueWVhcik7IH0pXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoMCk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoMCk7IH0pO1xuXG4gIHN2ZzIuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTIwMClcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIChpICogMTMpIH0pXG59KTtcblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnLCAnaGlnaGxpZ2h0Jyk7XG4gIGQzLnNlbGVjdCh0aGlzKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSArIDIpXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIC0gMTA7IH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpICsgMTA7IH0pO1xuXG4gIGcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKCdjbGFzcycsICd2YWwnKVxuICAgIC5hdHRyKCdpZCcsICdpc3N1ZXMnKVxuICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDU5MDtcbiAgICB9KVxuICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDEwO1xuICAgIH0pXG4gICAgLnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGAke1tkLmlzc3Vlc119IGlzc3VlcyByZWxlYXNlZCBpbiAke2QueWVhcn1gO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2JhcicpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKTsgfSk7XG5cbiAgZDMuc2VsZWN0QWxsKCcudmFsJylcbiAgICAucmVtb3ZlKClcbn1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=