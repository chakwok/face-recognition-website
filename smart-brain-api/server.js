const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

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

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	res.json(id);
})

app.post('/image', (req, res) => {
	const { id } = req.body;

	res.status(404).send("user not found");
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