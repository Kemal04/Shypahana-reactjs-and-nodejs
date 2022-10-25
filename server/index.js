const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/Users.js");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running 3001 port");
    });
});


