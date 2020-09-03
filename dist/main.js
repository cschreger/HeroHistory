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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NwbGFzaF9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdvWWVhckJyZWFrZG93biIsImdvR2VuZGVyQnJlYWtkb3duIiwiZ29Cb3hPZmZpY2VCdWJibGUiLCJnb01hcmtldFNoYXJlIiwiZWxlbSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImVsZW0yIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwieWVhckJyZWFrZG93biIsImdlbmRlckRvbnV0IiwiYm94T2ZmaWNlQnViYmxlIiwibWFya2V0U2hhcmUiLCJkYXRhc2V0IiwiZGlhbWV0ZXIiLCJjb2xvcjIiLCJkMyIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJkZWZhdWx0X2hlaWdodCIsImRlZmF1bHRfcmF0aW8iLCJzZXRfc2l6ZSIsImN1cnJlbnRfd2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY3VycmVudF9oZWlnaHQiLCJpbm5lckhlaWdodCIsImN1cnJlbnRfcmF0aW8iLCJidWJibGUiLCJwYWNrIiwic2l6ZSIsInBhZGRpbmciLCJzdmczIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm5vZGVzIiwiaGllcmFyY2h5Iiwic3VtIiwiZCIsImJveE9mZmljZSIsIm5vZGUiLCJkYXRhIiwiZGVzY2VuZGFudHMiLCJlbnRlciIsImZpbHRlciIsImNoaWxkcmVuIiwib24iLCJpIiwieCIsInkiLCJ0ZXh0IiwidGl0bGUiLCJzdHVkaW8iLCJyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic2VsZiIsImZyYW1lRWxlbWVudCIsInRvdGFsIiwiY291bnQiLCJoZWlnaHQiLCJ3aWR0aCIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJkb251dFdpZHRoIiwiY29sb3IiLCJzdmciLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwicGllIiwidmFsdWUiLCJzb3J0IiwiZG9udXRUaXAiLCJwYXRoIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJhdHRyVHdlZW4iLCJ0d2VlblBpZSIsImIiLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJQSSIsImVuZEFuZ2xlIiwidCIsIm9uTW91c2VPdmVyIiwibnVtIiwicm91bmQiLCJodG1sIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwib25Nb3VzZU91dCIsImxlZ2VuZFJlY3RTaXplIiwibGVnZW5kU3BhY2luZyIsImxlZ2VuZCIsImRvbWFpbiIsIm9mZnNldCIsImxlbmd0aCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNzdiIsInRoZW4iLCJncmFwaCIsImtleXMiLCJjb2x1bW5zIiwic2xpY2UiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieVNjYWxlIiwieEF4aXMiLCJheGlzQm90dG9tIiwieUF4aXMiLCJheGlzTGVmdCIsImxpbmUiLCJ5ZWFyIiwic2hhcmUiLCJjdXJ2ZSIsImN1cnZlQ2FyZGluYWwiLCJrZXkiLCJjb21wYW5pZXMiLCJtYXAiLCJuYW1lIiwidmFsdWVzIiwiZXh0ZW50IiwiYyIsInYiLCJjYWxsIiwiY29tcGFueSIsImRhdHVtIiwibW91c2VHIiwibGluZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW91c2VQZXJMaW5lIiwibW91c2UiLCJ4WWVhciIsImludmVydCIsImJpc2VjdCIsImJpc2VjdG9yIiwiaWR4IiwiYmVnaW5uaW5nIiwiZW5kIiwiZ2V0VG90YWxMZW5ndGgiLCJ0YXJnZXQiLCJmbG9vciIsInBvcyIsImdldFBvaW50QXRMZW5ndGgiLCJzdmcyIiwid2lkdGgyIiwiaGVpZ2h0MiIsInNjYWxlQmFuZCIsImciLCJ0aWNrRm9ybWF0IiwidGlja3MiLCJiYW5kd2lkdGgiLCJpc3N1ZXMiLCJkZWxheSIsInJlbW92ZSIsInNwbGFzaCIsInRyZWVEYXRhIiwidHJlZW1hcCIsInRyZWUiLCJ0cmVlQ2hhcnQiLCJsaW5rIiwibGV2ZWwiLCJwYXJlbnQiLCJ0eXBlIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJI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TCxDQUtVLFVBQUFaLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNHLElBQUYsQ0FBT3dGLElBQVg7QUFBQSxHQUxYO0FBT0MsQ0EzR0Q7O0FBNkdlb0MscUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3R0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQge3llYXJCcmVha2Rvd259IGZyb20gJy4vc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyJztcbmltcG9ydCB7Z2VuZGVyRG9udXR9IGZyb20gJy4vc2NyaXB0cy9nZW5kZXJfZG9udXQnO1xuaW1wb3J0IHtib3hPZmZpY2VCdWJibGV9IGZyb20gJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJ1xuaW1wb3J0IHttYXJrZXRTaGFyZX0gZnJvbSAnLi9zY3JpcHRzL21hcmtldF9zaGFyZSdcbmltcG9ydCB7c3BsYXNofSBmcm9tICcuL3NjcmlwdHMvc3BsYXNoX3BhZ2UnO1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhci1icmVha2Rvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvWWVhckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29HZW5kZXJCcmVha2Rvd24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1vZmZpY2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQm94T2ZmaWNlQnViYmxlKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXJrZXQtc2hhcmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvTWFya2V0U2hhcmUpXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29TcGxhc2gpXG5cblxuLy8gZnVuY3Rpb24gZ29TcGxhc2ggKCkge1xuLy8gICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXItYnJlYWtkb3duXCIpXG4vLyAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4vLyAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcbi8vICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiMzOWNjY2NcIjtcbi8vICAgICBzcGxhc2goKTtcbi8vIH1cblxuZnVuY3Rpb24gZ29ZZWFyQnJlYWtkb3duICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKSBcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGxldCBlbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb251dC10aXAnKVxuICAgICAgICBlbGVtMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0yKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH1cbiAgICBcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyLWJyZWFrZG93blwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMzljY2NjXCI7XG4gICAgeWVhckJyZWFrZG93bigpO1xufVxuXG5mdW5jdGlvbiBnb0dlbmRlckJyZWFrZG93biAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VuZGVyLWJyZWFrZG93blwiKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjN2ZiZGZmXCJcbiAgICBnZW5kZXJEb251dCgpO1xufVxuXG5mdW5jdGlvbiBnb0JveE9mZmljZUJ1YmJsZSAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJlZVwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXItY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9udXQtY2hhcnRcIilcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgIGxldCBlbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb251dC10aXAnKVxuICAgICAgICBlbGVtMi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0yKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1icmVha2Rvd25cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3gtb2ZmaWNlXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiM5MmE4ZDFcIlxuICAgIGJveE9mZmljZUJ1YmJsZSgpO1xufVxuXG5mdW5jdGlvbiBnb01hcmtldFNoYXJlICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmVlXCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhci1jaGFydFwiKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyLWNoYXJ0XCIpXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llYXItYnJlYWtkb3duXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbnV0LWNoYXJ0XCIpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb251dC1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgbGV0IGVsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbnV0LXRpcCcpXG4gICAgICAgIGVsZW0yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbTIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuZGVyLWJyZWFrZG93blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtY2hhcnRcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1jaGFydFwiKVxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtb2ZmaWNlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFya2V0LXNoYXJlXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiM3RkNEQ0RcIjtcbiAgICBtYXJrZXRTaGFyZSgpO1xufSIsImV4cG9ydCBjb25zdCBib3hPZmZpY2VCdWJibGUgPSAoKSA9PiB7XG5cbmNvbnN0IGRhdGFzZXQgPSB7XG4gICAgXCJjaGlsZHJlblwiOiBbe1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEVuZGdhbWVcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDI3OTc4MDA1NjQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogSW5maW5pdHkgV2FyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAyMDQ4MzU5NzU0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQXZlbmdlcnNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE1MTg4MTI5ODhcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBBZ2Ugb2YgVWx0cm9uXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxNDA1NDAzNjk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCbGFjayBQYW50aGVyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMzQ2OTEzMTcxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbmNyZWRpYmxlcyAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiRGlzbmV5L1BpeGFyXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEyNDI4MDUzNTlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklyb24gTWFuIDNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEyMTQ4MTEyNTJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gQW1lcmljYTogQ2l2aWwgV2FyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTUzMzA0NDk1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcXVhbWFuXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW46IEZhciBGcm9tIEhvbWVcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTMxOTI3OTk2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXB0YWluIE1hcnZlbFwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTEyODI3NDc5NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0IFJpc2VzXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwODEwNDEyODdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkpva2VyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwNzQyNTEzMTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEYXJrIEtuaWdodFwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMDA0NTU4NDQ0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuIDNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4OTA4NzE2MjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW46IEhvbWVjb21pbmdcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4ODAxNjY5MjRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJhdG1hbiB2LiBTdXBlcm1hbjogRGF3biBvZiBKdXN0aWNlXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg3MzYzNDkxOVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3VhcmRpYW5zIG9mIHRoZSBHYWxheHkgVm9sLiAyXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZlbm9tXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODU2MDg1MTUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaG9yOiBSYWduYXJva1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODUzOTc3MTI2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXb25kZXIgV29tYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODYzNzU2MDUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL1NvbnlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODIxNzA4NTUxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGlkZXItTWFuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODg5NzY0NTNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYWRwb29sIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODUwNDY5MjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYWRwb29sXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsLzIwdGggQ2VudHVyeSBGb3hcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogNzgzMTEyOTc5XG4gICAgfSxcblxuICAgIF1cbn1cblxubGV0IGRpYW1ldGVyID0gOTAwO1xuY29uc3QgY29sb3IyID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuXG5jb25zdCBkZWZhdWx0X2hlaWdodCA9IDc1MDtcbmNvbnN0IGRlZmF1bHRfcmF0aW8gPSBkaWFtZXRlciAvIGRlZmF1bHRfaGVpZ2h0O1xuXG5cbmZ1bmN0aW9uIHNldF9zaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBjdXJyZW50X2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdXJyZW50X3JhdGlvID0gY3VycmVudF93aWR0aCAvIGN1cnJlbnRfaGVpZ2h0O1xuXG4gICAgaWYgKGN1cnJlbnRfcmF0aW8gPiBkZWZhdWx0X3JhdGlvKSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDEyMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpYW1ldGVyID0gNjAwO1xuICAgIH1cbn07XG5zZXRfc2l6ZSgpO1xuXG5jb25zdCBidWJibGUgPSBkMy5wYWNrKGRhdGFzZXQpXG4gICAgLnNpemUoW2RpYW1ldGVyLCBkaWFtZXRlcl0pXG4gICAgLnBhZGRpbmcoLjkpO1xuXG5jb25zdCBzdmczID0gZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiYnViYmxlLWNoYXJ0XCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAwKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJ1YmJsZVwiKTtcblxuZDMuc2VsZWN0QWxsKFwic3ZnXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMjAwKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgZGlhbWV0ZXIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZGlhbWV0ZXIpXG5cbmNvbnN0IG5vZGVzID0gZDMuaGllcmFyY2h5KGRhdGFzZXQpXG4gICAgLnN1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5ib3hPZmZpY2U7XG4gICAgfSk7XG5cblxuY29uc3Qgbm9kZSA9IHN2ZzMuc2VsZWN0QWxsKFwiLm5vZGVcIilcbiAgICAuZGF0YShidWJibGUobm9kZXMpLmRlc2NlbmRhbnRzKCkpXG4gICAgLmVudGVyKClcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAhZC5jaGlsZHJlblxuICAgIH0pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy43Jyk7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCcxMDAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInRpdGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQudGl0bGU7XG4gICAgfSk7XG5cbm5vZGUuYXBwZW5kKFwic3R1ZGlvXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuc3R1ZGlvO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yO1xuICAgIH0pXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gY29sb3IyKGkpO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiLjAzZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEudGl0bGU7XG4gICAgfSlcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5yIC8gNTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5cbm5vZGUuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIxLjNlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZC5kYXRhLmJveE9mZmljZS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxLCcpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuZDMuc2VsZWN0KHNlbGYuZnJhbWVFbGVtZW50KVxuICAgIC5zdHlsZShcImhlaWdodFwiLCBkaWFtZXRlciArIFwicHhcIik7XG5cbn0iLCJleHBvcnQgY29uc3QgZ2VuZGVyRG9udXQgPSAoKSA9PiB7XG5cbmNvbnN0IHRvdGFsID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTWFsZVwiLFxuICAgICAgICBjb3VudDogODUwMjNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVtYWxlXCIsXG4gICAgICAgIGNvdW50OiAzNzc2MlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJPdGhlclwiLFxuICAgICAgICBjb3VudDogMTY2MjZcbiAgICB9XVxuXG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCB3aWR0aCA9IDUwMDtcbmNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMjtcbmNvbnN0IGRvbnV0V2lkdGggPSAxMDA7XG5jb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuZDMuc2VsZWN0KFwiI2NoYXJ0LWNvbnRhaW5lclwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtY2hhcnRcIilcblxuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZG9udXQtY2hhcnQnKVxuICAgIC8vIC5hcHBlbmQoc3ZnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArICh3aWR0aCAvIDIpICsgXCIsXCIgKyAoaGVpZ2h0IC8gMikgKyAnKScpXG5cbmNvbnN0IGFyYyA9IGQzLmFyYygpXG4gICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIGRvbnV0V2lkdGgpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbmNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmNvdW50XG4gICAgfSlcbiAgICAuc29ydChudWxsKTtcblxuY29uc3QgZG9udXRUaXAgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJkb251dC10aXBcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cbmNvbnN0IHBhdGggPSBzdmcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAuZGF0YShwaWUodG90YWwpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gY29sb3IoZC5kYXRhLnRpdGxlKVxuICAgIH0pXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpXG4gICAgLmR1cmF0aW9uKDE3MDApXG4gICAgLmF0dHJUd2VlbihcImRcIiwgdHdlZW5QaWUpXG5cbnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LXRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgLTE5MylcbiAgICAuYXR0cihcInlcIiwgNzApXG4gICAgLnRleHQoXCJDaGFyYWN0ZXIgZ2VuZGVyIChBbGwgUHVibGlzaGVycylcIilcblxuZnVuY3Rpb24gdHdlZW5QaWUoYikge1xuICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh7IHN0YXJ0QW5nbGU6IDEuMSAqIE1hdGguUEksIGVuZEFuZ2xlOiAxLjEgKiBNYXRoLlBJIH0sIGIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gYXJjKGkodCkpOyB9O1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3ZlcihkLCBpKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1JylcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDUwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgbGV0IG51bSA9IChNYXRoLnJvdW5kKChkLmRhdGEuY291bnQgLyAxNDAwMDApICogMTAwKSkudG9TdHJpbmcoKSArIFwiJVwiXG4gICAgZG9udXRUaXAuaHRtbChudW0pXG4gICAgICAgIC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYICsgNTE1KSArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDUwKSArIFwicHhcIilcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChkLCBpKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuICAgIGRvbnV0VGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbn1cblxuY29uc3QgbGVnZW5kUmVjdFNpemUgPSAxMDtcbmNvbnN0IGxlZ2VuZFNwYWNpbmcgPSAxMTtcblxuY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnLmxlZ2VuZCcpXG4gICAgLmRhdGEoY29sb3IuZG9tYWluKCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAnY2lyY2xlLWxlZ2VuZCcpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSBsZWdlbmRSZWN0U2l6ZSArIGxlZ2VuZFNwYWNpbmc7XG4gICAgICAgIGxldCBvZmZzZXQgPSBoZWlnaHQgKiBjb2xvci5kb21haW4oKS5sZW5ndGggLyAyO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbCA9IC0yICogbGVnZW5kUmVjdFNpemUgLSAxMztcbiAgICAgICAgbGV0IHZlcnRpY2FsID0gaSAqIGhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGhvcml6b250YWwgKyAnLCcgKyB2ZXJ0aWNhbCArICcpJztcbiAgICB9KVxuXG5sZWdlbmQuYXBwZW5kKCdjaXJjbGUnKVxuICAgIC5zdHlsZSgnZmlsbCcsIGNvbG9yKVxuICAgIC5zdHlsZSgnc3Ryb2tlJywgY29sb3IpXG4gICAgLmF0dHIoJ2N4JywgMClcbiAgICAuYXR0cignY3knLCAwKVxuICAgIC5hdHRyKCdyJywgJy41cmVtJylcblxubGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoXCJpZFwiLCBcImRvbnV0LWxlZ2VuZFwiKVxuICAgIC5hdHRyKCd4JywgbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nKVxuICAgIC5hdHRyKCd5JywgbGVnZW5kUmVjdFNpemUgLSBsZWdlbmRTcGFjaW5nICsgNSlcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbn0pXG5cbn1cblxuLy8gZnV0dXJlOiBmaXggbW91c2VvdmVyIGFuZCBtb3VzZW91dCIsImV4cG9ydCBjb25zdCBtYXJrZXRTaGFyZSA9ICgpID0+IHtcblxuZDMuY3N2KCcuLi9kYXRhL21hcmtldF9zaGFyZS5jc3YnKS50aGVuKGQgPT4gZ3JhcGgoZCkpXG5cblxuZnVuY3Rpb24gZ3JhcGgoZGF0YSkge1xuXG4gICAgY29uc3Qga2V5cyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKTtcbiAgICBjb25zdCBtYXJnaW4gPSB7dG9wOjIwLCByaWdodDogNDAsIGJvdHRvbTogMjAsIGxlZnQ6IDQwfVxuICAgIGNvbnN0IHdpZHRoID0gOTAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRcbiAgICBjb25zdCBoZWlnaHQgPSA1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsd2lkdGhdKVxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG4gICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSlcbiAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHlTY2FsZSlcblxuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAueChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB4U2NhbGUoZC55ZWFyKVxuICAgIH0pXG4gICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geVNjYWxlKGQuc2hhcmUpXG4gICAgfSlcbiAgICAuY3VydmUoZDMuY3VydmVDYXJkaW5hbClcbiAgICBcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY2hhcnQtY29udGFpbmVyXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImxpbmUtY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKVxuXG4gICAgY29sb3IuZG9tYWluKGQzLmtleXMoZGF0YVswXSkuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICE9PSBcInllYXJcIlxuICAgIH0pKVxuXG4gICAgY29uc3QgY29tcGFuaWVzID0gY29sb3IuZG9tYWluKCkubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBkLnllYXIsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlOiArZFtuYW1lXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgeFNjYWxlLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC55ZWFyXG4gICAgfSkpXG5cbiAgICB5U2NhbGUuZG9tYWluKFtcbiAgICAgICAgZDMubWluKGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIGQzLm1pbihjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gZDMubWF4KGNvbXBhbmllcywgZnVuY3Rpb24oYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB2LnNoYXJlXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICA1MFxuICAgIF0pXG5cbiAgICBjb25zdCBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDIwKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAyMFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuICAgIFxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gMjUpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGkgKiAyMCkgKyA5O1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKHhBeGlzKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgICAuY2FsbCh5QXhpcylcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgOClcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi43ZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLnRleHQoXCJNYXJrZXQgU2hhcmUgKCUpXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBcIi00MFwiKVxuICAgICAgICAuYXR0cihcInhcIiwgXCItMTUwXCIpXG5cbiAgICBjb25zdCBjb21wYW55ID0gc3ZnLnNlbGVjdEFsbChcIi5jb21wYW55XCIpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbXBhbnlcIilcblxuICAgIGNvbXBhbnkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpXG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IoZC5uYW1lKVxuICAgICAgICB9KVxuXG4gICAgY29tcGFueS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmRhdHVtKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHhTY2FsZShkLnZhbHVlLnllYXIpICsgXCIsXCIgKyB5U2NhbGUoZC52YWx1ZS5zaGFyZSkgKyBcIilcIlxuICAgIH0pXG4gICAgLmF0dHIoXCJ4XCIsIDM2KVxuICAgIC5hdHRyKFwiZHlcIiwgXCIuODVlbVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubmFtZVxuICAgIH0pXG4gICAgXG4gICAgLy8gQ3JlZGl0IHRvIGxhcnNlbm10bChibC5vY2tzLm9yZy9sYXJzZW5tdGwpXG4gICAgY29uc3QgbW91c2VHID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXNlLW92ZXItZWZmZWN0c1wiKTtcblxuICAgIG1vdXNlRy5hcHBlbmQoXCJwYXRoXCIpIC8vIHRoaXMgaXMgdGhlIGJsYWNrIHZlcnRpY2FsIGxpbmUgdG8gZm9sbG93IG1vdXNlXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtb3VzZS1saW5lXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgIGNvbnN0IGxpbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZScpO1xuXG4gICAgY29uc3QgbW91c2VQZXJMaW5lID0gbW91c2VHLnNlbGVjdEFsbCgnLm1vdXNlLXBlci1saW5lJylcbiAgICAgICAgLmRhdGEoY29tcGFuaWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibW91c2UtcGVyLWxpbmVcIik7XG5cbiAgICBtb3VzZVBlckxpbmUuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiclwiLCA3KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjBcIik7XG5cbiAgICBtb3VzZVBlckxpbmUuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMCwzKVwiKTtcblxuICAgIG1vdXNlRy5hcHBlbmQoJ3N2ZzpyZWN0JykgLy8gYXBwZW5kIGEgcmVjdCB0byBjYXRjaCBtb3VzZSBtb3ZlbWVudHMgb24gY2FudmFzXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKSAvLyBjYW4ndCBjYXRjaCBtb3VzZSBldmVudHMgb24gYSBnIGVsZW1lbnRcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5hdHRyKCdwb2ludGVyLWV2ZW50cycsICdhbGwnKVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkgeyAvLyBvbiBtb3VzZSBvdXQgaGlkZSBsaW5lLCBjaXJjbGVzIGFuZCB0ZXh0XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIGNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLm1vdXNlLXBlci1saW5lIHRleHRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7IC8vIG9uIG1vdXNlIGluIHNob3cgbGluZSwgY2lyY2xlcyBhbmQgdGV4dFxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLm1vdXNlLWxpbmVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSBjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5tb3VzZS1wZXItbGluZSB0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkgeyAvLyBtb3VzZSBtb3Zpbmcgb3ZlciBjYW52YXNcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2UodGhpcyk7XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIubW91c2UtbGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkID0gXCJNXCIgKyBtb3VzZVswXSArIFwiLFwiICsgaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkICs9IFwiIFwiICsgbW91c2VbMF0gKyBcIixcIiArIDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubW91c2UtcGVyLWxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4WWVhciA9IHhTY2FsZS5pbnZlcnQobW91c2VbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmlzZWN0ID0gZDMuYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGJpc2VjdChkLnZhbHVlcywgeFllYXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiZWdpbm5pbmcgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBsaW5lc1tpXS5nZXRUb3RhbExlbmd0aCgpXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gTWF0aC5mbG9vcigoYmVnaW5uaW5nICsgZW5kKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGxpbmVzW2ldLmdldFBvaW50QXRMZW5ndGgodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodGFyZ2V0ID09PSBlbmQgfHwgdGFyZ2V0ID09PSBiZWdpbm5pbmcpICYmIHBvcy54ICE9PSBtb3VzZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcy54ID4gbW91c2VbMF0pIGVuZCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IDwgbW91c2VbMF0pIGJlZ2lubmluZyA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7IC8vcG9zaXRpb24gZm91bmRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuc2VsZWN0KCd0ZXh0JylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHlTY2FsZS5pbnZlcnQocG9zLnkpLnRvRml4ZWQoMikpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbW91c2VbMF0gKyBcIixcIiArIGxpbmVzW2ldLmdldFBvaW50QXRMZW5ndGgodGFyZ2V0KS55ICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG59XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHllYXJCcmVha2Rvd24gPSAoKSA9PiB7XG5cbmQzLnNlbGVjdChcIiNjaGFydC1jb250YWluZXJcIilcbiAgLmFwcGVuZChcInN2Z1wiKVxuICAuYXR0cihcImlkXCIsIFwiYmFyLWNoYXJ0XCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgMTIwMClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgNTAwKVxuXG5jb25zdCBzdmcyID0gZDMuc2VsZWN0KFwiI2Jhci1jaGFydFwiKSxcbiAgbWFyZ2luID0gMTUwLFxuICB3aWR0aDIgPSBzdmcyLmF0dHIoXCJ3aWR0aFwiKSAtIG1hcmdpbixcbiAgaGVpZ2h0MiA9IHN2ZzIuYXR0cihcImhlaWdodFwiKSAtIG1hcmdpbjtcblxuXG5jb25zdCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGgyXSkucGFkZGluZygwLjYpLFxuICB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQyLCAwXSk7XG5cbmNvbnN0IGcgPSBzdmcyLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAxMDAgKyBcIixcIiArIDEwMCArIFwiKVwiKTtcblxuZDMuY3N2KFwiLi9kYXRhL3llYXJEYXRhLmNzdlwiKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gIHhTY2FsZS5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkpO1xuICB5U2NhbGUuZG9tYWluKFswLCAxMzAwXSk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodDIgKyBcIilcIilcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInlcIiwgaGVpZ2h0MiAtIDIwMClcbiAgICAuYXR0cihcInhcIiwgd2lkdGgyIC0gMTAwKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgLnRleHQoXCJZZWFyXCIpO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSlcbiAgICAgIC50aWNrRm9ybWF0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSkudGlja3MoMTApKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgIC5hdHRyKFwieVwiLCA2KVxuICAgIC5hdHRyKFwiZHlcIiwgXCItNS4xZW1cIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiKFVuaXF1ZSkgaXNzdWVzIHJlbGVhc2VkXCIpO1xuXG4gIHN2ZzIuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwwKVwiKVxuICAgIC5hdHRyKFwieFwiLCA1MClcbiAgICAuYXR0cihcInlcIiwgNTApXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyNHB4XCIpXG4gICAgLnRleHQoXCIjIG9mIHJlbGVhc2VzIChNYXJ2ZWwpXCIpXG5cbiAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBvbk1vdXNlT3ZlcilcbiAgICAub24oXCJtb3VzZW91dFwiLCBvbk1vdXNlT3V0KVxuICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQueWVhcik7IH0pXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoMCk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoMCk7IH0pO1xuXG4gIHN2ZzIuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTIwMClcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0MiAtIHlTY2FsZShkLmlzc3VlcykgfSlcbiAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIChpICogMTMpIH0pXG59KTtcblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoZCwgaSkge1xuICBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnLCAnaGlnaGxpZ2h0Jyk7XG4gIGQzLnNlbGVjdCh0aGlzKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSArIDIpXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIC0gMTA7IH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpICsgMTA7IH0pO1xuXG4gIGcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKCdjbGFzcycsICd2YWwnKVxuICAgIC5hdHRyKCdpZCcsICdpc3N1ZXMnKVxuICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDU5MDtcbiAgICB9KVxuICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDEwO1xuICAgIH0pXG4gICAgLnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGAke1tkLmlzc3Vlc119IGlzc3VlcyByZWxlYXNlZCBpbiAke2QueWVhcn1gO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2JhcicpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKTsgfSk7XG5cbiAgZDMuc2VsZWN0QWxsKCcudmFsJylcbiAgICAucmVtb3ZlKClcbn1cbn1cbiIsImNvbnN0IHNwbGFzaCA9ICgpID0+IHtcblxuY29uc3QgdHJlZURhdGEgPSB7XG4gICAgXCJuYW1lXCI6IFwiTWFydmVsXCIsXG4gICAgXCJ2YWx1ZVwiOiAxNSxcbiAgICBcInR5cGVcIjogXCJibGFja1wiLFxuICAgIFwibGV2ZWxcIjogXCJyZWRcIixcbiAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ3JleVwiLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcInJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwicmVkXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkFiZWxcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwiYmx1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkF3YW5cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJncmV5XCIsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW5vY2hcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3LjUsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZXZlbFwiOiBcIm9yYW5nZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBenVyYVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImdyZXlcIixcbiAgICAgICAgICAgIFwibGV2ZWxcIjogXCJncmVlblwiXG4gICAgICAgIH1cbiAgICBdXG59O1xuXG4vLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGRpYWdyYW1cbmNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDkwLCBib3R0b206IDMwLCBsZWZ0OiA5MCB9LFxuICAgIHdpZHRoID0gNjYwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNTAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbi8vIGRlY2xhcmVzIGEgdHJlZSBsYXlvdXQgYW5kIGFzc2lnbnMgdGhlIHNpemVcbmNvbnN0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbaGVpZ2h0LCB3aWR0aF0pO1xuXG4vLyAgYXNzaWducyB0aGUgZGF0YSB0byBhIGhpZXJhcmNoeSB1c2luZyBwYXJlbnQtY2hpbGQgcmVsYXRpb25zaGlwc1xubGV0IG5vZGVzID0gZDMuaGllcmFyY2h5KHRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuXG4vLyBtYXBzIHRoZSBub2RlIGRhdGEgdG8gdGhlIHRyZWUgbGF5b3V0XG5ub2RlcyA9IHRyZWVtYXAobm9kZXMpO1xuXG4vLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGJvZHkgb2YgdGhlIHBhZ2Vcbi8vIGFwcGVuZHMgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2Zydcbi8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxuY29uc3QgdHJlZUNoYXJ0ID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pLFxuICAgIGcgPSB0cmVlQ2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuLy8gYWRkcyB0aGUgbGlua3MgYmV0d2VlbiB0aGUgbm9kZXNcbmNvbnN0IGxpbmsgPSBnLnNlbGVjdEFsbChcIi5saW5rXCIpXG4gICAgLmRhdGEobm9kZXMuZGVzY2VuZGFudHMoKS5zbGljZSgxKSlcbiAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIilcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgZCA9PiBkLmRhdGEubGV2ZWwpXG4gICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICByZXR1cm4gXCJNXCIgKyBkLnkgKyBcIixcIiArIGQueFxuICAgICAgICAgICAgKyBcIkNcIiArIChkLnkgKyBkLnBhcmVudC55KSAvIDIgKyBcIixcIiArIGQueFxuICAgICAgICAgICAgKyBcIiBcIiArIChkLnkgKyBkLnBhcmVudC55KSAvIDIgKyBcIixcIiArIGQucGFyZW50LnhcbiAgICAgICAgICAgICsgXCIgXCIgKyBkLnBhcmVudC55ICsgXCIsXCIgKyBkLnBhcmVudC54O1xuICAgIH0pO1xuXG4vLyBhZGRzIGVhY2ggbm9kZSBhcyBhIGdyb3VwXG5jb25zdCBub2RlID0gZy5zZWxlY3RBbGwoXCIubm9kZVwiKVxuICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCkpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBcIm5vZGVcIiArIChkLmNoaWxkcmVuID8gXCIgbm9kZS0taW50ZXJuYWxcIiA6IFwiIG5vZGUtLWxlYWZcIikpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiBcInRyYW5zbGF0ZShcIiArIGQueSArIFwiLFwiICsgZC54ICsgXCIpXCIpO1xuXG4vLyBhZGRzIHRoZSBjaXJjbGUgdG8gdGhlIG5vZGVcbm5vZGUuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJyXCIsIGQgPT4gZC5kYXRhLnZhbHVlKVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBkID0+IGQuZGF0YS50eXBlKVxuICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBkLmRhdGEubGV2ZWwpO1xuXG4vLyBhZGRzIHRoZSB0ZXh0IHRvIHRoZSBub2RlXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAuYXR0cihcInhcIiwgZCA9PiBkLmNoaWxkcmVuID8gKGQuZGF0YS52YWx1ZSArIDUpICogLTEgOiBkLmRhdGEudmFsdWUgKyA1KVxuICAgIC5hdHRyKFwieVwiLCBkID0+IGQuY2hpbGRyZW4gJiYgZC5kZXB0aCAhPT0gMCA/IC0oZC5kYXRhLnZhbHVlICsgNSkgOiBkKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIGQgPT4gZC5jaGlsZHJlbiA/IFwiZW5kXCIgOiBcInN0YXJ0XCIpXG4gICAgLnRleHQoZCA9PiBkLmRhdGEubmFtZSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=