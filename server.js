//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const pooldev = new Pool({
  user: 'richard',
  host: 'localhost',
  database: 'rich_face_api',
  password: '',
  port: 5432,
});

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/dbtest', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('Select * FROM test_table');
    const results = { results: result ? result.rows : null };
    res.send(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
});

app.get('/getPosts', async (req, res) => {
  pool.query('SELECT * FROM posts ORDER BY postId ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
console.log('Listening on ' + port);
