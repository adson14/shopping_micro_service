const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, nest) =>{
  return res.send('hello world3').status(200);
});


app.listen(8003, () =>{
  console.log('Listening on port 8003');
})