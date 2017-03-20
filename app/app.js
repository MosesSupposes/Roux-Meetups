const express = require('express');
const reload = require('reload');
const dataFile = require('./data/speakers.json');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})

reload(server, app);