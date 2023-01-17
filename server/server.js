const express = require('express');
const app = express();
const fs = require('fs'); //require file system object
const port = 5000;
const cors = require('cors');
let server;
server = app.listen(port, () => console.log(`AI Nexus API | Listening on port ${port}`));
app.use(cors({
  origin: ['http://localhost:3000']
}))


app.use(express.json());



// Endpoint to Get a list of users
app.get('/getTools', function(req, res){
  fs.readFile(__dirname + "/" + "tools.json", 'utf8', function(err, data){
      console.log(data);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(data);
  });
})

app.post('/api/submit-email', (req, res) => {
  const { email, message } = req.body;
  fs.readFile("emails.json", (err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }

    let emails = JSON.parse(data);
    if(!emails) emails = []
    emails.push({ email, message });

    fs.writeFile('emails.json', JSON.stringify(emails), (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }

      res.json({ message: '✅It was very nice to hear from you.' });
    });
  });
  server.close();
});
