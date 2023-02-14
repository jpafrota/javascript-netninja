const key = '6Kota3BSPz3lgKUUTGBAjUf8WpCebE0K';

// Get weather information
const getWeather = async (cityID) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityID}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}


// Get city information
const getCity = async (city) => {
  
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};