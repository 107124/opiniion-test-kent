const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const customers = require('./routes/api/customers');

app.use('/api/customers', customers);


const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));