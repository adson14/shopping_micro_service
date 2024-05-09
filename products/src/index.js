const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, nest) =>{
  return res.send('hello world 2 ').status(200);
});


app.listen(8002, () =>{
  console.log('Listening on port 8002');
})