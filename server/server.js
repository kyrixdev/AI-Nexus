const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 5000;

// Read the certificates
let credentials;
try {
  const privateKey = fs.readFileSync('/var/www/html/ai-nexus/server/server.key', 'utf8');
  const certificate = fs.readFileSync('/var/www/html/ai-nexus/server/server.cert', 'utf8');  
  credentials = { key: privateKey, cert: certificate };
} catch (error) {
  console.error("Error reading SSL certificatess:", error.message);
  process.exit(1); // Exit the application
}
console.log("Current directory:", __dirname);

// Enable CORS
app.use(cors({
  origin: ['https://kyrix.dev', 'https://kyrix.dev/ai-nexus'] // Add your production React URL here
}));

// Enable JSON body parsing
app.use(express.json());

// Endpoint to Get a list of tools
app.get('/getTools', (req, res) => {
  fs.readFile(__dirname + "/tools.json", 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading tools data" });
    }
    res.json(JSON.parse(data));  // Send JSON data
  });
});

// POST endpoint for collecting emails
app.post('/api/submit-email', (req, res) => {
  const { email } = req.body;
  fs.readFile("emails.json", (err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    let emails = JSON.parse(data || '[]');
    emails.push(email);

    fs.writeFile('emails.json', JSON.stringify(emails), (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json({ message: '✅ It was very nice to hear from you.' });
    });
  });
});

// Create HTTPS server
https.createServer(credentials, app).listen(port, () => {
  console.log(`AI Nexus API | Listening on https://localhost:${port}`);
});
