const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(__dirname + '/style.css'));
app.use(bodyParser.urlencoded({ extended: false }));
const host ='localhost';
const port = 3000;
app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
});

app.post('/submit', (req, res) => {
    var name = req.body.nameBox;
    var email = req.body.emailBox;
    var comment = req.body.commentBox;
    res.send('name: ' + name + '<br/>email: ' + email + '<br/>comment: ' + comment);
});

app.listen(port, function() {
    console.log(`Express form listening at http://${host}:${port}/`);
});
