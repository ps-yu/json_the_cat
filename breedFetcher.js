const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const urlRaw = "https://api.thecatapi.com/v1/breeds/search?q=";
  const url = urlRaw.concat(breedName);
  request(url, (error, response , body) => {
    if (error) {
      callback (error, null);
    }
    else {
      const dec = JSON.parse(body);
      if (dec === null){
        callback(error, null);
      }
      const cat = dec[0].description;
      callback(null, cat);
    }
  });
};

module.exports = {fetchBreedDescription};