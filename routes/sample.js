var express = require('express');
  const requestIp = require('request-ip');

var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('hit');
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //res.send({"a":`RESTful API ${req.ip},  ${res.ip}`})
// res.status(200).send(`{requestIp.getClientIp(req)} , ${ip}`);  

});

router.get('/ip' , function(req,res){
   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   reqIp = (req.ip).split(':');
   reqIp = reqIp[reqIp.length-1];
   res.send({
    //  "ip": `RESTful API ${req.ip},  ${ip} , ${requestIp.getClientIp(req)}`
    "ip": reqIp
   });
});


module.exports = router;
