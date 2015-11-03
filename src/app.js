import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import index from './routes/index'
import router from './routes/calculator'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use(router);

app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status,
			message: err.message
		}
	});
});

export default app
