const dataFile = require('./data/speakers.json');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})

