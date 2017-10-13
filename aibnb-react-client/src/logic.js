var searchUrl = "https://www.airbnb.com/search/search_results?location=";
var options = {
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    }
}

exports.LoadFirstPagePropertiesByCity = function (cityName) {
    return LoadPropertiesByCityAndPage(cityName)
    .then(function(json) {
        return RemoveDuplicatedProperties(json);
    })
}

exports.LoadAllPropertiesByCity = LoadAllPropertiesByCity;
function LoadAllPropertiesByCity(cityName, page = 2, responceProperties = []) {
    return LoadPropertiesByCityAndPage(cityName, page)
        .then(function (json) {
            if (json.length > 0) {
                responceProperties = responceProperties.concat(json)
                return LoadAllPropertiesByCity(cityName, ++page, responceProperties)
            }
            else {
                return RemoveDuplicatedProperties(responceProperties);
            }
        })
}

function LoadPropertiesByCityAndPage(cityName, page = 0) {
    return fetch(searchUrl + encodeURIComponent(/*cityName*/"Daugavpils, Latvia") + "&page=" + page, options)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.results_json.search_results;
        })
}

// Airbnb return properties with same Id 
function RemoveDuplicatedProperties(responceProperties) {
    return responceProperties.filter((prop, index, propertiesArr) => {
        return propertiesArr.map(mapObj => mapObj.listing.id).indexOf(prop.listing.id) === index;
    });
}