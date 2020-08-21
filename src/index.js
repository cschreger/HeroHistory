import './styles/main.css';
import './scripts/box_office';
import {yearBreakdown} from './scripts/marvel_year_by_year';
import {genderDonut} from './scripts/gender_donut';
import {boxOfficeBubble} from './scripts/box_office'
import {marketShare} from './scripts/market_share'


document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown)
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown)
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble)
document.querySelector("#market-share").addEventListener("click", goMarketShare)

debugger
function goYearBreakdown () {
    if (document.querySelector("#line-chart") !== null) {
        let elem = document.querySelector("#line-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#market-share").removeAttribute("class")
    } else if (document.querySelector("#donut-chart") !== null) {
        let elem = document.querySelector("#donut-chart")
        elem.parentNode.removeChild(elem)
        let elem2 = document.querySelector('#donut-tip')
        elem2.parentNode.removeChild(elem2)
        document.querySelector("#gender-breakdown").removeAttribute("class")
    } else if (document.querySelector("#bubble-chart") !== null) {
        let elem = document.querySelector("#bubble-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#box-office").removeAttribute("class")
    }
    
    let button = document.getElementById("year-breakdown")
    button.classList.add("clicked")
    yearBreakdown();
}

function goGenderBreakdown () {
    if (document.querySelector("#line-chart") !== null) {
        let elem = document.querySelector("#line-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#market-share").removeAttribute("class")
    } else if (document.querySelector("#bar-chart") !== null) {
        let elem = document.querySelector("#bar-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#year-breakdown").removeAttribute("class")
    } else if (document.querySelector("#bubble-chart") !== null) {
        let elem = document.querySelector("#bubble-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#box-office").removeAttribute("class")
    }

    let button = document.getElementById("gender-breakdown")
    button.classList.add("clicked")
    genderDonut();
}

function goBoxOfficeBubble () {
    if (document.querySelector("#line-chart") !== null) {
        let elem = document.querySelector("#line-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#market-share").removeAttribute("class")
    } else if (document.querySelector("#bar-chart") !== null) {
        let elem = document.querySelector("#bar-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#year-breakdown").removeAttribute("class")
    } else if (document.querySelector("#donut-chart") !== null) {
        let elem = document.querySelector("#donut-chart")
        elem.parentNode.removeChild(elem)
        let elem2 = document.querySelector('#donut-tip')
        elem2.parentNode.removeChild(elem2)
        document.querySelector("#gender-breakdown").removeAttribute("class")
    }

    let button = document.getElementById("box-office")
    button.classList.add("clicked")
    let body = document.getElementById("body")
    debugger
    body.setAttribute("style", "background: linear-gradient(to bottom, #43cea2, #185a9d);");
    boxOfficeBubble();
}

function goMarketShare () {
    if (document.querySelector("#bar-chart") !== null) {
        let elem = document.querySelector("#bar-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#year-breakdown").removeAttribute("class")
    } else if (document.querySelector("#donut-chart") !== null) {
        let elem = document.querySelector("#donut-chart")
        elem.parentNode.removeChild(elem)
        let elem2 = document.querySelector('#donut-tip')
        elem2.parentNode.removeChild(elem2)
        document.querySelector("#gender-breakdown").removeAttribute("class")
    } else if (document.querySelector("#bubble-chart") !== null) {
        let elem = document.querySelector("#bubble-chart")
        elem.parentNode.removeChild(elem)
        document.querySelector("#box-office").removeAttribute("class")
    }

    let button = document.getElementById("market-share")
    button.classList.add("clicked")
    marketShare();
}