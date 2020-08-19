export const MarvelYrs = () => {

const yearsData = [
  { year: "1961", amount: 73 },
  { year: "1962", amount: 82 },
  { year: "1963", amount: 106 },
  { year: "1964", amount: 127 },
  { year: "1965", amount: 137 },
  { year: "1966", amount: 146 },
  { year: "1967", amount: 156 },
  { year: "1968", amount: 197 },
  { year: "1969", amount: 202 },
  { year: "1970", amount: 183 },
  { year: "1971", amount: 189 },
  { year: "1972", amount: 236 },
  { year: "1973", amount: 306 },
  { year: "1974", amount: 335 },
  { year: "1975", amount: 370 },
  { year: "1976", amount: 434 },
  { year: "1977", amount: 421 },
  { year: "1978", amount: 360 },
  { year: "1979", amount: 319 },
  { year: "1980", amount: 317 },
  { year: "1981", amount: 312 },
  { year: "1982", amount: 299 },
  { year: "1983", amount: 284 },
  { year: "1984", amount: 288 },
  { year: "1985", amount: 348 },
  { year: "1986", amount: 338 },
  { year: "1987", amount: 370 },
  { year: "1988", amount: 404 },
  { year: "1989", amount: 523 },
  { year: "1990", amount: 475 },
  { year: "1991", amount: 506 },
  { year: "1992", amount: 547 },
  { year: "1993", amount: 570 },
  { year: "1994", amount: 540 },
  { year: "1995", amount: 512 },
  { year: "1996", amount: 489 },
  { year: "1997", amount: 454 },
  { year: "1998", amount: 451 },
  { year: "1999", amount: 497 },
  { year: "2000", amount: 501 },
  { year: "2001", amount: 503 },
  { year: "2002", amount: 630 },
  { year: "2003", amount: 723 },
  { year: "2004", amount: 861 },
  { year: "2005", amount: 919 },
  { year: "2006", amount: 948 },
  { year: "2007", amount: 1017 },
  { year: "2008", amount: 1170 },
  { year: "2009", amount: 1209 },
  { year: "2010", amount: 1229 },
  { year: "2011", amount: 1218 },
  { year: "2012", amount: 971 },
  { year: "2013", amount: 946 },
  { year: "2014", amount: 983 },
  { year: "2015", amount: 929 },
  { year: "2016", amount: 1088 },
  { year: "2017", amount: 1111 },
  { year: "2018", amount: 1066 },
  { year: "2019", amount: 1251 },
  { year: "2020", amount: 510 }
]


  let title = "Year-By-Year Breakdown"
  d3.select("body").append("h3").text(title);

  d3.select("body")
    .selectAll("svg")
    .data(yearsData)
    .enter()
    .append("div")
    .style("width", function (d) {
      return d.amount * 40 + "px";
    })
    .style("height", "15px");
};


