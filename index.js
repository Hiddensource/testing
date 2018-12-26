const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
var sample = require('./routes/sample.js');
// create express app
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
console.log(path.join(__dirname,'../../dist/Pyramid-customer-website'));
// app.use(express.static(path.join(__dirname,'../../dist/Pyramid-customer-website')));

app.use('/sample', sample);



app.listen(9900, () => {
    console.log("Server is listening on port 3000");
});
