const express = require('express');
const app = express();
const fs = require('fs'); //require file system object
const port = 5000;

app.use(express.json());



// Endpoint to Get a list of users
app.get('/getTools', function(req, res){
  fs.readFile(__dirname + "/" + "tools.json", 'utf8', function(err, data){
      console.log(data);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(data);
  });
})




app.listen(
  port,
  () => console.log(`Server is running on port ${port}`)
)