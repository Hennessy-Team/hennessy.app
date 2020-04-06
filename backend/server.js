const express = require('express');

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('something');
});
app.listen(HTTP_PORT, () => {
	console.log(`Express server starting on port: ${HTTP_PORT}`);
});
