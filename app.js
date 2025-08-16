const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Azure sets PORT env var

app.get('/', (req, res) => {
  res.send('This is my first app');
});

app.listen(port, () => console.log(`Listening on ${port}`));
