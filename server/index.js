const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')))

app.listen(process.env.PORT || 8888, () => console.log('listening on port', process.env.PORT || 8888));