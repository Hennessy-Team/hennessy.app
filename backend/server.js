const express = require('express');

const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const something = {
	foo: 1,
	fll: 23,
	fll2w: 543,
	bla: 2,
	bla2: 2,
	bla3: 2,
};

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello world');
});
app.listen(HTTP_PORT, () => {
	console.log(`Express server starting on port: ${HTTP_PORT}`);
});
