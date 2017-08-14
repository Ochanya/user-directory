const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
app.use(express.static('public'))
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache'); //use mustache template to render HTML
app.set('views', __dirname + '/views');

app.get('/', function(request,response){
response.render('user-directory', {users : data.users});

// });
// app.get('/robot', function(request,response){
// response.render('robot', {users : data.users});

});
app.get('/:username/', function(request,response){
  let person = data.users.find(function(member){
    return member.username === request.params.username;
  });
response.render('robot',  {users : person});
//response.render('robot', {users : data.users})
// iF we used response.render('robot', person); we'll have to take away the {}#person},{ /person }From the HTML
//{{>tail}} partials. refers to a file outside the document.
//{{.}} used to access items in an array.
});

app.listen(3000,function(){
  console.log('Example app listening on port 3000!')
});
