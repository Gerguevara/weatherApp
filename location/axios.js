//Requires
const axios = require('axios');


// working with the api
const getPlace =  async (address) =>{
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${address}`,
    timeout: 9000,
    headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
  });
  const resp = await instance.get();

  if (resp.data.Results.length==0) {
    throw new Error(`theres no Results ${address}`)
  }
  else{
    const add = resp.data.Results[0].name
    const lat =  resp.data.Results[0].lat
    const lng =  resp.data.Results[0].lon
    return {
      add,
      lat,
      lng
    }
  }




}

module.exports= {getPlace}
