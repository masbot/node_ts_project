/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';

export default [
  {
    path: '/',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('Hello world!');
    },
  },
];
