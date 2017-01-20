const express = require('express');
const ejs = require('ejs-locals');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();
const config = require('./server-config');

// ROUTERS
const demoRouter = require('./api/router/demo-router');

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('html', ejs);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');

app.get('*', (req, res, next) => {
	if (req.url.indexOf(config.apiKey) !== -1) {
		return next();
	}
	res.render('index');
});

// IMPORT APIs
app.use('/api', demoRouter);

app.listen(config.port, () => {
	console.log(`Server is running in port ${config.port}`);
});
