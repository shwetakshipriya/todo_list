const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Render.com, or default to 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, '0.0.0.0', () => { // Listen on all network interfaces
  console.log(`Server is running on port ${port}`);
});
