import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countryList from './templates/country-list';
import flags from './templates/flags-and-names';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const containerRef = document.querySelector('.country-info');
const countryListRef = document.querySelector('.country-list');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange() {
    const searchedCountry = inputRef.value.trim();
    if (inputRef.value === '') {
        containerRef.textContent = '';
        return;
    } {
    fetchCountries(`${searchedCountry}`).then(country => {
        if (country.length > 10 ) {
            Notify.info("Too many matches found. Please enter a more specific name.");
        } else if (country.length > 2 & country.length < 10) {
            const content = flags(country);
            containerRef.innerHTML = content;
            // containerRef.textContent = {flags.svg};
        console.log("hello");
        } else {
            const markup = countryList(country);
console.log(markup);
containerRef.innerHTML = markup;
            // containerRef.textContent = countryListRef.insertAdjacentHTML("beforeend", markup);
        console.log("fuck")
     }
    }).catch(error => {
        Notify.failure("Oops, there is no country with that name");
    }).finally(() => {
        
    })
};
    
    // containerRef.textContent.insertAdjacentHTML.fetchCountries();
    console.log(containerRef.textContent = inputRef.value.trim());
    // containerRef.textContent.insertAdjacentHTML.fetchCountries;
}

// в уэл добавить лишки с данными о стране: флаг, название, столица, население и языки.
// ли флаг и в нем спан имя
// ли столица
// ли население
// ли языки

