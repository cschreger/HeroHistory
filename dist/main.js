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
    var height = 550 - margin.top - margin.bottom;
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
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).append('text').attr("y", 8).attr("dy", ".7em").style("text-anchor", "end").text("Year");
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 8).attr("dy", ".7em").style("text-anchor", "end").text("Market Share (%)").attr("y", "-40").attr("x", "-150");
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

          var pos = lines[i].getPointAtLength(_target);

          if ((_target === end || _target === beginning) && pos.x !== mouse[0]) {
            break;
          }

          if (pos.x > mouse[0]) end = _target;else if (pos.x < mouse[0]) beginning = _target;else break; //position found
        } //                 d3.select(this).select('text')
        //                     .text(yScale.invert(pos.y).toFixed(2));
        //                     return "translate(" + mouse[0] + "," + lines[i].getPointAtLength(target).y + ")";

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
    d3.select(this).transition().duration(200).attr('width', xScale.bandwidth() + 2).attr("y", function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NwbGFzaF9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdvWWVhckJyZWFrZG93biIsImdvR2VuZGVyQnJlYWtkb3duIiwiZ29Cb3hPZmZpY2VCdWJibGUiLCJnb01hcmtldFNoYXJlIiwiZWxlbSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImVsZW0yIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwieWVhckJyZWFrZG93biIsImdlbmRlckRvbnV0IiwiYm94T2ZmaWNlQnViYmxlIiwibWFya2V0U2hhcmUiLCJkYXRhc2V0IiwiZGlhbWV0ZXIiLCJjb2xvcjIiLCJkMyIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJkZWZhdWx0X2hlaWdodCIsImRlZmF1bHRfcmF0aW8iLCJzZXRfc2l6ZSIsImN1cnJlbnRfd2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY3VycmVudF9oZWlnaHQiLCJpbm5lckhlaWdodCIsImN1cnJlbnRfcmF0aW8iLCJidWJibGUiLCJwYWNrIiwic2l6ZSIsInBhZGRpbmciLCJzdmczIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm5vZGVzIiwiaGllcmFyY2h5Iiwic3VtIiwiZCIsImJveE9mZmljZSIsIm5vZGUiLCJkYXRhIiwiZGVzY2VuZGFudHMiLCJlbnRlciIsImZpbHRlciIsImNoaWxkcmVuIiwib24iLCJpIiwieCIsInkiLCJ0ZXh0IiwidGl0bGUiLCJzdHVkaW8iLCJyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic2VsZiIsImZyYW1lRWxlbWVudCIsInRvdGFsIiwiY291bnQiLCJoZWlnaHQiLCJ3aWR0aCIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJkb251dFdpZHRoIiwiY29sb3IiLCJzdmciLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwicGllIiwidmFsdWUiLCJzb3J0IiwiZG9udXRUaXAiLCJwYXRoIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJhdHRyVHdlZW4iLCJ0d2VlblBpZSIsImIiLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJQSSIsImVuZEFuZ2xlIiwidCIsIm9uTW91c2VPdmVyIiwibnVtIiwicm91bmQiLCJodG1sIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwib25Nb3VzZU91dCIsImxlZ2VuZFJlY3RTaXplIiwibGVnZW5kU3BhY2luZyIsImxlZ2VuZCIsImRvbWFpbiIsIm9mZnNldCIsImxlbmd0aCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNzdiIsInRoZW4iLCJncmFwaCIsImtleXMiLCJjb2x1bW5zIiwic2xpY2UiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieVNjYWxlIiwieEF4aXMiLCJheGlzQm90dG9tIiwieUF4aXMiLCJheGlzTGVmdCIsImxpbmUiLCJ5ZWFyIiwic2hhcmUiLCJjdXJ2ZSIsImN1cnZlQ2FyZGluYWwiLCJrZXkiLCJjb21wYW5pZXMiLCJtYXAiLCJuYW1lIiwidmFsdWVzIiwiZXh0ZW50IiwiYyIsInYiLCJjYWxsIiwiY29tcGFueSIsImRhdHVtIiwibW91c2VHIiwibGluZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW91c2VQZXJMaW5lIiwibW91c2UiLCJ4WWVhciIsImludmVydCIsImJpc2VjdCIsImJpc2VjdG9yIiwiaWR4IiwiYmVnaW5uaW5nIiwiZW5kIiwiZ2V0VG90YWxMZW5ndGgiLCJ0YXJnZXQiLCJmbG9vciIsInBvcyIsImdldFBvaW50QXRMZW5ndGgiLCJzdmcyIiwid2lkdGgyIiwiaGVpZ2h0MiIsInNjYWxlQmFuZCIsImciLCJ0aWNrRm9ybWF0IiwidGlja3MiLCJiYW5kd2lkdGgiLCJpc3N1ZXMiLCJkZWxheSIsInJlbW92ZSIsInNwbGFzaCIsInRyZWVEYXRhIiwidHJlZW1hcCIsInRyZWUiLCJ0cmVlQ2hhcnQiLCJsaW5rIiwibGV2ZWwiLCJwYXJlbnQiLCJ0eXBlIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJI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QixDQUE5QixHQUFvRGxDLENBQXhEO0FBQUEsR0FIaEIsRUFJS25DLEtBSkwsQ0FJVyxhQUpYLEVBSTBCLFVBQUFtQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDTyxRQUFGLEdBQWEsS0FBYixHQUFxQixPQUF6QjtBQUFBLEdBSjNCLEVBS0tLLElBTEwsQ0FLVSxVQUFBWixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDRyxJQUFGLENBQU93RixJQUFYO0FBQUEsR0FMWDtBQU9DLENBM0dEOztBQTZHZW9DLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0dBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHt5ZWFyQnJlYWtkb3dufSBmcm9tICcuL3NjcmlwdHMvbWFydmVsX3llYXJfYnlfeWVhcic7XG5pbXBvcnQge2dlbmRlckRvbnV0fSBmcm9tICcuL3NjcmlwdHMvZ2VuZGVyX2RvbnV0JztcbmltcG9ydCB7Ym94T2ZmaWNlQnViYmxlfSBmcm9tICcuL3NjcmlwdHMvYm94X29mZmljZSdcbmltcG9ydCB7bWFya2V0U2hhcmV9IGZyb20gJy4vc2NyaXB0cy9tYXJrZXRfc2hhcmUnXG5pbXBvcnQge3NwbGFzaH0gZnJvbSAnLi9zY3JpcHRzL3NwbGFzaF9wYWdlJztcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1llYXJCcmVha2Rvd24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvR2VuZGVyQnJlYWtkb3duKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0JveE9mZmljZUJ1YmJsZSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0LXNoYXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb01hcmtldFNoYXJlKVxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvU3BsYXNoKVxuXG5cbi8vIGZ1bmN0aW9uIGdvU3BsYXNoICgpIHtcbi8vICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyLWJyZWFrZG93blwiKVxuLy8gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuLy8gICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXG4vLyAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMzljY2NjXCI7XG4vLyAgICAgc3BsYXNoKCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGdvWWVhckJyZWFrZG93biAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSkgXG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBsZXQgZWxlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9udXQtdGlwJylcbiAgICAgICAgZWxlbTIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtMilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG4gICAgXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhci1icmVha2Rvd25cIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKVxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzM5Y2NjY1wiO1xuICAgIHllYXJCcmVha2Rvd24oKTtcbn1cblxuZnVuY3Rpb24gZ29HZW5kZXJCcmVha2Rvd24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmRlci1icmVha2Rvd25cIilcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKVxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzdmYmRmZlwiXG4gICAgZ2VuZGVyRG9udXQoKTtcbn1cblxuZnVuY3Rpb24gZ29Cb3hPZmZpY2VCdWJibGUgKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyZWVcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGluZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBsZXQgZWxlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9udXQtdGlwJylcbiAgICAgICAgZWxlbTIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtMilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94LW9mZmljZVwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjOTJhOGQxXCJcbiAgICBib3hPZmZpY2VCdWJibGUoKTtcbn1cblxuZnVuY3Rpb24gZ29NYXJrZXRTaGFyZSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGxldCBlbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb251dC10aXAnKVxuICAgICAgICBlbGVtMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0yKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtldC1zaGFyZVwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjN0ZDRENEXCI7XG4gICAgbWFya2V0U2hhcmUoKTtcbn0iLCJleHBvcnQgY29uc3QgYm94T2ZmaWNlQnViYmxlID0gKCkgPT4ge1xuXG5jb25zdCBkYXRhc2V0ID0ge1xuICAgIFwiY2hpbGRyZW5cIjogW3tcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBFbmRnYW1lXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAyNzk3ODAwNTY0LFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEluZmluaXR5IFdhclwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEF2ZW5nZXJzXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxNTE4ODEyOTg4XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogQWdlIG9mIFVsdHJvblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTQwNTQwMzY5NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmxhY2sgUGFudGhlclwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTM0NjkxMzE3MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW5jcmVkaWJsZXMgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRpc25leS9QaXhhclwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMjQyODA1MzU5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJcm9uIE1hbiAzXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMjE0ODExMjUyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXB0YWluIEFtZXJpY2E6IENpdmlsIFdhclwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTE1MzMwNDQ5NVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXF1YW1hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAyMDQ4MzU5NzU0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuOiBGYXIgRnJvbSBIb21lXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTEzMTkyNzk5NlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBNYXJ2ZWxcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMjgyNzQ3OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEYXJrIEtuaWdodCBSaXNlc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMDgxMDQxMjg3XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJKb2tlclwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMDc0MjUxMzExXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHRcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTAwNDU1ODQ0NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbiAzXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODkwODcxNjI2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuOiBIb21lY29taW5nXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODgwMTY2OTI0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCYXRtYW4gdi4gU3VwZXJtYW46IERhd24gb2YgSnVzdGljZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NzM2MzQ5MTlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkd1YXJkaWFucyBvZiB0aGUgR2FsYXh5IFZvbC4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODYzNzU2MDUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWZW5vbVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg1NjA4NTE1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhvcjogUmFnbmFyb2tcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg1Mzk3NzEyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV29uZGVyIFdvbWFuXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDgyMTcwODU1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbiAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogNzg4OTc2NDUzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWFkcG9vbCAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsLzIwdGggQ2VudHVyeSBGb3hcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogNzg1MDQ2OTIwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWFkcG9vbFwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4MzExMjk3OVxuICAgIH0sXG5cbiAgICBdXG59XG5cbmxldCBkaWFtZXRlciA9IDkwMDtcbmNvbnN0IGNvbG9yMiA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuY29uc3QgZGVmYXVsdF9oZWlnaHQgPSA3NTA7XG5jb25zdCBkZWZhdWx0X3JhdGlvID0gZGlhbWV0ZXIgLyBkZWZhdWx0X2hlaWdodDtcblxuXG5mdW5jdGlvbiBzZXRfc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgY3VycmVudF9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudF9yYXRpbyA9IGN1cnJlbnRfd2lkdGggLyBjdXJyZW50X2hlaWdodDtcblxuICAgIGlmIChjdXJyZW50X3JhdGlvID4gZGVmYXVsdF9yYXRpbykge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSAxMjAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDYwMDtcbiAgICB9XG59O1xuc2V0X3NpemUoKTtcblxuY29uc3QgYnViYmxlID0gZDMucGFjayhkYXRhc2V0KVxuICAgIC5zaXplKFtkaWFtZXRlciwgZGlhbWV0ZXJdKVxuICAgIC5wYWRkaW5nKC45KTtcblxuY29uc3Qgc3ZnMyA9IGQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImJ1YmJsZS1jaGFydFwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgMClcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidWJibGVcIik7XG5cbmQzLnNlbGVjdEFsbChcInN2Z1wiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTIwMClcbiAgICAuYXR0cihcIndpZHRoXCIsIGRpYW1ldGVyKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGRpYW1ldGVyKVxuXG5jb25zdCBub2RlcyA9IGQzLmhpZXJhcmNoeShkYXRhc2V0KVxuICAgIC5zdW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuYm94T2ZmaWNlO1xuICAgIH0pO1xuXG5cbmNvbnN0IG5vZGUgPSBzdmczLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgLmRhdGEoYnViYmxlKG5vZGVzKS5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gIWQuY2hpbGRyZW5cbiAgICB9KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNycpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0aXRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnRpdGxlO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInN0dWRpb1wiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnN0dWRpbztcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucjtcbiAgICB9KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yMihpKTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4wM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLnRpdGxlO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMS4zZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGQuZGF0YS5ib3hPZmZpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmQzLnNlbGVjdChzZWxmLmZyYW1lRWxlbWVudClcbiAgICAuc3R5bGUoXCJoZWlnaHRcIiwgZGlhbWV0ZXIgKyBcInB4XCIpO1xuXG59IiwiZXhwb3J0IGNvbnN0IGdlbmRlckRvbnV0ID0gKCkgPT4ge1xuXG5jb25zdCB0b3RhbCA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1hbGVcIixcbiAgICAgICAgY291bnQ6IDg1MDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlbWFsZVwiLFxuICAgICAgICBjb3VudDogMzc3NjJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiT3RoZXJcIixcbiAgICAgICAgY291bnQ6IDE2NjI2XG4gICAgfV1cblxuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3Qgd2lkdGggPSA1MDA7XG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDI7XG5jb25zdCBkb251dFdpZHRoID0gMTAwO1xuY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LWNoYXJ0XCIpXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0LWNoYXJ0JylcbiAgICAvLyAuYXBwZW5kKHN2ZylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAod2lkdGggLyAyKSArIFwiLFwiICsgKGhlaWdodCAvIDIpICsgJyknKVxuXG5jb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSBkb251dFdpZHRoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG5jb25zdCBwaWUgPSBkMy5waWUoKVxuICAgIC52YWx1ZShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5jb3VudFxuICAgIH0pXG4gICAgLnNvcnQobnVsbCk7XG5cbmNvbnN0IGRvbnV0VGlwID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtdGlwXCIpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXG5jb25zdCBwYXRoID0gc3ZnLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLmRhdGEocGllKHRvdGFsKSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgYXJjKVxuICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yKGQuZGF0YS50aXRsZSlcbiAgICB9KVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgIC5kdXJhdGlvbigxNzAwKVxuICAgIC5hdHRyVHdlZW4oXCJkXCIsIHR3ZWVuUGllKVxuXG5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJkb251dC10ZXh0XCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDApXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0xOTMpXG4gICAgLmF0dHIoXCJ5XCIsIDcwKVxuICAgIC50ZXh0KFwiQ2hhcmFjdGVyIGdlbmRlciAoQWxsIFB1Ymxpc2hlcnMpXCIpXG5cbmZ1bmN0aW9uIHR3ZWVuUGllKGIpIHtcbiAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoeyBzdGFydEFuZ2xlOiAxLjEgKiBNYXRoLlBJLCBlbmRBbmdsZTogMS4xICogTWF0aC5QSSB9LCBiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGFyYyhpKHQpKTsgfTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpXG4gICAgZG9udXRUaXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIGxldCBudW0gPSAoTWF0aC5yb3VuZCgoZC5kYXRhLmNvdW50IC8gMTQwMDAwKSAqIDEwMCkpLnRvU3RyaW5nKCkgKyBcIiVcIlxuICAgIGRvbnV0VGlwLmh0bWwobnVtKVxuICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDUxNSkgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSA1MCkgKyBcInB4XCIpXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG59XG5cbmNvbnN0IGxlZ2VuZFJlY3RTaXplID0gMTA7XG5jb25zdCBsZWdlbmRTcGFjaW5nID0gMTE7XG5cbmNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKVxuICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NpcmNsZS1sZWdlbmQnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gaGVpZ2h0ICogY29sb3IuZG9tYWluKCkubGVuZ3RoIC8gMjtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSAtMiAqIGxlZ2VuZFJlY3RTaXplIC0gMTM7XG4gICAgICAgIGxldCB2ZXJ0aWNhbCA9IGkgKiBoZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBob3Jpem9udGFsICsgJywnICsgdmVydGljYWwgKyAnKSc7XG4gICAgfSlcblxubGVnZW5kLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGNvbG9yKVxuICAgIC5hdHRyKCdjeCcsIDApXG4gICAgLmF0dHIoJ2N5JywgMClcbiAgICAuYXR0cigncicsICcuNXJlbScpXG5cbmxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJkb251dC1sZWdlbmRcIilcbiAgICAuYXR0cigneCcsIGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZylcbiAgICAuYXR0cigneScsIGxlZ2VuZFJlY3RTaXplIC0gbGVnZW5kU3BhY2luZyArIDUpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQ7XG59KVxuXG59XG5cbi8vIGZ1dHVyZTogZml4IG1vdXNlb3ZlciBhbmQgbW91c2VvdXQiLCJleHBvcnQgY29uc3QgbWFya2V0U2hhcmUgPSAoKSA9PiB7XG5cbmQzLmNzdignLi4vZGF0YS9tYXJrZXRfc2hhcmUuY3N2JykudGhlbihkID0+IGdyYXBoKGQpKVxuXG5cbmZ1bmN0aW9uIGdyYXBoKGRhdGEpIHtcblxuICAgIGNvbnN0IGtleXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSk7XG4gICAgY29uc3QgbWFyZ2luID0ge3RvcDoyMCwgcmlnaHQ6IDQwLCBib3R0b206IDIwLCBsZWZ0OiA0MH1cbiAgICBjb25zdCB3aWR0aCA9IDkwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0XG4gICAgY29uc3QgaGVpZ2h0ID0gNTUwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b21cbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLHdpZHRoXSlcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5U2NhbGUpXG5cbiAgICBcbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgLngoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geFNjYWxlKGQueWVhcilcbiAgICB9KVxuICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHlTY2FsZShkLnNoYXJlKVxuICAgIH0pXG4gICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpXG4gICAgXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgXCJsaW5lLWNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcblxuICAgIGNvbG9yLmRvbWFpbihkMy5rZXlzKGRhdGFbMF0pLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gXCJ5ZWFyXCJcbiAgICB9KSlcblxuICAgIGNvbnN0IGNvbXBhbmllcyA9IGNvbG9yLmRvbWFpbigpLm1hcChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogZC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZTogK2RbbmFtZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHhTY2FsZS5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueWVhclxuICAgIH0pKVxuXG4gICAgeVNjYWxlLmRvbWFpbihbXG4gICAgICAgIGQzLm1pbihjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5taW4oYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGQzLm1heChjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgNTBcbiAgICBdKVxuXG4gICAgY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLSAyMClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogMjBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcbiAgICBcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDI1KVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIChpICogMjApICsgOTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQubmFtZVxuICAgICAgICB9KVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAuY2FsbCh4QXhpcylcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKFwieVwiLCA4KVxuICAgICAgICAuYXR0cihcImR5XCIsIFwiLjdlbVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAudGV4dChcIlllYXJcIilcblxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmNhbGwoeUF4aXMpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDgpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuN2VtXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgIC50ZXh0KFwiTWFya2V0IFNoYXJlICglKVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgXCItNDBcIilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIFwiLTE1MFwiKVxuXG4gICAgY29uc3QgY29tcGFueSA9IHN2Zy5zZWxlY3RBbGwoXCIuY29tcGFueVwiKVxuICAgICAgICAuZGF0YShjb21wYW5pZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb21wYW55XCIpXG5cbiAgICBjb21wYW55LmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKVxuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcblxuICAgIGNvbXBhbnkuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5kYXR1bShmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4U2NhbGUoZC52YWx1ZS55ZWFyKSArIFwiLFwiICsgeVNjYWxlKGQudmFsdWUuc2hhcmUpICsgXCIpXCJcbiAgICB9KVxuICAgIC5hdHRyKFwieFwiLCAzNilcbiAgICAuYXR0cihcImR5XCIsIFwiLjg1ZW1cIilcbiAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLm5hbWVcbiAgICB9KVxuICAgIFxuICAgIC8vIENyZWRpdCB0byBsYXJzZW5tdGwoYmwub2Nrcy5vcmcvbGFyc2VubXRsKVxuICAgIGNvbnN0IG1vdXNlRyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1vdmVyLWVmZmVjdHNcIik7XG5cbiAgICBtb3VzZUcuYXBwZW5kKFwicGF0aFwiKSAvLyB0aGlzIGlzIHRoZSBibGFjayB2ZXJ0aWNhbCBsaW5lIHRvIGZvbGxvdyBtb3VzZVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2UtbGluZVwiKVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG5cbiAgICBjb25zdCBsaW5lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmUnKTtcblxuICAgIGNvbnN0IG1vdXNlUGVyTGluZSA9IG1vdXNlRy5zZWxlY3RBbGwoJy5tb3VzZS1wZXItbGluZScpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLXBlci1saW5lXCIpO1xuXG4gICAgbW91c2VQZXJMaW5lLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcInJcIiwgNylcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuXG4gICAgbW91c2VQZXJMaW5lLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAsMylcIik7XG5cbiAgICBtb3VzZUcuYXBwZW5kKCdzdmc6cmVjdCcpIC8vIGFwcGVuZCBhIHJlY3QgdG8gY2F0Y2ggbW91c2UgbW92ZW1lbnRzIG9uIGNhbnZhc1xuICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCkgLy8gY2FuJ3QgY2F0Y2ggbW91c2UgZXZlbnRzIG9uIGEgZyBlbGVtZW50XG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHsgLy8gb24gbW91c2Ugb3V0IGhpZGUgbGluZSwgY2lyY2xlcyBhbmQgdGV4dFxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLm1vdXNlLWxpbmVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSBjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSB0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkgeyAvLyBvbiBtb3VzZSBpbiBzaG93IGxpbmUsIGNpcmNsZXMgYW5kIHRleHRcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5tb3VzZS1saW5lXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmUgdGV4dFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uICgpIHsgLy8gbW91c2UgbW92aW5nIG92ZXIgY2FudmFzXG4gICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHRoaXMpO1xuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLm1vdXNlLWxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IFwiTVwiICsgbW91c2VbMF0gKyBcIixcIiArIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZCArPSBcIiBcIiArIG1vdXNlWzBdICsgXCIsXCIgKyAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeFllYXIgPSB4U2NhbGUuaW52ZXJ0KG1vdXNlWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpc2VjdCA9IGQzLmJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBiaXNlY3QoZC52YWx1ZXMsIHhZZWFyKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmVnaW5uaW5nID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGluZXNbaV0uZ2V0VG90YWxMZW5ndGgoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IE1hdGguZmxvb3IoKGJlZ2lubmluZyArIGVuZCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9PT0gZW5kIHx8IHRhcmdldCA9PT0gYmVnaW5uaW5nKSAmJiBwb3MueCAhPT0gbW91c2VbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MueCA+IG1vdXNlWzBdKSBlbmQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCA8IG1vdXNlWzBdKSBiZWdpbm5pbmcgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGJyZWFrOyAvL3Bvc2l0aW9uIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudGV4dCh5U2NhbGUuaW52ZXJ0KHBvcy55KS50b0ZpeGVkKDIpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIG1vdXNlWzBdICsgXCIsXCIgKyBsaW5lc1tpXS5nZXRQb2ludEF0TGVuZ3RoKHRhcmdldCkueSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxufVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCB5ZWFyQnJlYWtkb3duID0gKCkgPT4ge1xuXG5kMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJpZFwiLCBcImJhci1jaGFydFwiKVxuICAuYXR0cihcIndpZHRoXCIsIDEyMDApXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMClcblxuY29uc3Qgc3ZnMiA9IGQzLnNlbGVjdChcIiNiYXItY2hhcnRcIiksXG4gIG1hcmdpbiA9IDE1MCxcbiAgd2lkdGgyID0gc3ZnMi5hdHRyKFwid2lkdGhcIikgLSBtYXJnaW4sXG4gIGhlaWdodDIgPSBzdmcyLmF0dHIoXCJoZWlnaHRcIikgLSBtYXJnaW47XG5cblxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoMl0pLnBhZGRpbmcoMC42KSxcbiAgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0MiwgMF0pO1xuXG5jb25zdCBnID0gc3ZnMi5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgMTAwICsgXCIsXCIgKyAxMDAgKyBcIilcIik7XG5cbmQzLmNzdihcIi4vZGF0YS95ZWFyRGF0YS5jc3ZcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICB4U2NhbGUuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pKTtcbiAgeVNjYWxlLmRvbWFpbihbMCwgMTMwMF0pO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQyICsgXCIpXCIpXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIGhlaWdodDIgLSAyMDApXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoMiAtIDEwMClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiWWVhclwiKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLnRpY2tzKDEwKSlcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgNilcbiAgICAuYXR0cihcImR5XCIsIFwiLTUuMWVtXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAudGV4dChcIihVbmlxdWUpIGlzc3VlcyByZWxlYXNlZFwiKTtcblxuICBzdmcyLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiIyBvZiByZWxlYXNlcyAoTWFydmVsKVwiKVxuXG4gIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLnllYXIpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKDApOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKDApOyB9KTtcblxuICBzdmcyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqIDEzKSB9KVxufSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2hpZ2hsaWdodCcpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDIwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAyKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDEwOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKSArIDEwOyB9KTtcblxuICBnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cignY2xhc3MnLCAndmFsJylcbiAgICAuYXR0cignaWQnLCAnaXNzdWVzJylcbiAgICAuYXR0cigneCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA1OTA7XG4gICAgfSlcbiAgICAuYXR0cigneScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAxMDtcbiAgICB9KVxuICAgIC50ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgJHtbZC5pc3N1ZXNdfSBpc3N1ZXMgcmVsZWFzZWQgaW4gJHtkLnllYXJ9YDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdjbGFzcycsICdiYXInKTtcbiAgZDMuc2VsZWN0KHRoaXMpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig0MDApXG4gICAgLmF0dHIoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3Vlcyk7IH0pO1xuXG4gIGQzLnNlbGVjdEFsbCgnLnZhbCcpXG4gICAgLnJlbW92ZSgpXG59XG59XG4iLCJjb25zdCBzcGxhc2ggPSAoKSA9PiB7XG5cbmNvbnN0IHRyZWVEYXRhID0ge1xuICAgIFwibmFtZVwiOiBcIk1hcnZlbFwiLFxuICAgIFwidmFsdWVcIjogMTUsXG4gICAgXCJ0eXBlXCI6IFwiYmxhY2tcIixcbiAgICBcImxldmVsXCI6IFwicmVkXCIsXG4gICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImdyZXlcIixcbiAgICAgICAgICAgIFwibGV2ZWxcIjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTcGlkZXItTWFuXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcInJlZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBYmVsXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcImJsdWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBd2FuXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcImdyZWVuXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVub2NoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNy41LFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGV2ZWxcIjogXCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXp1cmFcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwiZ3JlZW5cIlxuICAgICAgICB9XG4gICAgXVxufTtcblxuLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBkaWFncmFtXG5jb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA5MCwgYm90dG9tOiAzMCwgbGVmdDogOTAgfSxcbiAgICB3aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBkZWNsYXJlcyBhIHRyZWUgbGF5b3V0IGFuZCBhc3NpZ25zIHRoZSBzaXplXG5jb25zdCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuLy8gIGFzc2lnbnMgdGhlIGRhdGEgdG8gYSBoaWVyYXJjaHkgdXNpbmcgcGFyZW50LWNoaWxkIHJlbGF0aW9uc2hpcHNcbmxldCBub2RlcyA9IGQzLmhpZXJhcmNoeSh0cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcblxuLy8gbWFwcyB0aGUgbm9kZSBkYXRhIHRvIHRoZSB0cmVlIGxheW91dFxubm9kZXMgPSB0cmVlbWFwKG5vZGVzKTtcblxuLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXG4vLyBhcHBlbmRzIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4vLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbmNvbnN0IHRyZWVDaGFydCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKSxcbiAgICBnID0gdHJlZUNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbi8vIGFkZHMgdGhlIGxpbmtzIGJldHdlZW4gdGhlIG5vZGVzXG5jb25zdCBsaW5rID0gZy5zZWxlY3RBbGwoXCIubGlua1wiKVxuICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSkpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIGQgPT4gZC5kYXRhLmxldmVsKVxuICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIFwiTVwiICsgZC55ICsgXCIsXCIgKyBkLnhcbiAgICAgICAgICAgICsgXCJDXCIgKyAoZC55ICsgZC5wYXJlbnQueSkgLyAyICsgXCIsXCIgKyBkLnhcbiAgICAgICAgICAgICsgXCIgXCIgKyAoZC55ICsgZC5wYXJlbnQueSkgLyAyICsgXCIsXCIgKyBkLnBhcmVudC54XG4gICAgICAgICAgICArIFwiIFwiICsgZC5wYXJlbnQueSArIFwiLFwiICsgZC5wYXJlbnQueDtcbiAgICB9KTtcblxuLy8gYWRkcyBlYWNoIG5vZGUgYXMgYSBncm91cFxuY29uc3Qgbm9kZSA9IGcuc2VsZWN0QWxsKFwiLm5vZGVcIilcbiAgICAuZGF0YShub2Rlcy5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gXCJub2RlXCIgKyAoZC5jaGlsZHJlbiA/IFwiIG5vZGUtLWludGVybmFsXCIgOiBcIiBub2RlLS1sZWFmXCIpKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gXCJ0cmFuc2xhdGUoXCIgKyBkLnkgKyBcIixcIiArIGQueCArIFwiKVwiKTtcblxuLy8gYWRkcyB0aGUgY2lyY2xlIHRvIHRoZSBub2RlXG5ub2RlLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiclwiLCBkID0+IGQuZGF0YS52YWx1ZSlcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgZCA9PiBkLmRhdGEudHlwZSlcbiAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gZC5kYXRhLmxldmVsKTtcblxuLy8gYWRkcyB0aGUgdGV4dCB0byB0aGUgbm9kZVxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgLmF0dHIoXCJ4XCIsIGQgPT4gZC5jaGlsZHJlbiA/IChkLmRhdGEudmFsdWUgKyA1KSAqIC0xIDogZC5kYXRhLnZhbHVlICsgNSlcbiAgICAuYXR0cihcInlcIiwgZCA9PiBkLmNoaWxkcmVuICYmIGQuZGVwdGggIT09IDAgPyAtKGQuZGF0YS52YWx1ZSArIDUpIDogZClcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBkID0+IGQuY2hpbGRyZW4gPyBcImVuZFwiIDogXCJzdGFydFwiKVxuICAgIC50ZXh0KGQgPT4gZC5kYXRhLm5hbWUpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9