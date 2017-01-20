var express = require('express');
var ejs = require('ejs-locals');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

var app = express();
var config = require('./server-config');

// ROUTERS
var demoRouter = require('./api/router/demo-router');
var reminderTemplateRouter = require('./api/router/template-reminders-router');

app.set('port', (process.env.PORT || config.port));

app.use(cors());
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('html', ejs);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');

app.get('/', (req, res, next) => {
	if (req.url.indexOf(config.apiKey) !== -1) {
		return next();
	}
	res.render('index');
});

// IMPORT APIs
app.use('/api', demoRouter);
app.use('/api', reminderTemplateRouter);

app.listen(app.get('port'), () => {
	console.log(`Server is running in port ${app.get('port')}`);
});
