const express = require("express");
const app = express();
const port = 3000;

const { router } = require("./router");

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
