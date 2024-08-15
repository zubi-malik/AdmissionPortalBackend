const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")
const userRoute = require("./registration/router");
const connectDB = require("./utils/database");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use("/api", userRoute);


app.listen(port, () => {
  connectDB()
    .then(() => {
      console.log(`Server is running on port ${port}`);
    })
    .catch((error) => {
      console.error(error);
    });
});
