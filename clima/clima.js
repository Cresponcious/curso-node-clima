const axios = require('axios').default;

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f9d0ced4a756e20ae3b8a2a1612cfa3b&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}