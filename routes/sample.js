var express = require('express');
const requestIp = require('request-ip');
const {
  Pool,
  Client
} = require('pg');
var connectionString = "postgres://pyramid-website:pyramid@localhost/test";


var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('hit');




// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
//   reqIp = (req.ip).split(':');
//   reqIp = reqIp[reqIp.length - 1];
// client.query(`SELECT * from iptest where ip='${reqIp}'`, (err, result) => {
//   console.log(err);
//   if(result.rowCount ===1 ){
//     result = true;
//     }
//     else {
//       result = false;
//     }

//     res.send({
//       "isExist": result
//     });
//   client.end()
// })

  // var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //  "ip": `RESTful API ${req.ip},  ${ip} , ${requestIp.getClientIp(req)}`

  // res.status(200).send(`{requestIp.getClientIp(req)} , ${ip}`);  
});

router.get('/ip', function (req, res) {

  const client = new Client({
    connectionString: connectionString,
  });

  client.connect();

  reqIp = (req.ip).split(':');
  reqIp = reqIp[reqIp.length - 1];

  client.query(`SELECT * from iptest where ip='${reqIp}'`, (err, result) => {
   
    if (result.rowCount === 1) {
      result = true;
    } else {
      result = false;
    }

    res.send({
      "isExist": result
    });
    client.end()
  });

 
 
  // reqIp = (req.ip).split(':');
  // reqIp = reqIp[reqIp.length - 1];
  // // console.log(reqIp);
  // if (reqIp === '172.16.17.179' ||  "1") {
  //   result = true;
  // } else {
  //   result = false;
  // }

  // res.send({
  //   "isExist": result
  // });
  
});

module.exports = router;

