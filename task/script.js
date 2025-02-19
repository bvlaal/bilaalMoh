async function fetchAPI(api, params) {
    const username = 'bvlaal';
    const url = `http://api.geonames.org/${api}?${params}&username=${username}&type=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return JSON.stringify(data, null, 2);
    } catch (error) {
        return 'Error fetching data';
    }
}

async function handleFetch(api) {
    let params = '';
    if (api === 'findNearbyPlaceName') {
        const lat = document.getElementById('lat').value;
        const lon = document.getElementById('lon').value;
        params = `lat=${lat}&lng=${lon}`;
    } else if (api === 'findNearByWeatherJSON') {
        const lat = document.getElementById('fnw_lat').value;
        const lon = document.getElementById('fnw_lon').value;
        params = `lat=${lat}&lng=${lon}`;
    } else if (api === 'postalCodeLookupJSON') {
        const postal = document.getElementById('postal').value;
        const country = document.getElementById('country').value;
        params = `postalcode=${postal}&country=${country}`;
    }
    
    const result = await fetchAPI(api, params);
    document.getElementById(api + '-result').innerText = result;
}
