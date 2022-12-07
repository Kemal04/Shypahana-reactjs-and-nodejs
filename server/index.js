const express = require('express');
const app = express();
const cors = require("cors");

const port = 3002;

//routes
const BookingController = require("./routes/Booking");
const RoomController = require("./routes/Room");
const ResortController = require("./routes/Resort");
const authController = require("./routes/Auth");

app.use(express.json());
app.use(cors());

app.use("/", BookingController);
app.use("/", RoomController);
app.use("/", ResortController);
app.use("/auth", authController);

//serv
app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})
