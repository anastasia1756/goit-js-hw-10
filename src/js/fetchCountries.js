// function fetchCountries(name) {
//     fetch(`https://restcountries.com/v3.1/name/{name}`).then(response => {
//         return response.json();
//         }).then(country => {
//             console.log(country)
//         }).catch(error => {
//             console.log(error)
//         });
    
// }
// fetchCountries("Peru");

https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages

function fetchCountries(name) {
    fetch('https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages').then(response => {
        return response.json();
        }).then(country => {
            console.log(country)
        }).catch(error => {
            console.log(error)
        });
}

fetchCountries("Peru");