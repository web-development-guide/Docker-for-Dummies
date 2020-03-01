const Express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

const TodoModel = require('./model');

const app = Express();

app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', function(req, res) {
	TodoModel
		.findAll({
			attributes: [ 'id', 'title', 'createdAt', 'done' ],
		})
		.then(function(todos) {
			if (!todos || !todos.length) {
				res.send({
					status: 204,
					count: 0,
				});
				return;
			}

			res.send({
				status: 200,
				model: todos,
				count: todos.length,
			});
		})
		.catch(function(err) {
			console.error(err);
			res.send({
				status: 404,
				error: 'Failed to get any Todo Item',
			});
		});
});

app.post('/', function(req, res) {
	const { title } = req.body;

	TodoModel
		.create({
			title,
			done: false,
		})
		.then(function(todo) {
			res.send({
				status: 201,
				model: todo,
			});
		})
		.catch(function(err) {
			console.error(err);
			res.send({
				status: 503,
				error: 'Failed to create new Todo item',
			});
		});
});

app.put('/:id', function(req, res) {
	const { id } = req.params;
	const { done } = req.body;

	TodoModel
		.update({ done },{
			where: {
				id,
			},
		})
		.then(function(todo) {
			res.send({
				status: 200,
				model: todo,
			});
		})
		.catch(function(err) {
			console.error(err);
			res.send({
				status: 404,
				error: 'Could not find right Todo item to update',
			});
		});
});

app.delete('/:id', function(req,res) {
	const { id } = req.params;

	TodoModel
		.destroy({
			where: {
				id,
			},
		})
		.then(function() {
			res.send({
				status: 200,
			});
		})
		.catch(function(err) {
			console.error(err);
			res.send({
				status: 404,
				error: 'Could not find right Todo item for delete',
			});
		});
});

app.listen(process.env.NODE_APP_PORT, function() {
	console.log('App Started at', process.env.NODE_APP_PORT);
});
