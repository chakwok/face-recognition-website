const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
	res.send('this is working');
})

app.post('/signin', (req, res) => {
	res.send('signing');
})

app.post('/register', (req, res) => {
	const { email, name, password } = req.body;
	// req = {email, password, name}
	//can then push to db
	res.json(name);
})

app.listen(3000, () => {
	console.log('Running');
})

/* 
/ --> res = this is working
/signin --> POST, response success/ fail
/register --> POST, response user
/profile/:userId --> GET = user
/image --> PUT --> user 

*/