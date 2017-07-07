const express = require('express');
const sass = require('node-sass');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
});

app.use(sassMiddleware({
  src: __dirname + "/sass",
  dest: __dirname + "/public",
  debug: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})