const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

const { calculator, OPERATIONS } = require('./calculator');

const ERROR = {
  Invalid_Parameter: 'Parameter is not a number!',
  Invalid_Operator: 'Invalid operator!',
}

app.post('/calculate', (req, res, next) => {
  try {
    const { number1, number2, operator } = req.body;

    if (number1 === null || number2 === null || number1 === undefined || number2 === undefined) {
      console.error(ERROR.Invalid_Parameter)
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }

    if (isNaN(number1) || isNaN(number2)) {
      console.error(ERROR.Invalid_Parameter)
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }
    
    if (typeof number1 === 'string' || typeof number2 === 'string') {
      console.error(ERROR.Invalid_Parameter)
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }

    if(OPERATIONS[operator] === undefined) {
      console.error(ERROR.Invalid_Operator)
      return res.status(400).json({ error: ERROR.Invalid_Operator });
    }

    const result = calculator(number1, number2, operator)

    return res.json({ result });

  } catch (err) {
    next(err)
  }
});

app.use((err, req, res, next) => {
  console.error(err); 

  res.status(500);

  res.json({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
