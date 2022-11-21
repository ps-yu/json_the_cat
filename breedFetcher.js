const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=".concat(process.argv[2]);
const userInput = process.argv[2];
const requestAndSave = (url) => {
  request(url, (error, response , body) => {
    if (error) {
      console.log('Something went wrong!!');
      return;
    }
    let name = JSON.parse(body);
    if (name.length === 0) {
      console.log(`There is no breed by the name ${userInput}!!`);
    }
  });
};

requestAndSave(url);