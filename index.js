const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({path : './config.env'})

const port = process.env.PORT || 1111

app.listen(port,()=>{
    console.log("port = " + port)
})