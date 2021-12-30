var request = require('request');


var options = {
  'method': 'GET',
  'url': 'https://del.qx.i-dealprospectus.com/aspx/Login',
  'headers': {
    'Host': 'del.qx.i-dealprospectus.com'
  }
};

request(options, function (error, response) {
  if (error) console.log(error);
  console.log(response.statusCode);
});
