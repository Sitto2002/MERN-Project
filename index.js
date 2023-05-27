const express = require('express');
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})

app.post("/login", async(req,resp) => {
    if (req.body.password && req.body.email)
    resp.send(req.body);
})

app.listen(8000);