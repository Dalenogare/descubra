const express = require('express')
const routes = require('./routes')
const cors = require('cors');

require('./database')

const app = express()

app.use(express.json());
app.use(routes);

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
})
  

app.listen(3333);
