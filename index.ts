const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
    res.send(JSON.stringify({"response": "Hello World"}));
});

app.listen(port, () => {
    console.log(`Secret santa running on port ${port}`)
});
