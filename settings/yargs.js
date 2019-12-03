const argv = require('yargs').options({
  address:{
    alias: 'd',
    desc:'address from the city',
    demant: true
  }
}).argv;


module.exports = {argv}
