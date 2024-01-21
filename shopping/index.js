const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    return res.status(200).json({ id: 1, msg: "Hello shopping!" });
})

app.listen(8003, () => {
    console.log('Shopping server listen on port 8003');
});