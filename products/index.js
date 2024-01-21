const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    return res.status(200).json({ id: 1, msg: "Hello products!" });
})

app.listen(8001, () => {
    console.log('Products server listen on port 8001');
});