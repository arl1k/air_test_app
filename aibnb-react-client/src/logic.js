var searchUrl = "https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty";
var options = {
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    }
}

exports.LoadFirstPagePropertiesByCity = function (cityName) {
    return LoadPropertiesByCityAndPage(cityName)
    .then(function(json) {
        return json;
    })
}

exports.LoadAllPropertiesByCity = LoadAllPropertiesByCity;
function LoadAllPropertiesByCity(cityName, page = 2, responceProperties = []) {
    return LoadPropertiesByCityAndPage(cityName, page)
        .then(function (json) {
            console.log(json.length);
            console.log(page);
            if (json.length > 0) {
                responceProperties = responceProperties.concat(json)
                return LoadAllPropertiesByCity(cityName, ++page, responceProperties)
            }
            else {
                return responceProperties;
            }
        })
}

function LoadPropertiesByCityAndPage(cityName, page = 0) {
    console.log(searchUrl)
    return fetch(searchUrl +"&" + "location=Daugavpils%2C%20Latvia&_limit=50", options) //todo! 
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.search_results;
        })
}