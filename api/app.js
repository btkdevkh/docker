const express = require('express');
const cors = require('cors');

const app = express()

// Middlewares
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.json([
    {
      "id": 1,
      "title": "Book 1"
    },
    {
      "id": 2,
      "title": "Book 2"
    },
    {
      "id": 3,
      "title": "Book 3"
    },
    {
      "id": 4,
      "title": "Book 4"
    }
  ])
})

app.listen(4000, () => console.log('Server listen on port 4000'))
