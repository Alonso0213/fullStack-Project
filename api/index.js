const {express, routes} = require("./controller")
const path  = require("path")
const app = express()
const errorHandeling = require("./middleware/errorHandling.js")
const port = +process.env.PORT || 3000

app.use(
    express.static("./static"),
    express.urlencoded({
        extended: false
    }),
    routes
)

app.use(errorHandeling)

app.listen(port, ()=>{
    console.log(`The server is running on port : ${port}😘`);
})