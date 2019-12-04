//Requires
const axios = require('axios');
//working with the api weather map
const getWeather = async (lat,lng)=>{
const resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1bbe2e0968a24d20cd946ed4209d9a2f&units=metric`);

  if (!resp) {
    throw 'there was an error';
    return
  }
  else {
    const temp = resp.data.main.temp
    const clima = resp.data.weather[0].main

    return {
      temp,
      clima
    }
  }
}

module.exports = {getWeather}
