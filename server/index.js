const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

const { calculator, OPERATIONS } = require('./calculator');

app.post('/calculate', (req, res) => {
  const { number1, number2, operator } = req.body;

  if(OPERATIONS[operator] === undefined) {
    return res.status(400).json({ error: 'Invalid operator' });
  }

  const result = calculator(number1, number2, operator)

  return res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
