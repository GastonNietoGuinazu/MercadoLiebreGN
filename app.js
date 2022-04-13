const express = require("express");
const app = express();

const path = require ("path");

app.use(express.static("public"));

app.listen (process.env.PORT||3015, () => {
    console.log("Corriendo servidor en http://localhost:3015")
})

app.get ("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get ("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.post ("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get ("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

app.post ("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})