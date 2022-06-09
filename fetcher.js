const request = require('request');
const fs = require('fs');

request('http://example.edu', (error, response, body) => {
  if(!error && response.statusCode === 200) {
  const content = body;
  fs.writeFile('./data/01.txt', content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ./data/01.txt`);
    }
  });
  }
});

