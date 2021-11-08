import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const containerRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange), DEBOUNCE_DELAY);

function onInputChange() {
    containerRef.textContent.insertAdjacentHTML.fetchCountries();
    console.log(containerRef.textContent = inputRef.value);
}

Notify.info("Too many matches found. Please enter a more specific name.");
Notify.failure("Oops, there is no country with that name");


// const fetch = require('node-fetch');
// fetch('https://httpstat.us/404') 1️⃣ 
//     .then(function(response) { 2️⃣ 
//         if (!response.ok) { 3️⃣ 
//             throw Error(response.statusText);4️⃣ 
//         }
//         return response;
//     }).then(function(response) {
//         console.log('200 - ok');
//     }).catch(function(error) { 5️⃣ 
//         console.log('404 Not Found : '+ error); 6️⃣ 
//     });


// trim()