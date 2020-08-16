const path = require("path")
const express = require("express")
const app = express();

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/api", (req, res) => {
    res.send("API is hit")
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(PORT)