import {strictEqual} from 'node:assert'
import {isGibberish} from './lib.mjs';
import express from 'express';

const app = express();

app.get('*', (req, res) => {
    let input = req.params[0];
    let val = isGibberish(input);
    res.send(val);
  });

app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);
