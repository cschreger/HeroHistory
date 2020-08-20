import './styles/main.css';
import './scripts/box_office';
import {yearBreakdown} from './scripts/marvel_year_by_year';
import {genderDonut} from './scripts/gender_donut';
import {boxOfficeBubble} from './scripts/box_office'
import {marketShare} from './scripts/market_share'

const currentFocus = {
    currentExample: null
}

document.querySelector("#year-breakdown").addEventListener("click", goYearBreakdown)
document.querySelector("#gender-breakdown").addEventListener("click", goGenderBreakdown)
document.querySelector("#box-office").addEventListener("click", goBoxOfficeBubble)
document.querySelector("#market-share").addEventListener("click", goMarketShare)

function goYearBreakdown () {
    yearBreakdown();
    currentFocus.currentExample = "Year Breakdown";
}

function goGenderBreakdown () {
    genderDonut();
    currentFocus.currentExample = "Gender Breakdown";
}

function goBoxOfficeBubble () {
    boxOfficeBubble();
    currentFocus.currentExample = "Box Office";
}

function goMarketShare () {
    marketShare();
    currentFocus.currentExample = "Market Share";
}