var express = require('express');
  const requestIp = require('request-ip');

var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('hit');
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send({"a":`RESTful API ${req.ip},  ${res.ip}`})
// res.status(200).send(`{requestIp.getClientIp(req)} , ${ip}`);  
});

module.exports = router;