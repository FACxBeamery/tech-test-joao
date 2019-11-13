const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/router");
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}. Ready to accept requests!`);
});

module.exports = app;
