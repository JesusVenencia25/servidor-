const express = require("express")
const app = express();
const cors = require('cors')

app.use(cors());
require("./bin/routers.js")(app)

app.get("/", (req, res) => {
  res.send('Bienvenido')
})
app.listen(3000, ()=>{
 console.log('El servidor esta levantado')  
})