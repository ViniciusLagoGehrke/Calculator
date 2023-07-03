import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import calculator from '@/utils/calculator'
import { Data, Error, OPERATIONS, DataRequest } from '@/types'

const ERROR = {
  Invalid_Parameter: 'Parameter is not a number!',
  Invalid_Operator: 'Invalid operator!',
}

const errorHandler = (handler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  try {
    await handler(req, res);

  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const handler: NextApiHandler<Data | Error> = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
    const { number1, number2, operator } = req.body as DataRequest;

    if (
      number1 === null ||
      number2 === null ||
      number1 === undefined ||
      number2 === undefined
    ) {
      console.error(ERROR.Invalid_Parameter);
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }

    if (isNaN(number1) || isNaN(number2)) {
      console.error(ERROR.Invalid_Parameter);
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }

    if (typeof number1 === 'string' || typeof number2 === 'string') {
      console.error(ERROR.Invalid_Parameter);
      return res.status(400).json({ error: ERROR.Invalid_Parameter });
    }

    if (OPERATIONS[operator] === undefined) {
      console.error(ERROR.Invalid_Operator);
      return res.status(400).json({ error: ERROR.Invalid_Operator });
    }

    const result = calculator(number1, number2, operator).toString();

    return res.json({ result });
};

export default errorHandler(handler);
