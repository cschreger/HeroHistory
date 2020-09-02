import './styles/main.css';
import {yearBreakdown} from './scripts/marvel_year_by_year';
import {genderDonut} from './scripts/gender_donut';
import {boxOfficeBubble} from './scripts/box_office'
import {marketShare} from './scripts/market_share'
import {splash} from './scripts/splash_page';


document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown)
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown)
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble)
document.querySelector("#market-share").addEventListener("click", goMarketShare)
// document.querySelector("#splash").addEventListener("click", goSplash)


// function goSplash () {
//     let button = document.getElementById("year-breakdown")
//     button.classList.add("clicked")
//     let body = document.getElementById("body")
//     body.style.background = "#39cccc";
//     splash();
// }

function goYearBreakdown () {
    if (document.querySelector("#tree") !== null) {
        let elem = document.querySelector("#tree")
        elem.parentNode.removeChild(elem) 
    }

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
    let body = document.getElementById("body")
    body.style.background = "#39cccc";
    yearBreakdown();
}

function goGenderBreakdown () {
    if (document.querySelector("#tree") !== null) {
        let elem = document.querySelector("#tree")
        elem.parentNode.removeChild(elem)
    }

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
    let body = document.getElementById("body")
    body.style.background = "#7fbdff"
    genderDonut();
}

function goBoxOfficeBubble () {
    if (document.querySelector("#tree") !== null) {
        let elem = document.querySelector("#tree")
        elem.parentNode.removeChild(elem)
    }

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
    body.style.background = "#92a8d1"
    boxOfficeBubble();
}

function goMarketShare () {
    if (document.querySelector("#tree") !== null) {
        let elem = document.querySelector("#tree")
        elem.parentNode.removeChild(elem)
    }

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

    let button = document.getElementById("market-share");
    button.classList.add("clicked");
    let body = document.getElementById("body");
    body.style.background = "#7FCDCD";
    marketShare();
}