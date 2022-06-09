const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
request(args[0], (error, response, body) => {
  if(!error && response.statusCode === 200) {
  const content = body;
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    }
  });
  } else if (error.code === 'ENOTFOUND') {
    console.log("You entered an invalid url.");
  }
});

