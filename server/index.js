const express = require('express')
const cors = require('cors');
const itemsRoutes = require('./routes/items.js');

const app = express()
const port = 8000



// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoutes);



app.listen(port, async () => {
  
  console.log(`Server running at http://localhost:${port}/`)
})