const express = require("express")
const http = require("http")
const path = require("path")

const PORT = 8000
const app = express()

app.use(express.static(path.join(__dirname, "../public")))

http.createServer(app).listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})