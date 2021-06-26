const app = require("./app")
const api = require("./src/api/index")
require('dotenv').config();


const PORT = process.env.PORT


app.listen(PORT, () =>{
    console.log(`Server is runnin on port ${PORT}`)
})