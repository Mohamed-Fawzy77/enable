const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');

const mainRouter = require('./app/routes')

app.use('/', mainRouter );

