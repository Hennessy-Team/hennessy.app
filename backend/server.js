const   express = require('express'),
        app = express(),
        HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('wut');
})

app.listen(HTTP_PORT, () => {
    console.log("Express server starting on port: " + HTTP_PORT);
})