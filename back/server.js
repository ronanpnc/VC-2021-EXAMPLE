const express = require("express");
const app = express();

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => console.log("listening on : " + SERVER_PORT));

app.use(express.static("../front/dist"));
