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
  debugger;

  function graph(data) {
    var keys = data.columns.slice(1);
    var margin = {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40
    };
    var width = 900 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom; // data.forEach(function(d) {
    //     return d
    // })

    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().range([height, 0]);
    var zScale = d3.scaleOrdinal(d3.schemeCategory10);
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    var line = d3.line().curve(d3.curveCardinal).x(function (d) {
      return xScale(d.year);
    }).y(function (d) {
      return yScale(d.share);
    });
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
    }), d3.max(companies, function (c) {
      return d3.max(c.values, function (v) {
        return v.share;
      });
    })]);
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
    debugger;
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
      return "translate(" + xScale(d.year) + "," + yScale(d.value.share) + ")";
    }).attr("x", 3).attr("dy", ".35em").text(function (d) {
      return d.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JveF9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VuZGVyX2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmtldF9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYXJ2ZWxfeWVhcl9ieV95ZWFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwibmFtZXMiOlsiY3VycmVudEZvY3VzIiwiY3VycmVudEV4YW1wbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ29ZZWFyQnJlYWtkb3duIiwiZ29HZW5kZXJCcmVha2Rvd24iLCJnb0JveE9mZmljZUJ1YmJsZSIsImdvTWFya2V0U2hhcmUiLCJ5ZWFyQnJlYWtkb3duIiwiZ2VuZGVyRG9udXQiLCJib3hPZmZpY2VCdWJibGUiLCJtYXJrZXRTaGFyZSIsImRhdGFzZXQiLCJkaWFtZXRlciIsImNvbG9yMiIsImQzIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImRlZmF1bHRfaGVpZ2h0IiwiZGVmYXVsdF9yYXRpbyIsInNldF9zaXplIiwiY3VycmVudF93aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjdXJyZW50X2hlaWdodCIsImlubmVySGVpZ2h0IiwiY3VycmVudF9yYXRpbyIsImJ1YmJsZSIsInBhY2siLCJzaXplIiwicGFkZGluZyIsInN2ZzMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibm9kZXMiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwiYm94T2ZmaWNlIiwibm9kZSIsInNlbGVjdEFsbCIsImRhdGEiLCJkZXNjZW5kYW50cyIsImVudGVyIiwiZmlsdGVyIiwiY2hpbGRyZW4iLCJvbiIsImkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ4IiwieSIsInRleHQiLCJ0aXRsZSIsInN0dWRpbyIsInIiLCJzdHlsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNlbGYiLCJmcmFtZUVsZW1lbnQiLCJ0b3RhbCIsImNvdW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiZG9udXRXaWR0aCIsImNvbG9yIiwic3ZnIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBpZSIsInZhbHVlIiwic29ydCIsImRvbnV0VGlwIiwicGF0aCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImVhc2UiLCJlYXNlTGluZWFyIiwiYXR0clR3ZWVuIiwidHdlZW5QaWUiLCJiIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsInQiLCJudW0iLCJyb3VuZCIsImh0bWwiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJsZWdlbmRSZWN0U2l6ZSIsImxlZ2VuZFNwYWNpbmciLCJsZWdlbmQiLCJkb21haW4iLCJvZmZzZXQiLCJsZW5ndGgiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjc3YiLCJ0aGVuIiwiZ3JhcGgiLCJrZXlzIiwiY29sdW1ucyIsInNsaWNlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInpTY2FsZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInlBeGlzIiwiYXhpc0xlZnQiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwieWVhciIsInNoYXJlIiwia2V5IiwiY29tcGFuaWVzIiwibWFwIiwibmFtZSIsInZhbHVlcyIsImV4dGVudCIsImMiLCJ2IiwibWF4IiwiY2FsbCIsImNvbXBhbnkiLCJkYXR1bSIsInN2ZzIiLCJ3aWR0aDIiLCJoZWlnaHQyIiwic2NhbGVCYW5kIiwiZyIsInRpY2tGb3JtYXQi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LEVBQXVCVSxDQUF2QixFQUEwQjtBQUN4QmpDLE1BQUUsQ0FBQ2lCLE1BQUgsQ0FBVSxJQUFWLEVBQWdCRSxJQUFoQixDQUFxQixPQUFyQixFQUE4QixLQUE5QjtBQUNBbkIsTUFBRSxDQUFDaUIsTUFBSCxDQUFVLElBQVYsRUFDR2lCLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHR2hCLElBSEgsQ0FHUSxPQUhSLEVBR2lCbUYsTUFBTSxDQUFDa0MsU0FBUCxFQUhqQixFQUlHckgsSUFKSCxDQUlRLEdBSlIsRUFJYSxVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPa0YsTUFBTSxDQUFDbEYsQ0FBQyxDQUFDa0gsTUFBSCxDQUFiO0FBQTBCLEtBSnRELEVBS0d0SCxJQUxILENBS1EsUUFMUixFQUtrQixVQUFVSSxDQUFWLEVBQWE7QUFBRSxhQUFPNEcsT0FBTyxHQUFHMUIsTUFBTSxDQUFDbEYsQ0FBQyxDQUFDa0gsTUFBSCxDQUF2QjtBQUFvQyxLQUxyRTtBQU9BekksTUFBRSxDQUFDMEIsU0FBSCxDQUFhLE1BQWIsRUFDR2lILE1BREg7QUFFRDtBQUNBLENBM0dNLEM7Ozs7Ozs7Ozs7O0FDQVAsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib3hfb2ZmaWNlJztcbmltcG9ydCB7eWVhckJyZWFrZG93bn0gZnJvbSAnLi9zY3JpcHRzL21hcnZlbF95ZWFyX2J5X3llYXInO1xuaW1wb3J0IHtnZW5kZXJEb251dH0gZnJvbSAnLi9zY3JpcHRzL2dlbmRlcl9kb251dCc7XG5pbXBvcnQge2JveE9mZmljZUJ1YmJsZX0gZnJvbSAnLi9zY3JpcHRzL2JveF9vZmZpY2UnXG5pbXBvcnQge21hcmtldFNoYXJlfSBmcm9tICcuL3NjcmlwdHMvbWFya2V0X3NoYXJlJ1xuXG5jb25zdCBjdXJyZW50Rm9jdXMgPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGxcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWFyLWJyZWFrZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29ZZWFyQnJlYWtkb3duKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5kZXItYnJlYWtkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0dlbmRlckJyZWFrZG93bilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94LW9mZmljZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Cb3hPZmZpY2VCdWJibGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtldC1zaGFyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29NYXJrZXRTaGFyZSlcblxuZnVuY3Rpb24gZ29ZZWFyQnJlYWtkb3duICgpIHtcbiAgICB5ZWFyQnJlYWtkb3duKCk7XG4gICAgY3VycmVudEZvY3VzLmN1cnJlbnRFeGFtcGxlID0gXCJZZWFyIEJyZWFrZG93blwiO1xufVxuXG5mdW5jdGlvbiBnb0dlbmRlckJyZWFrZG93biAoKSB7XG4gICAgZ2VuZGVyRG9udXQoKTtcbiAgICBjdXJyZW50Rm9jdXMuY3VycmVudEV4YW1wbGUgPSBcIkdlbmRlciBCcmVha2Rvd25cIjtcbn1cblxuZnVuY3Rpb24gZ29Cb3hPZmZpY2VCdWJibGUgKCkge1xuICAgIGJveE9mZmljZUJ1YmJsZSgpO1xuICAgIGN1cnJlbnRGb2N1cy5jdXJyZW50RXhhbXBsZSA9IFwiQm94IE9mZmljZVwiO1xufVxuXG5mdW5jdGlvbiBnb01hcmtldFNoYXJlICgpIHtcbiAgICBtYXJrZXRTaGFyZSgpO1xuICAgIGN1cnJlbnRGb2N1cy5jdXJyZW50RXhhbXBsZSA9IFwiTWFya2V0IFNoYXJlXCI7XG59IiwiZXhwb3J0IGNvbnN0IGJveE9mZmljZUJ1YmJsZSA9ICgpID0+IHtcblxuY29uc3QgZGF0YXNldCA9IHtcbiAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdmVuZ2VyczogRW5kZ2FtZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjc5NzgwMDU2NCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF2ZW5nZXJzOiBJbmZpbml0eSBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDIwNDgzNTk3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBdmVuZ2Vyc1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTUxODgxMjk4OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXZlbmdlcnM6IEFnZSBvZiBVbHRyb25cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDE0MDU0MDM2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsYWNrIFBhbnRoZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEzNDY5MTMxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluY3JlZGlibGVzIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEaXNuZXkvUGl4YXJcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTI0MjgwNTM1OVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXJvbiBNYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9EaXNuZXlcIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTIxNDgxMTI1MlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExNTMzMDQ0OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFxdWFtYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMjA0ODM1OTc1NFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogRmFyIEZyb20gSG9tZVwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDExMzE5Mjc5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHRhaW4gTWFydmVsXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiAxMTI4Mjc0Nzk0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayBLbmlnaHQgUmlzZXNcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA4MTA0MTI4N1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSm9rZXJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogMTA3NDI1MTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgS25pZ2h0XCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiREMvV2FybmVyIEJyb3MuXCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDEwMDQ1NTg0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gM1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg5MDg3MTYyNlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BpZGVyLU1hbjogSG9tZWNvbWluZ1wiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg4MDE2NjkyNFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF0bWFuIHYuIFN1cGVybWFuOiBEYXduIG9mIEp1c3RpY2VcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJEQy9XYXJuZXIgQnJvcy5cIixcbiAgICAgICAgXCJib3hPZmZpY2VcIjogODczNjM0OTE5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHdWFyZGlhbnMgb2YgdGhlIEdhbGF4eSBWb2wuIDJcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvRGlzbmV5XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDg2Mzc1NjA1MVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVub21cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTYwODUxNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRob3I6IFJhZ25hcm9rXCIsXG4gICAgICAgIFwic3R1ZGlvXCI6IFwiTWFydmVsL0Rpc25leVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NTM5NzcxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldvbmRlciBXb21hblwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIkRDL1dhcm5lciBCcm9zLlwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4NjM3NTYwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW5cIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvU29ueVwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA4MjE3MDg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwaWRlci1NYW4gMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC9Tb255XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4ODk3NjQ1M1xuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2wgMlwiLFxuICAgICAgICBcInN0dWRpb1wiOiBcIk1hcnZlbC8yMHRoIENlbnR1cnkgRm94XCIsXG4gICAgICAgIFwiYm94T2ZmaWNlXCI6IDc4NTA0NjkyMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVhZHBvb2xcIixcbiAgICAgICAgXCJzdHVkaW9cIjogXCJNYXJ2ZWwvMjB0aCBDZW50dXJ5IEZveFwiLFxuICAgICAgICBcImJveE9mZmljZVwiOiA3ODMxMTI5NzlcbiAgICB9LFxuXG4gICAgXVxufVxuXG5jb25zdCBkaWFtZXRlciA9IDkwMDtcbmNvbnN0IGNvbG9yMiA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuY29uc3QgZGVmYXVsdF9oZWlnaHQgPSA2NTA7XG5jb25zdCBkZWZhdWx0X3JhdGlvID0gZGlhbWV0ZXIgLyBkZWZhdWx0X2hlaWdodDtcblxuXG5mdW5jdGlvbiBzZXRfc2l6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgY3VycmVudF9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudF9yYXRpbyA9IGN1cnJlbnRfd2lkdGggLyBjdXJyZW50X2hlaWdodDtcblxuICAgIGlmIChjdXJyZW50X3JhdGlvID4gZGVmYXVsdF9yYXRpbykge1xuICAgICAgICBsZXQgZGlhbWV0ZXIgPSAxMjAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaWFtZXRlciA9IDYwMDtcbiAgICB9XG59O1xuc2V0X3NpemUoKTtcblxuY29uc3QgYnViYmxlID0gZDMucGFjayhkYXRhc2V0KVxuICAgIC5zaXplKFtkaWFtZXRlciwgZGlhbWV0ZXJdKVxuICAgIC5wYWRkaW5nKC45KTtcblxuY29uc3Qgc3ZnMyA9IGQzLnNlbGVjdChcIiNidWJibGVcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImhlaWdodFwiLCBkaWFtZXRlcilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYnViYmxlXCIpO1xuXG5jb25zdCBub2RlcyA9IGQzLmhpZXJhcmNoeShkYXRhc2V0KVxuICAgIC5zdW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuYm94T2ZmaWNlO1xuICAgIH0pO1xuXG5cbmNvbnN0IG5vZGUgPSBzdmczLnNlbGVjdEFsbChcIi5ub2RlXCIpXG4gICAgLmRhdGEoYnViYmxlKG5vZGVzKS5kZXNjZW5kYW50cygpKVxuICAgIC5lbnRlcigpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gIWQuY2hpbGRyZW5cbiAgICB9KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzEwMCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNycpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignMTAwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0aXRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnRpdGxlO1xuICAgIH0pO1xuXG5ub2RlLmFwcGVuZChcInN0dWRpb1wiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnN0dWRpbztcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucjtcbiAgICB9KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yMihpKTtcbiAgICB9KTtcblxubm9kZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIi4wM2VtXCIpXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLnRpdGxlO1xuICAgIH0pXG4gICAgLmF0dHIoXCJmb250LXNpemVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuciAvIDU7XG4gICAgfSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuXG5ub2RlLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMS4zZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGQuZGF0YS5ib3hPZmZpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcbiAgICB9KVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnIgLyA1O1xuICAgIH0pXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmQzLnNlbGVjdChzZWxmLmZyYW1lRWxlbWVudClcbiAgICAuc3R5bGUoXCJoZWlnaHRcIiwgZGlhbWV0ZXIgKyBcInB4XCIpO1xuXG59IiwiZXhwb3J0IGNvbnN0IGdlbmRlckRvbnV0ID0gKCkgPT4ge1xuXG5jb25zdCB0b3RhbCA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1hbGVcIixcbiAgICAgICAgY291bnQ6IDg1MDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlbWFsZVwiLFxuICAgICAgICBjb3VudDogMzc3NjJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiT3RoZXJcIixcbiAgICAgICAgY291bnQ6IDE2NjI2XG4gICAgfV1cblxuY29uc3QgaGVpZ2h0ID0gMzYwO1xuY29uc3Qgd2lkdGggPSAzNjA7XG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDI7XG5jb25zdCBkb251dFdpZHRoID0gNzU7XG5jb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuZDMuc2VsZWN0KFwiYm9keVwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImlkXCIsIFwiZG9udXQtc3ZnXCIpXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RvbnV0LXN2ZycpXG4gICAgLy8gLmFwcGVuZChzdmcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHdpZHRoIC8gMikgKyBcIixcIiArIChoZWlnaHQgLyAyKSArICcpJylcblxuY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMocmFkaXVzIC0gZG9udXRXaWR0aClcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzKTtcblxuY29uc3QgcGllID0gZDMucGllKClcbiAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY291bnRcbiAgICB9KVxuICAgIC5zb3J0KG51bGwpO1xuXG5jb25zdCBkb251dFRpcCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbnV0LXRpcFwiKVxuICAgIC5zdHlsZShcIm9wYWN0aXlcIiwgMClcblxuY29uc3QgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC5kYXRhKHBpZSh0b3RhbCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsIGFyYylcbiAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvcihkLmRhdGEudGl0bGUpXG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAuZHVyYXRpb24oMTcwMClcbiAgICAuYXR0clR3ZWVuKFwiZFwiLCB0d2VlblBpZSlcblxuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgLTI1KVxuICAgIC5hdHRyKFwieVwiLCA1MClcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjI0cHhcIilcbiAgICAudGV4dChcIkNoYXJhY3RlciBnZW5kZXIgKEFsbCBQdWJsaXNoZXJzKVwiKVxuXG5mdW5jdGlvbiB0d2VlblBpZShiKSB7XG4gICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHsgc3RhcnRBbmdsZTogMS4xICogTWF0aC5QSSwgZW5kQW5nbGU6IDEuMSAqIE1hdGguUEkgfSwgYik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBhcmMoaSh0KSk7IH07XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKVxuICAgIGRvbnV0VGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICBsZXQgbnVtID0gKE1hdGgucm91bmQoKGQuZGF0YS5jb3VudCAvIDE0MDAwMCkgKiAxMDApKS50b1N0cmluZygpICsgXCIlXCJcbiAgICBkb251dFRpcC5odG1sKG51bSlcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAxMCkgKyBcInB4XCIpXG4gICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAxNSkgKyBcInB4XCIpXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICBkb251dFRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG59XG5cbmNvbnN0IGxlZ2VuZFJlY3RTaXplID0gMTA7XG5jb25zdCBsZWdlbmRTcGFjaW5nID0gMTE7XG5cbmNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKVxuICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NpcmNsZS1sZWdlbmQnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gaGVpZ2h0ICogY29sb3IuZG9tYWluKCkubGVuZ3RoIC8gMjtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSAtMiAqIGxlZ2VuZFJlY3RTaXplIC0gMTM7XG4gICAgICAgIGxldCB2ZXJ0aWNhbCA9IGkgKiBoZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBob3Jpem9udGFsICsgJywnICsgdmVydGljYWwgKyAnKSc7XG4gICAgfSlcblxubGVnZW5kLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGNvbG9yKVxuICAgIC5hdHRyKCdjeCcsIDApXG4gICAgLmF0dHIoJ2N5JywgMClcbiAgICAuYXR0cigncicsICcuNXJlbScpXG5cbmxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd4JywgbGVnZW5kUmVjdFNpemUgKyBsZWdlbmRTcGFjaW5nICsgMjUpXG4gICAgLmF0dHIoJ3knLCBsZWdlbmRSZWN0U2l6ZSAtIGxlZ2VuZFNwYWNpbmcgKyAzKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xufSlcblxufSIsImV4cG9ydCBjb25zdCBtYXJrZXRTaGFyZSA9ICgpID0+IHtcblxuZDMuY3N2KCcuLi9kYXRhL21hcmtldF9zaGFyZS5jc3YnKS50aGVuKGQgPT4gZ3JhcGgoZCkpXG5cbmRlYnVnZ2VyXG5mdW5jdGlvbiBncmFwaChkYXRhKSB7XG5cbiAgICBjb25zdCBrZXlzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHt0b3A6MjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAyMCwgbGVmdDogNDB9XG4gICAgY29uc3Qgd2lkdGggPSA5MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tXG5cbiAgICAvLyBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgIC8vICAgICByZXR1cm4gZFxuICAgIC8vIH0pXG4gICAgXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsd2lkdGhdKVxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgY29uc3QgelNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgIFxuICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5U2NhbGUpXG5cbiAgICBcbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpXG4gICAgLngoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4geFNjYWxlKGQueWVhcilcbiAgICB9KVxuICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHlTY2FsZShkLnNoYXJlKVxuICAgIH0pXG4gICAgXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcblxuICAgIGNvbG9yLmRvbWFpbihkMy5rZXlzKGRhdGFbMF0pLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gXCJ5ZWFyXCJcbiAgICB9KSlcblxuICAgIGNvbnN0IGNvbXBhbmllcyA9IGNvbG9yLmRvbWFpbigpLm1hcChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogZC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZTogK2RbbmFtZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHhTY2FsZS5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueWVhclxuICAgIH0pKVxuXG4gICAgeVNjYWxlLmRvbWFpbihbXG4gICAgICAgIGQzLm1pbihjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5taW4oYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIGQzLm1heChjb21wYW5pZXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5zaGFyZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICBdKVxuXG4gICAgY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLSAyMClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogMjBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQubmFtZSlcbiAgICAgICAgfSlcbiAgICBcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIDgpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGkgKiAyMCkgKyA5O1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5uYW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKHhBeGlzKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgICAuY2FsbCh5QXhpcylcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi43ZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLnRleHQoXCJNYXJrZXQgU2hhcmUgKCUpXCIpXG5cbiAgICBjb25zdCBjb21wYW55ID0gc3ZnLnNlbGVjdEFsbChcIi5jb21wYW55XCIpXG4gICAgICAgIC5kYXRhKGNvbXBhbmllcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbXBhbnlcIilcblxuICAgIGRlYnVnZ2VyXG4gICAgY29tcGFueS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcylcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcihkLm5hbWUpXG4gICAgICAgIH0pXG5cbiAgICBkZWJ1Z2dlclxuICAgIGNvbXBhbnkuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuZGF0dW0oZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHhTY2FsZShkLnllYXIpICsgXCIsXCIgKyB5U2NhbGUoZC52YWx1ZS5zaGFyZSkgKyBcIilcIlxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgMylcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLm5hbWVcbiAgICAgICAgfSlcblxufVxuXG59XG4iLCJleHBvcnQgY29uc3QgeWVhckJyZWFrZG93biA9ICgpID0+IHtcblxuZDMuc2VsZWN0KFwiYm9keVwiKVxuICAuYXBwZW5kKFwic3ZnXCIpXG4gIC5hdHRyKFwiaWRcIiwgXCJzdmcyXCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgMTIwMClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgNzAwKVxuXG5jb25zdCBzdmcyID0gZDMuc2VsZWN0KFwiI3N2ZzJcIiksXG4gIG1hcmdpbiA9IDE1MCxcbiAgd2lkdGgyID0gc3ZnMi5hdHRyKFwid2lkdGhcIikgLSBtYXJnaW4sXG4gIGhlaWdodDIgPSBzdmcyLmF0dHIoXCJoZWlnaHRcIikgLSBtYXJnaW47XG5cblxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoMl0pLnBhZGRpbmcoMC42KSxcbiAgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0MiwgMF0pO1xuXG5jb25zdCBnID0gc3ZnMi5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgMTAwICsgXCIsXCIgKyAxMDAgKyBcIilcIik7XG5cbmQzLmNzdihcIi4vZGF0YS95ZWFyRGF0YS5jc3ZcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICB4U2NhbGUuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnllYXI7IH0pKTtcbiAgeVNjYWxlLmRvbWFpbihbMCwgMTMwMF0pO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQyICsgXCIpXCIpXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIGhlaWdodDIgLSAyMDApXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoMiAtIDEwMClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC50ZXh0KFwiWWVhclwiKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLnRpY2tzKDEwKSlcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgNilcbiAgICAuYXR0cihcImR5XCIsIFwiLTUuMWVtXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAudGV4dChcIihVbmlxdWUpIGlzc3VlcyByZWxlYXNlZFwiKTtcblxuICBzdmcyLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMClcIilcbiAgICAuYXR0cihcInhcIiwgNTApXG4gICAgLmF0dHIoXCJ5XCIsIDUwKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjRweFwiKVxuICAgIC50ZXh0KFwiIyBvZiByZWxlYXNlcyAoTWFydmVsKVwiKVxuXG4gIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpXG4gICAgLm9uKFwibW91c2VvdXRcIiwgb25Nb3VzZU91dClcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLnllYXIpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKDApOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKDApOyB9KTtcblxuICBzdmcyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEyMDApXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpIH0pXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqIDEzKSB9KVxufSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGQsIGkpIHtcbiAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2hpZ2hsaWdodCcpO1xuICBkMy5zZWxlY3QodGhpcylcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMClcbiAgICAuYXR0cignd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAyKVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDEwOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQyIC0geVNjYWxlKGQuaXNzdWVzKSArIDEwOyB9KTtcblxuICBnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cignY2xhc3MnLCAndmFsJylcbiAgICAuYXR0cigneCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB4U2NhbGUoZC55ZWFyKSArIDEwO1xuICAgIH0pXG4gICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geVNjYWxlKGQuaXNzdWVzKSAtIDIwO1xuICAgIH0pXG4gICAgLnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtkLmlzc3Vlc107XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoZCwgaSkge1xuICBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnLCAnYmFyJyk7XG4gIGQzLnNlbGVjdCh0aGlzKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLmlzc3Vlcyk7IH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodDIgLSB5U2NhbGUoZC5pc3N1ZXMpOyB9KTtcblxuICBkMy5zZWxlY3RBbGwoJy52YWwnKVxuICAgIC5yZW1vdmUoKVxufVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==