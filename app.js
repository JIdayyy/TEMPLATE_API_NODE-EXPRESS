const express = require('express')
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const api = require('./src/api');
const { notFound, errorHandler } = require('../API_MEME_GENERATOR/src/middleware/middlewares');


const app = express()
app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  
app.use(notFound);
app.use(errorHandler);

app.use('/api', api);

module.exports = app