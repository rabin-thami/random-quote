import { quotes } from './assets/quotes.js';

const randomIndexQuote = Math.floor(Math.random() *quotes.length)
const quoteHolder = quotes[randomIndexQuote]

const image = [1,2,3,4,5]
const randomIndexImage = Math.floor(Math.random() * image.length)
const imageEl = image[randomIndexImage]

const holder = document.querySelector(".quotes-holder")
const quoteEl = document.querySelector("#quote")
const  authorEl = document.querySelector("#author")



addEventListener('load', function(){
    displayRandomQuotes()
    backgroundChange()
})

function displayRandomQuotes() {
    quoteEl.textContent = quoteHolder.quote
    authorEl.textContent = "- " + quoteHolder.author
} 


function backgroundChange() {
    document.querySelector(".container").style.backgroundImage = `url(assets/${imageEl}.jpg)`;
    
}

holder.addEventListener("click", function(){
    window.open('https://scrimba.com/learn/frontend', "_blank")
})

