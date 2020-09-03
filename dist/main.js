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
/* harmony import */ var _scripts_marvel_year_by_year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/marvel_year_by_year */ "./src/scripts/marvel_year_by_year.js");
/* harmony import */ var _scripts_gender_donut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/gender_donut */ "./src/scripts/gender_donut.js");
/* harmony import */ var _scripts_box_office__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/box_office */ "./src/scripts/box_office.js");
/* harmony import */ var _scripts_market_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/market_share */ "./src/scripts/market_share.js");
/* harmony import */ var _scripts_splash_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/splash_page */ "./src/scripts/splash_page.js");






document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown);
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown);
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble);
document.querySelector("#market-share").addEventListener("click", goMarketShare); // document.querySelector("#splash").addEventListener("click", goSplash)
// function goSplash () {
//     let button = document.getElementById("year-breakdown")
//     button.classList.add("clicked")
//     let body = document.getElementById("body")
//     body.style.background = "#39cccc";
//     splash();
// }

function goYearBreakdown() {
  if (document.querySelector("#tree") !== null) {
    var elem = document.querySelector("#tree");
    elem.parentNode.removeChild(elem);
  }

  if (document.querySelector("#line-chart") !== null) {
    var _elem = document.querySelector("#line-chart");

    _elem.parentNode.removeChild(_elem);

    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem2 = document.querySelector("#donut-chart");

    _elem2.parentNode.removeChild(_elem2);

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
    document.querySelector("#gender-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem3 = document.querySelector("#bubble-chart");

    _elem3.parentNode.removeChild(_elem3);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("year-breakdown");
  button.classList.add("clicked");
  var body = document.getElementById("body");
  body.style.background = "#39cccc";
  Object(_scripts_marvel_year_by_year__WEBPACK_IMPORTED_MODULE_1__["yearBreakdown"])();
}

function goGenderBreakdown() {
  if (document.querySelector("#tree") !== null) {
    var elem = document.querySelector("#tree");
    elem.parentNode.removeChild(elem);
  }

  if (document.querySelector("#line-chart") !== null) {
    var _elem4 = document.querySelector("#line-chart");

    _elem4.parentNode.removeChild(_elem4);

    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#bar-chart") !== null) {
    var _elem5 = document.querySelector("#bar-chart");

    _elem5.parentNode.removeChild(_elem5);

    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem6 = document.querySelector("#bubble-chart");

    _elem6.parentNode.removeChild(_elem6);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("gender-breakdown");
  button.classList.add("clicked");
  var body = document.getElementById("body");
  body.style.background = "#7fbdff";
  Object(_scripts_gender_donut__WEBPACK_IMPORTED_MODULE_2__["genderDonut"])();
}

function goBoxOfficeBubble() {
  if (document.querySelector("#tree") !== null) {
    var elem = document.querySelector("#tree");
    elem.parentNode.removeChild(elem);
  }

  if (document.querySelector("#line-chart") !== null) {
    var _elem7 = document.querySelector("#line-chart");

    _elem7.parentNode.removeChild(_elem7);

    document.querySelector("#market-share").removeAttribute("class");
  } else if (document.querySelector("#bar-chart") !== null) {
    var _elem8 = document.querySelector("#bar-chart");

    _elem8.parentNode.removeChild(_elem8);

    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem9 = document.querySelector("#donut-chart");

    _elem9.parentNode.removeChild(_elem9);

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
    document.querySelector("#gender-breakdown").removeAttribute("class");
  }

  var button = document.getElementById("box-office");
  button.classList.add("clicked");
  var body = document.getElementById("body");
  body.style.background = "#92a8d1";
  Object(_scripts_box_office__WEBPACK_IMPORTED_MODULE_3__["boxOfficeBubble"])();
}

function goMarketShare() {
  if (document.querySelector("#tree") !== null) {
    var elem = document.querySelector("#tree");
    elem.parentNode.removeChild(elem);
  }

  if (document.querySelector("#bar-chart") !== null) {
    var _elem10 = document.querySelector("#bar-chart");

    _elem10.parentNode.removeChild(_elem10);

    document.querySelector("#year-breakdown").removeAttribute("class");
  } else if (document.querySelector("#donut-chart") !== null) {
    var _elem11 = document.querySelector("#donut-chart");

    _elem11.parentNode.removeChild(_elem11);

    var elem2 = document.querySelector('#donut-tip');
    elem2.parentNode.removeChild(elem2);
    document.querySelector("#gender-breakdown").removeAttribute("class");
  } else if (document.querySelector("#bubble-chart") !== null) {
    var _elem12 = document.querySelector("#bubble-chart");

    _elem12.parentNode.removeChild(_elem12);

    document.querySelector("#box-office").removeAttribute("class");
  }

  var button = document.getElementById("market-share");
  button.classList.add("clicked");
  var body = document.getElementById("body");
  body.style.background = "#7FCDCD";
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
  var svg3 = d3.select("#chart-container").append("svg").attr("id", "bubble-chart").attr("width", 0).attr("height", 0).attr("class", "bubble");
  d3.selectAll("svg").transition().duration(1200).attr("width", diameter).attr("height", diameter);
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
  var height = 500;
  var width = 500;
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
  }).attr('transform', 'translate(0,0)').transition().ease(d3.easeLinear).duration(1700).attrTween("d", tweenPie);
  svg.append("text").attr("id", "donut-text").attr("transform", "translate(100,0)").attr("x", -193).attr("y", 70).text("Character gender (All Publishers)");

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
    donutTip.html(num).style("left", d3.event.pageX + 515 + "px").style("top", d3.event.pageY - 50 + "px");
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
  legend.append('text').attr("id", "donut-legend").attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing + 5).text(function (d) {
    return d;
  });
}; // future: fix mouseover and mouseout

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
    var height = 500 - margin.top - margin.bottom;
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

        d3.select(this).select('text').text(yScale.invert(pos.y).toFixed(2));
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

/***/ "./src/scripts/splash_page.js":
/*!************************************!*\
  !*** ./src/scripts/splash_page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var splash = function splash() {
  var treeData = {
    "name": "Marvel",
    "value": 15,
    "type": "black",
    "level": "red",
    "children": [{
      "name": "Captain America",
      "value": 10,
      "type": "grey",
      "level": "red"
    }, {
      "name": "Spider-Man",
      "value": 10,
      "type": "grey",
      "level": "red"
    }, {
      "name": "Abel",
      "value": 10,
      "type": "grey",
      "level": "blue"
    }, {
      "name": "Awan",
      "value": 10,
      "type": "grey",
      "level": "green",
      "children": [{
        "name": "Enoch",
        "value": 7.5,
        "type": "grey",
        "level": "orange"
      }]
    }, {
      "name": "Azura",
      "value": 10,
      "type": "grey",
      "level": "green"
    }]
  }; // set the dimensions and margins of the diagram

  var margin = {
    top: 20,
    right: 90,
    bottom: 30,
    left: 90
  },
      width = 660 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom; // declares a tree layout and assigns the size

  var treemap = d3.tree().size([height, width]); //  assigns the data to a hierarchy using parent-child relationships

  var nodes = d3.hierarchy(treeData, function (d) {
    return d.children;
  }); // maps the node data to the tree layout

  nodes = treemap(nodes); // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  var treeChart = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom),
      g = treeChart.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // adds the links between the nodes

  var link = g.selectAll(".link").data(nodes.descendants().slice(1)).enter().append("path").attr("class", "link").style("stroke", function (d) {
    return d.data.level;
  }).attr("d", function (d) {
    return "M" + d.y + "," + d.x + "C" + (d.y + d.parent.y) / 2 + "," + d.x + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x + " " + d.parent.y + "," + d.parent.x;
  }); // adds each node as a group

  var node = g.selectAll(".node").data(nodes.descendants()).enter().append("g").attr("class", function (d) {
    return "node" + (d.children ? " node--internal" : " node--leaf");
  }).attr("transform", function (d) {
    return "translate(" + d.y + "," + d.x + ")";
  }); // adds the circle to the node

  node.append("circle").attr("r", function (d) {
    return d.data.value;
  }).style("stroke", function (d) {
    return d.data.type;
  }).style("fill", function (d) {
    return d.data.level;
  }); // adds the text to the node

  node.append("text").attr("dy", ".35em").attr("x", function (d) {
    return d.children ? (d.data.value + 5) * -1 : d.data.value + 5;
  }).attr("y", function (d) {
    return d.children && d.depth !== 0 ? -(d.data.value + 5) : d;
  }).style("text-anchor", function (d) {
    return d.children ? "end" : "start";
  }).text(function (d) {
    return d.data.name;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (splash);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NwbGFzaF9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdvWWVhckJyZWFrZG93biIsImdvR2VuZGVyQnJlYWtkb3duIiwiZ29Cb3hPZmZpY2VCdWJibGUiLCJnb01hcmtldFNoYXJlIiwiZWxlbSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImVsZW0yIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwieWVhckJyZWFrZG93biIsImdlbmRlckRvbnV0IiwiYm94T2ZmaWNlQnViYmxlIiwibWFya2V0U2hhcmUiLCJkYXRhc2V0IiwiZGlhbWV0ZXIiLCJjb2xvcjIiLCJkMyIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJkZWZhdWx0X2hlaWdodCIsImRlZmF1bHRfcmF0aW8iLCJzZXRfc2l6ZSIsImN1cnJlbnRfd2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY3VycmVudF9oZWlnaHQiLCJpbm5lckhlaWdodCIsImN1cnJlbnRfcmF0aW8iLCJidWJibGUiLCJwYWNrIiwic2l6ZSIsInBhZGRpbmciLCJzdmczIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm5vZGVzIiwiaGllcmFyY2h5Iiwic3VtIiwiZCIsImJveE9mZmljZSIsIm5vZGUiLCJkYXRhIiwiZGVzY2VuZGFudHMiLCJlbnRlciIsImZpbHRlciIsImNoaWxkcmVuIiwib24iLCJpIiwieCIsInkiLCJ0ZXh0IiwidGl0bGUiLCJzdHVkaW8iLCJyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic2VsZiIsImZyYW1lRWxlbWVudCIsInRvdGFsIiwiY291bnQiLCJoZWlnaHQiLCJ3aWR0aCIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJkb251dFdpZHRoIiwiY29sb3IiLCJzdmciLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwicGllIiwidmFsdWUiLCJzb3J0IiwiZG9udXRUaXAiLCJwYXRoIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJhdHRyVHdlZW4iLCJ0d2VlblBpZSIsImIiLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJQSSIsImVuZEFuZ2xlIiwidCIsIm9uTW91c2VPdmVyIiwibnVtIiwicm91bmQiLCJodG1sIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwib25Nb3VzZU91dCIsImxlZ2VuZFJlY3RTaXplIiwibGVnZW5kU3BhY2luZyIsImxlZ2VuZCIsImRvbWFpbiIsIm9mZnNldCIsImxlbmd0aCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNzdiIsInRoZW4iLCJncmFwaCIsImtleXMiLCJjb2x1bW5zIiwic2xpY2UiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieVNjYWxlIiwieEF4aXMiLCJheGlzQm90dG9tIiwieUF4aXMiLCJheGlzTGVmdCIsImxpbmUiLCJ5ZWFyIiwic2hhcmUiLCJjdXJ2ZSIsImN1cnZlQ2FyZGluYWwiLCJrZXkiLCJjb21wYW5pZXMiLCJtYXAiLCJuYW1lIiwidmFsdWVzIiwiZXh0ZW50IiwiYyIsInYiLCJjYWxsIiwiY29tcGFueSIsImRhdHVtIiwibW91c2VHIiwibGluZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW91c2VQZXJMaW5lIiwibW91c2UiLCJ4WWVhciIsImludmVydCIsImJpc2VjdCIsImJpc2VjdG9yIiwiaWR4IiwiYmVnaW5uaW5nIiwiZW5kIiwiZ2V0VG90YWxMZW5ndGgiLCJ0YXJnZXQiLCJmbG9vciIsInBvcyIsImdldFBvaW50QXRMZW5ndGgiLCJ0b0ZpeGVkIiwic3ZnMiIsIndpZHRoMiIsImhlaWdodDIiLCJzY2FsZUJhbmQiLCJnIiwidGlja0Zvcm1hdCIsInRpY2tzIiwiYmFuZHdpZHRoIiwiaXNzdWVzIiwiZGVsYXkiLCJyZW1vdmUiLCJzcGxhc2giLCJ0cmVlRGF0YSIsInRyZWVtYXAiLCJ0cmVlIiwidHJlZUNoYXJ0IiwibGluayIsImxldmVsIiwicGFyZW50IiwidHlwZSIsImRlcHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RB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S0FBWSxDQUExQixHQUE4QixFQUFFekksQ0FBQyxDQUFDRyxJQUFGLENBQU8rQixLQUFQLEdBQWUsQ0FBakIsQ0FBOUIsR0FBb0RsQyxDQUF4RDtBQUFBLEdBSGhCLEVBSUtuQyxLQUpMLENBSVcsYUFKWCxFQUkwQixVQUFBbUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ08sUUFBRixHQUFhLEtBQWIsR0FBcUIsT0FBekI7QUFBQSxHQUozQixFQUtLSyxJQUxMLENBS1UsVUFBQVosQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0csSUFBRixDQUFPd0YsSUFBWDtBQUFBLEdBTFg7QUFPQyxDQTNHRDs7QUE2R2VxQyxxRUFBZixFOzs7Ozs7Ozs7OztBQzdHQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7eWVhckJyZWFrZG93bn0gZnJvbSAnLi9zY3JpcHRzL21hcnZlbF95ZWFyX2J5X3llYXInO1xuaW1wb3J0IHtnZW5kZXJEb251dH0gZnJvbSAnLi9zY3JpcHRzL2dlbmRlcl9kb251dCc7XG5pbXBvcnQge2JveE9mZmljZUJ1YmJsZX0gZnJvbSAnLi9zY3JpcHRzL2JveF9vZmZpY2UnXG5pbXBvcnQge21hcmtldFNoYXJlfSBmcm9tICcuL3NjcmlwdHMvbWFya2V0X3NoYXJlJ1xuaW1wb3J0IHtzcGxhc2h9IGZyb20gJy4vc2NyaXB0cy9zcGxhc2hfcGFnZSc7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29ZZWFyQnJlYWtkb3duKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0dlbmRlckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Cb3hPZmZpY2VCdWJibGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29NYXJrZXRTaGFyZSlcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1NwbGFzaClcblxuXG4vLyBmdW5jdGlvbiBnb1NwbGFzaCAoKSB7XG4vLyAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhci1icmVha2Rvd25cIilcbi8vICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbi8vICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKVxuLy8gICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzM5Y2NjY1wiO1xuLy8gICAgIHNwbGFzaCgpO1xuLy8gfVxuXG5mdW5jdGlvbiBnb1llYXJCcmVha2Rvd24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pIFxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgbGV0IGVsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbnV0LXRpcCcpXG4gICAgICAgIGVsZW0yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbTIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuICAgIFxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXItYnJlYWtkb3duXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiMzOWNjY2NcIjtcbiAgICB5ZWFyQnJlYWtkb3duKCk7XG59XG5cbmZ1bmN0aW9uIGdvR2VuZGVyQnJlYWtkb3duICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5kZXItYnJlYWtkb3duXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiM3ZmJkZmZcIlxuICAgIGdlbmRlckRvbnV0KCk7XG59XG5cbmZ1bmN0aW9uIGdvQm94T2ZmaWNlQnViYmxlICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgbGV0IGVsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbnV0LXRpcCcpXG4gICAgICAgIGVsZW0yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbTIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveC1vZmZpY2VcIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKVxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzkyYThkMVwiXG4gICAgYm94T2ZmaWNlQnViYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGdvTWFya2V0U2hhcmUgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBsZXQgZWxlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9udXQtdGlwJylcbiAgICAgICAgZWxlbTIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtMilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrZXQtc2hhcmVcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzdGQ0RDRFwiO1xuICAgIG1hcmtldFNoYXJlKCk7XG59IiwiZXhwb3J0IGNvbnN0IGJveE9mZmljZUJ1YmJsZSA9ICgpID0+IHtcblxuY29uc3QgZGF0YXNldCA9IHtcbiAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogRW5kZ2FtZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjc5NzgwMDU2NCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBJbmZpbml0eSBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBdmVuZ2Vyc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTUxODgxMjk4OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEFnZSBvZiBVbHRyb25cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE0MDU0MDM2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsYWNrIFBhbnRoZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEzNDY5MTMxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluY3JlZGlibGVzIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEaXNuZXkvUGl4YXJcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTI0MjgwNTM1OVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXJvbiBNYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTIxNDgxMTI1MlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExNTMzMDQ0OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFxdWFtYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogRmFyIEZyb20gSG9tZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMzE5Mjc5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gTWFydmVsXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTI4Mjc0Nzk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHQgUmlzZXNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA4MTA0MTI4N1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSm9rZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA3NDI1MTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0XCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwMDQ1NTg0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg5MDg3MTYyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogSG9tZWNvbWluZ1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg4MDE2NjkyNFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF0bWFuIHYuIFN1cGVybWFuOiBEYXduIG9mIEp1c3RpY2VcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODczNjM0OTE5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eSBWb2wuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVub21cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTYwODUxNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRob3I6IFJhZ25hcm9rXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTM5NzcxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldvbmRlciBXb21hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4MjE3MDg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4ODk3NjQ1M1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2wgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4NTA0NjkyMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2xcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODMxMTI5NzlcbiAgICB9LFxuXG4gICAgXVxufVxuXG5sZXQgZGlhbWV0ZXIgPSA5MDA7XG5jb25zdCBjb2xvcjIgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmNvbnN0IGRlZmF1bHRfaGVpZ2h0ID0gNzUwO1xuY29uc3QgZGVmYXVsdF9yYXRpbyA9IGRpYW1ldGVyIC8gZGVmYXVsdF9oZWlnaHQ7XG5cblxuZnVuY3Rpb24gc2V0X3NpemUoKSB7XG4gICAgY29uc3QgY3VycmVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGN1cnJlbnRfaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN1cnJlbnRfcmF0aW8gPSBjdXJyZW50X3dpZHRoIC8gY3VycmVudF9oZWlnaHQ7XG5cbiAgICBpZiAoY3VycmVudF9yYXRpbyA+IGRlZmF1bHRfcmF0aW8pIHtcbiAgICAgICAgbGV0IGRpYW1ldGVyID0gMTIwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSA2MDA7XG4gICAgfVxufTtcbnNldF9zaXplKCk7XG5cbmNvbnN0IGJ1YmJsZSA9IGQzLnBhY2soZGF0YXNldClcbiAgICAuc2l6ZShbZGlhbWV0ZXIsIGRpYW1ldGVyXSlcbiAgICAucGFkZGluZyguOSk7XG5cbmNvbnN0IHN2ZzMgPSBkMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJidWJibGUtY2hhcnRcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIDApXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYnViYmxlXCIpO1xuXG5kMy5zZWxlY3RBbGwoXCJzdmdcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImhlaWdodFwiLCBkaWFtZXRlcilcblxuY29uc3Qgbm9kZXMgPSBkMy5oaWVyYXJjaHkoZGF0YXNldClcbiAgICAuc3VtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmJveE9mZmljZTtcbiAgICB9KTtcblxuXG5jb25zdCBub2RlID0gc3ZnMy5zZWxlY3RBbGwoXCIubm9kZVwiKVxuICAgIC5kYXRhKGJ1YmJsZShub2RlcykuZGVzY2VuZGFudHMoKSlcbiAgICAuZW50ZXIoKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICFkLmNoaWxkcmVuXG4gICAgfSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCcxMDAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjcnKTtcbiAgICB9KVxuICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgfSlcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwidGl0bGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC50aXRsZTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJzdHVkaW9cIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5zdHVkaW87XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnI7XG4gICAgfSlcbiAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvcjIoaSk7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIuMDNlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YS50aXRsZTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjEuM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBkLmRhdGEuYm94T2ZmaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG4gICAgfSlcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yIC8gNTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5kMy5zZWxlY3Qoc2VsZi5mcmFtZUVsZW1lbnQpXG4gICAgLnN0eWxlKFwiaGVpZ2h0XCIsIGRpYW1ldGVyICsgXCJweFwiKTtcblxufSIsImV4cG9ydCBjb25zdCBnZW5kZXJEb251dCA9ICgpID0+IHtcblxuY29uc3QgdG90YWwgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJNYWxlXCIsXG4gICAgICAgIGNvdW50OiA4NTAyM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJGZW1hbGVcIixcbiAgICAgICAgY291bnQ6IDM3NzYyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk90aGVyXCIsXG4gICAgICAgIGNvdW50OiAxNjYyNlxuICAgIH1dXG5cbmNvbnN0IGhlaWdodCA9IDUwMDtcbmNvbnN0IHdpZHRoID0gNTAwO1xuY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyO1xuY29uc3QgZG9udXRXaWR0aCA9IDEwMDtcbmNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuXG5kMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJkb251dC1jaGFydFwiKVxuXG5jb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNkb251dC1jaGFydCcpXG4gICAgLy8gLmFwcGVuZChzdmcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHdpZHRoIC8gMikgKyBcIixcIiArIChoZWlnaHQgLyAyKSArICcpJylcblxuY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMocmFkaXVzIC0gZG9udXRXaWR0aClcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzKTtcblxuY29uc3QgcGllID0gZDMucGllKClcbiAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY291bnRcbiAgICB9KVxuICAgIC5zb3J0KG51bGwpO1xuXG5jb25zdCBkb251dFRpcCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LXRpcFwiKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblxuY29uc3QgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC5kYXRhKHBpZSh0b3RhbCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsIGFyYylcbiAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvcihkLmRhdGEudGl0bGUpXG4gICAgfSlcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAuZHVyYXRpb24oMTcwMClcbiAgICAuYXR0clR3ZWVuKFwiZFwiLCB0d2VlblBpZSlcblxuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtdGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCAtMTkzKVxuICAgIC5hdHRyKFwieVwiLCA3MClcbiAgICAudGV4dChcIkNoYXJhY3RlciBnZW5kZXIgKEFsbCBQdWJsaXNoZXJzKVwiKVxuXG5mdW5jdGlvbiB0d2VlblBpZShiKSB7XG4gICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHsgc3RhcnRBbmdsZTogMS4xICogTWF0aC5QSSwgZW5kQW5nbGU6IDEuMSAqIE1hdGguUEkgfSwgYik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBhcmMoaSh0KSk7IH07XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKVxuICAgIGRvbnV0VGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICBsZXQgbnVtID0gKE1hdGgucm91bmQoKGQuZGF0YS5jb3VudCAvIDE0MDAwMCkgKiAxMDApKS50b1N0cmluZygpICsgXCIlXCJcbiAgICBkb251dFRpcC5odG1sKG51bSlcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyA1MTUpICsgXCJweFwiKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gNTApICsgXCJweFwiKVxufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGQsIGkpIHtcbiAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgZG9udXRUaXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxufVxuXG5jb25zdCBsZWdlbmRSZWN0U2l6ZSA9IDEwO1xuY29uc3QgbGVnZW5kU3BhY2luZyA9IDExO1xuXG5jb25zdCBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJylcbiAgICAuZGF0YShjb2xvci5kb21haW4oKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdjbGFzcycsICdjaXJjbGUtbGVnZW5kJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZztcbiAgICAgICAgbGV0IG9mZnNldCA9IGhlaWdodCAqIGNvbG9yLmRvbWFpbigpLmxlbmd0aCAvIDI7XG4gICAgICAgIGxldCBob3Jpem9udGFsID0gLTIgKiBsZWdlbmRSZWN0U2l6ZSAtIDEzO1xuICAgICAgICBsZXQgdmVydGljYWwgPSBpICogaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgaG9yaXpvbnRhbCArICcsJyArIHZlcnRpY2FsICsgJyknO1xuICAgIH0pXG5cbmxlZ2VuZC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgLnN0eWxlKCdmaWxsJywgY29sb3IpXG4gICAgLnN0eWxlKCdzdHJva2UnLCBjb2xvcilcbiAgICAuYXR0cignY3gnLCAwKVxuICAgIC5hdHRyKCdjeScsIDApXG4gICAgLmF0dHIoJ3InLCAnLjVyZW0nKVxuXG5sZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtbGVnZW5kXCIpXG4gICAgLmF0dHIoJ3gnLCBsZWdlbmRSZWN0U2l6ZSArIGxlZ2VuZFNwYWNpbmcpXG4gICAgLmF0dHIoJ3knLCBsZWdlbmRSZWN0U2l6ZSAtIGxlZ2VuZFNwYWNpbmcgKyA1KVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xufSlcblxufVxuXG4vLyBmdXR1cmU6IGZpeCBtb3VzZW92ZXIgYW5kIG1vdXNlb3V0IiwiZXhwb3J0IGNvbnN0IG1hcmtldFNoYXJlID0gKCkgPT4ge1xuXG5kMy5jc3YoJy4uL2RhdGEvbWFya2V0X3NoYXJlLmNzdicpLnRoZW4oZCA9PiBncmFwaChkKSlcblxuXG5mdW5jdGlvbiBncmFwaChkYXRhKSB7XG5cbiAgICBjb25zdCBrZXlzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHt0b3A6MjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAyMCwgbGVmdDogNDB9XG4gICAgY29uc3Qgd2lkdGggPSA5MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCx3aWR0aF0pXG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSlcbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeVNjYWxlKVxuXG4gICAgXG4gICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHhTY2FsZShkLnllYXIpXG4gICAgfSlcbiAgICAueShmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB5U2NhbGUoZC5zaGFyZSlcbiAgICB9KVxuICAgIC5jdXJ2ZShkMy5jdXJ2ZUNhcmRpbmFsKVxuICAgIFxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwibGluZS1jaGFydFwiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXG5cbiAgICBjb2xvci5kb21haW4oZDMua2V5cyhkYXRhWzBdKS5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgIT09IFwieWVhclwiXG4gICAgfSkpXG5cbiAgICBjb25zdCBjb21wYW5pZXMgPSBjb2xvci5kb21haW4oKS5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHllYXI6IGQueWVhcixcbiAgICAgICAgICAgICAgICAgICAgc2hhcmU6ICtkW25hbWVdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB4U2NhbGUuZG9tYWluKGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnllYXJcbiAgICB9KSlcblxuICAgIHlTY2FsZS5kb21haW4oW1xuICAgICAgICBkMy5taW4oY29tcGFuaWVzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMubWluKGMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuc2hhcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBkMy5tYXgoY29tcGFuaWVzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHYuc2hhcmVcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pXG4gICAgICAgIDUwXG4gICAgXSlcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gMjApXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqIDIwXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpXG4gICAgICAgIH0pXG4gICAgXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLSAyNSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgICAgIHJldHVybiAoaSAqIDIwKSArIDk7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLm5hbWVcbiAgICAgICAgfSlcbiAgICBcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgLmNhbGwoeEF4aXMpXG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgICAgIC5jYWxsKHlBeGlzKVxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCA4KVxuICAgICAgICAuYXR0cihcImR5XCIsIFwiLjdlbVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAudGV4dChcIk1hcmtldCBTaGFyZSAoJSlcIilcblxuICAgIGNvbnN0IGNvbXBhbnkgPSBzdmcuc2VsZWN0QWxsKFwiLmNvbXBhbnlcIilcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29tcGFueVwiKVxuXG4gICAgY29tcGFueS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcylcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpXG4gICAgICAgIH0pXG5cbiAgICBjb21wYW55LmFwcGVuZChcInRleHRcIilcbiAgICAuZGF0dW0oZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKGQudmFsdWUueWVhcikgKyBcIixcIiArIHlTY2FsZShkLnZhbHVlLnNoYXJlKSArIFwiKVwiXG4gICAgfSlcbiAgICAuYXR0cihcInhcIiwgMzYpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi44NWVtXCIpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgfSlcbiAgICBcbiAgICAvLyBDcmVkaXQgdG8gbGFyc2VubXRsKGJsLm9ja3Mub3JnL2xhcnNlbm10bClcbiAgICBjb25zdCBtb3VzZUcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2Utb3Zlci1lZmZlY3RzXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZChcInBhdGhcIikgLy8gdGhpcyBpcyB0aGUgYmxhY2sgdmVydGljYWwgbGluZSB0byBmb2xsb3cgbW91c2VcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLWxpbmVcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuXG4gICAgY29uc3QgbGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lJyk7XG5cbiAgICBjb25zdCBtb3VzZVBlckxpbmUgPSBtb3VzZUcuc2VsZWN0QWxsKCcubW91c2UtcGVyLWxpbmUnKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1wZXItbGluZVwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgLmF0dHIoXCJyXCIsIDcpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIG1vdXNlUGVyTGluZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwLDMpXCIpO1xuXG4gICAgbW91c2VHLmFwcGVuZCgnc3ZnOnJlY3QnKSAvLyBhcHBlbmQgYSByZWN0IHRvIGNhdGNoIG1vdXNlIG1vdmVtZW50cyBvbiBjYW52YXNcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpIC8vIGNhbid0IGNhdGNoIG1vdXNlIGV2ZW50cyBvbiBhIGcgZWxlbWVudFxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIG91dCBoaWRlIGxpbmUsIGNpcmNsZXMgYW5kIHRleHRcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgdGV4dFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHsgLy8gb24gbW91c2UgaW4gc2hvdyBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdXNlIG1vdmluZyBvdmVyIGNhbnZhc1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBcIk1cIiArIG1vdXNlWzBdICsgXCIsXCIgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gXCIgXCIgKyBtb3VzZVswXSArIFwiLFwiICsgMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhZZWFyID0geFNjYWxlLmludmVydChtb3VzZVswXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXNlY3QgPSBkMy5iaXNlY3RvcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC55ZWFyOyB9KS5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gYmlzZWN0KGQudmFsdWVzLCB4WWVhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlZ2lubmluZyA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxpbmVzW2ldLmdldFRvdGFsTGVuZ3RoKClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBNYXRoLmZsb29yKChiZWdpbm5pbmcgKyBlbmQpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gbGluZXNbaV0uZ2V0UG9pbnRBdExlbmd0aCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0YXJnZXQgPT09IGVuZCB8fCB0YXJnZXQgPT09IGJlZ2lubmluZykgJiYgcG9zLnggIT09IG1vdXNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggPiBtb3VzZVswXSkgZW5kID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zLnggPCBtb3VzZVswXSkgYmVnaW5uaW5nID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhazsgLy9wb3NpdGlvbiBmb3VuZFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dCh5U2NhbGUuaW52ZXJ0KHBvcy55KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIG1vdXNlWzBdICsgXCIsXCIgKyBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCkueSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxufVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCB5ZWFyQnJlYWtkb3duID0gKCkgPT4ge1xuXG5kMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJpZFwiLCBcImJhci1jaGFydFwiKVxuICAuYXR0cihcIndpZHRoXCIsIDEyMDApXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMClcblxuY29uc3Qgc3ZnMiA9IGQzLnNlbGVjdChcIiNiYXItY2hhcnRcIiksXG4gIG1hcmdpbiA9IDE1MCxcbiAgd2lkdGgyID0gc3ZnMi5hdHRyKFwid2lkdGhcIikgLSBtYXJnaW4sXG4gIGhlaWdodDIgPSBzdmcyLmF0dHIoXCJoZWlnaHRcIikgLSBtYXJnaW47XG5cblxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoMl0pLnBhZGRpbmcoMC42KSxcbiAgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0MiwgMF0pO1xuXG5jb25zdCBnID0gc3ZnMi5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgMTAwICsgXCIsXCIgKyAxMDAgKyBcIilcIik7XG5cbmQzLmNzdihcIi4vZGF0YS95ZWFyRGF0YS5jc3ZcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICB4U2NhbGUuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pKTtcbiAgeVNjYWxlLmRvbWFpbihbMCwgMTMwMF0pO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQyICsgXCIpXCIpXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIGhlaWdodDIgLSAyMDApXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoMiAtIDEwMClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiWWVhclwiKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLnRpY2tzKDEwKSlcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgNilcbiAgICAuYXR0cihcImR5XCIsIFwiLTUuMWVtXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAudGV4dChcIihVbmlxdWUpIGlzc3VlcyByZWxlYXNlZFwiKTtcblxuICBzdmcyLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiIyBvZiByZWxlYXNlcyAoTWFydmVsKVwiKVxuXG4gIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLnllYXIpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKDApOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKDApOyB9KTtcblxuICBzdmcyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqIDEzKSB9KVxufSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2hpZ2hsaWdodCcpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAyKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDEwOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKSArIDEwOyB9KTtcblxuICBnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cignY2xhc3MnLCAndmFsJylcbiAgICAuYXR0cignaWQnLCAnaXNzdWVzJylcbiAgICAuYXR0cigneCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA1OTA7XG4gICAgfSlcbiAgICAuYXR0cigneScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAxMDtcbiAgICB9KVxuICAgIC50ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgJHtbZC5pc3N1ZXNdfSBpc3N1ZXMgcmVsZWFzZWQgaW4gJHtkLnllYXJ9YDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdjbGFzcycsICdiYXInKTtcbiAgZDMuc2VsZWN0KHRoaXMpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig0MDApXG4gICAgLmF0dHIoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3Vlcyk7IH0pO1xuXG4gIGQzLnNlbGVjdEFsbCgnLnZhbCcpXG4gICAgLnJlbW92ZSgpXG59XG59XG4iLCJjb25zdCBzcGxhc2ggPSAoKSA9PiB7XG5cbmNvbnN0IHRyZWVEYXRhID0ge1xuICAgIFwibmFtZVwiOiBcIk1hcnZlbFwiLFxuICAgIFwidmFsdWVcIjogMTUsXG4gICAgXCJ0eXBlXCI6IFwiYmxhY2tcIixcbiAgICBcImxldmVsXCI6IFwicmVkXCIsXG4gICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImdyZXlcIixcbiAgICAgICAgICAgIFwibGV2ZWxcIjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTcGlkZXItTWFuXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcInJlZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBYmVsXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcImJsdWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBd2FuXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcImdyZWVuXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVub2NoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNy41LFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGV2ZWxcIjogXCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXp1cmFcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwiZ3JlZW5cIlxuICAgICAgICB9XG4gICAgXVxufTtcblxuLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBkaWFncmFtXG5jb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA5MCwgYm90dG9tOiAzMCwgbGVmdDogOTAgfSxcbiAgICB3aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBkZWNsYXJlcyBhIHRyZWUgbGF5b3V0IGFuZCBhc3NpZ25zIHRoZSBzaXplXG5jb25zdCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuLy8gIGFzc2lnbnMgdGhlIGRhdGEgdG8gYSBoaWVyYXJjaHkgdXNpbmcgcGFyZW50LWNoaWxkIHJlbGF0aW9uc2hpcHNcbmxldCBub2RlcyA9IGQzLmhpZXJhcmNoeSh0cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcblxuLy8gbWFwcyB0aGUgbm9kZSBkYXRhIHRvIHRoZSB0cmVlIGxheW91dFxubm9kZXMgPSB0cmVlbWFwKG5vZGVzKTtcblxuLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXG4vLyBhcHBlbmRzIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4vLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbmNvbnN0IHRyZWVDaGFydCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKSxcbiAgICBnID0gdHJlZUNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbi8vIGFkZHMgdGhlIGxpbmtzIGJldHdlZW4gdGhlIG5vZGVzXG5jb25zdCBsaW5rID0gZy5zZWxlY3RBbGwoXCIubGlua1wiKVxuICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSkpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIGQgPT4gZC5kYXRhLmxldmVsKVxuICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIFwiTVwiICsgZC55ICsgXCIsXCIgKyBkLnhcbiAgICAgICAgICAgICsgXCJDXCIgKyAoZC55ICsgZC5wYXJlbnQueSkgLyAyICsgXCIsXCIgKyBkLnhcbiAgICAgICAgICAgICsgXCIgXCIgKyAoZC55ICsgZC5wYXJlbnQueSkgLyAyICsgXCIsXCIgKyBkLnBhcmVudC54XG4gICAgICAgICAgICArIFwiIFwiICsgZC5wYXJlbnQueSArIFwiLFwiICsgZC5wYXJlbnQueDtcbiAgICB9KTtcblxuLy8gYWRkcyBlYWNoIG5vZGUgYXMgYSBncm91cFxuY29uc3Qgbm9kZSA9IGcuc2VsZWN0QWxsKFwiLm5vZGVcIilcbiAgICAuZGF0YShub2Rlcy5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gXCJub2RlXCIgKyAoZC5jaGlsZHJlbiA/IFwiIG5vZGUtLWludGVybmFsXCIgOiBcIiBub2RlLS1sZWFmXCIpKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gXCJ0cmFuc2xhdGUoXCIgKyBkLnkgKyBcIixcIiArIGQueCArIFwiKVwiKTtcblxuLy8gYWRkcyB0aGUgY2lyY2xlIHRvIHRoZSBub2RlXG5ub2RlLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiclwiLCBkID0+IGQuZGF0YS52YWx1ZSlcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgZCA9PiBkLmRhdGEudHlwZSlcbiAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gZC5kYXRhLmxldmVsKTtcblxuLy8gYWRkcyB0aGUgdGV4dCB0byB0aGUgbm9kZVxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4gZC5jaGlsZHJlbiA/IChkLmRhdGEudmFsdWUgKyA1KSAqIC0xIDogZC5kYXRhLnZhbHVlICsgNSlcbiAgICAuYXR0cihcInlcIiwgZCA9PiBkLmNoaWxkcmVuICYmIGQuZGVwdGggIT09IDAgPyAtKGQuZGF0YS52YWx1ZSArIDUpIDogZClcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBkID0+IGQuY2hpbGRyZW4gPyBcImVuZFwiIDogXCJzdGFydFwiKVxuICAgIC50ZXh0KGQgPT4gZC5kYXRhLm5hbWUpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9