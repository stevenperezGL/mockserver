const _ = require('lodash');
const dbUsers = require('../json-files/users.json');

module.exports = {
	getUsers (req, res) {
		res.send(dbUsers);
	},
	getUser (req, res) {
		const id = req.body.params;
		const user = _.filter(dbUsers, {id});
		res.send(user);
	},
};
