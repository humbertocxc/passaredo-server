import { AppDataSource } from "./data-source";
import { routes } from "./routes";


AppDataSource.initialize().then(async () => {
    const express = require('express')
    const app = express()
    const cors = require('cors')
    app.use(cors())
    app.use(express.json())
    app.use(routes)
    app.listen(3333, console.log("running"))

}).catch(error => console.log(error))

