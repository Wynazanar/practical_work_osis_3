const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.listen(5050, () => console.log('Server listening on http://localhost:5050'));
