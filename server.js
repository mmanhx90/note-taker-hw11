const express = require('express');
const api = require('./routes/apiRoutes');
const page = require('./routes/pageRoutes');
const { urlencoded } = require('express') 
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', api);

app.use('/', page);

app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http:localhost:${PORT}`)
);