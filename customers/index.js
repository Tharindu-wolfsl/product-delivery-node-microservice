const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    return res.status(200).json({ id: 1, msg: "Hello Customer!" });
})

app.listen(8002, () => {
    console.log('Customer server listen on port 8002');
});