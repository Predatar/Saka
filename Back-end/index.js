const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({name: 'asd'})
})

app.listen(port, () => {
	console.log('Server start');
})
