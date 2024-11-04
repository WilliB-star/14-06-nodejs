import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());

let todos = [];

// Todos aus der JSON-Datei lesen
fs.readFile('todos.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading todos.json', err);
    return;
  }
  todos = JSON.parse(data);
});

server.get("/todos", (req, res) => {
    console.log("Ich bekomme ein Get");
    res.json(todos);
});

console.log("Server Online");
server.listen(PORT);
