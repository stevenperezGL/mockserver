var _ = require('lodash');
var dbUsers = require('../json-files/users.json');

module.exports = {
	getUsers (req, res) {
		res.send(dbUsers);
	},
	getUser (req, res) {
		var id = parseInt(req.params.id) || 0;
		var user = _.filter(dbUsers, {id});
		res.send(user);
	},
	getYolo (req, res) {
		res.send({name: 'Yolo'});
	},
	getResult (req, res) {
		var value = parseInt(req.params.value) || 0;
		res.send({name: 'The result is: ' + value});
	},
};
