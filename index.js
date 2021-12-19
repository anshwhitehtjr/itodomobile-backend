const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const connectToMongo = require('./db');

app.use(express.json());
app.use(cors());

// Available
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todo'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`);
});

connectToMongo();
