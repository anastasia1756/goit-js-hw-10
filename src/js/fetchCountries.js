export { fetchCountries };

function fetchCountries(country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages` 
    ).then(function(response) { 
                if (!response.ok) { 
                    throw Error(response.statusText); 
                }
                return response;
            })
        .then(response => {
        return response.json();
        
        });
}

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