const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
app.use(express.static('public'))
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/user-directory', function(request,response){
response.render('user-directory', {users : data.users});

});
app.get('/robot', function(request,response){
response.render('robot', {users : data.users});

});
app.get('/robot/:username', function(request,response){
  let person = users.find(function(member){
    return member.username === request.params.username;
  })
response.render('robot', person);

});

app.listen(3000,function(){
  console.log('Example app listening on port 3000!')
});
