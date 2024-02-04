import express from "express";

const app = express();

app.get('/', (req, reply) => {
  reply.send("hello world");
});

app.listen(8080);
