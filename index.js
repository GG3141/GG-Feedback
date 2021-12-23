const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  })
 database.find({"lat":"","lon":""},(err, data) => {
	 if(err){
		 console.log(err)
	 }else{database.insert(data)}
 })
});

app.post('/api', (request, response) => {
  var data = request.body;
  database.insert(data);
  response.json(data);
	console.log(data)
	});