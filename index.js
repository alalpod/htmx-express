const express = require('express');
const engine = require('express-engine-jsx');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('views', './jsx');
app.set('view engine', 'jsx');
app.engine('jsx', engine);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

let count = 0;
let todos = [];

app.get('/', (req, res) => {
  count = 0;
  res.render('index', { count, todos });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

// API
app.post('/api/increment', (req, res) => {
  count++;
  res.set('Content-Type', 'text/html');
  res.send(count.toString());
});

app.post('/api/todo', async (req, res) => {
  todos.push(req.body.name);
  res.render('todos', { todos });
});

app.delete('/api/todo/:index', async (req, res) => {
  todos.splice(parseInt(req.params.index), 1);
  res.render('todos', { todos });
});
