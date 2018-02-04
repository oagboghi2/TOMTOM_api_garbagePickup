const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

var tomRoutes = require('./routes/tomRoutes');
app.use('/api/TOM', tomRoutes);


app.get('/', (req, res, next)=>{
  res.sendFile("index.html");
});


app.listen(port, ()=>{
  console.log("Backend is in another castle");
});
