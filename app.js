//Requires
const argv = require('./settings/yargs.js').argv;
const color = require('colors');
const weather = require('./weather/weather.js');
const place = require('./location/axios.js') // intances of axios
//declarations
const encoderURL = encodeURI(argv.address)
//console.log(encoderURL);

const getIngo = async(encoder)=>{
const plc = await place.getPlace(encoder)
const degree = weather.getWeather(plc.lat, plc.lng)
if (!degree) {
  throw 'there was an weeor with the location'
}
else {
  return degree
}
}

getIngo(encoderURL)
.then(temp=>{console.log(`the temperture on ${argv.address} is ${temp.temp}C and the weather must be ${temp.clima}`.cyan)})
.catch(err=>{console.log(err);})



// place.getPlace(encoderURL)
//   .then(console.log)
//   .catch(err => console.log(err))
//
//   weather.getWeather(13.770000,-89.160004)
//   .then(resp =>{console.log(resp)})
//   .catch(error => {console.log(error)})
