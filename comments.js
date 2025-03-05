// Create Web server
const express = require('express');
const app = express();
// Create a port
const port = process.env.PORT || 3000;
// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

