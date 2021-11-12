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
