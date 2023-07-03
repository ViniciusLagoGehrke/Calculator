const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { calculator } = require('./calculator');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res, next) => {
  try {
    const { number1, number2, operator } = req.body;

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
