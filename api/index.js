const {express, routes} = require("./controller")
const port = +process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log(`The server is running on port : ${port}😘`);
})