const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./db");
const { insertEmail } = require("./insert-newslist");
const { insertJsonData } = require("./insert-ai-tools.js");
const { getJsonData } = require("./getTools.js");

let credentials;
try {
  const privateKey = fs.readFileSync('/var/www/html/ai-nexus/server/server.key', 'utf8');
  const certificate = fs.readFileSync('/var/www/html/ai-nexus/server/server.cert', 'utf8');  
  credentials = { key: privateKey, cert: certificate };
} catch (error) {
  console.error("Error reading SSL certificatess:", error.message);
  process.exit(1);
}

app.use(cors({
  origin: ['https://kyrix.dev', 'https://kyrix.dev/ai-nexus']
}));

app.use(express.json());
app.use(bodyParser.json());

// Endpoint to Get a list of tools
app.get("/getTools", async (req, res) => {
  try {
    const data = await getJsonData();
    res.json(data); 
  } catch (err) {
    console.error("Failed to retrieve data:", err);
    res.status(500).json({ message: "Failed to retrieve data" });
  }
});

// POST endpoint for collecting emails
app.post('/submit-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }

  try {
    const result = await insertEmail(email);
    if (result.status === 400) {
      return res.status(400).json({ message: result.message });
    }

    return res.json({
      message: "✅ It was very nice to hear from you.",
      insertedId: result.insertedId,
    });
  } catch (err) {
    console.error("Failed to insert email:", err);
    return res.status(500).json({ message: "Failed to save the email. Please try again later." });
  }
});

app.post('/insert-ai-tools', async (req, res) => {
  try {
    const result = await insertJsonData();
    res.json({
      message: "Data inserted successfully",
      insertedCount: result.insertedCount,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to insert data", error: err.message });
  }
});

async function startServer() {
  try {
    await connectToDatabase();

    app.get("/", (req, res) => {
      res.send("Welcome To Ai nexus API ");
    });

    https.createServer(credentials, app).listen(port, () => {
      console.log(`AI Nexus API | Listening on https://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error connecting to the database or starting the server:", err);
  }
}
startServer();


