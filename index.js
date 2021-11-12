const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');

const mainRouter = require('./app/routes')
app.use(express.json())
app.use('/api', mainRouter );


const PORT = process.env.port || 3000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))