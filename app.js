//Requires
const argv = require('./settings/yargs.js').argv;
const color = require('colors');
const place = require ('./location/axios.js')// intances of axios
//declarations
const encoderURL = encodeURI(argv.address)
console.log(encoderURL);

place.getPlace(encoderURL)
.then(console.log)
.catch(err=> console.log(err))
