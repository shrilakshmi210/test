var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.get('/form1.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "form1.htm" );
})
app.post('/process_post',urlencodedParser, function (req, res) 
  
   response = {
       First_Name:req.body.fname,
       Last_Name:req.body.lname
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Ready')
  
})