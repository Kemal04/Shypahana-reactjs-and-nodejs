const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
const db = require("./models");

//routers


const usersRouter = require("./routes/Users.js");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running 3001 port");
    });
});


