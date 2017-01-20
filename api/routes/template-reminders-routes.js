const uuid = require('uuid');
const _ = require('lodash');

const db = require('../utils/db');
const getTable = db.getTable;
const TEMPLATES_TABLE = db.tables.TEMPLATES_TABLE;
const dbTemplates = getTable(TEMPLATES_TABLE);

const templateMockData = require('../json-files/templates.json');


module.exports = {
	initTemplatesTable() {
		const countTemplates = dbTemplates
			.size()
			.value();

		if (countTemplates > 0) return;

		templateMockData.forEach((template) => {
			template.mockId = uuid.v4();
			dbTemplates.push(template)
				.value();
		});
	},
	getTemplates(req, res) {
		var Keyword = req.query.Keyword;
		var Sort = req.query.Sort || 'desc';
		var Offset = req.query.Offset;
		var Limit = req.query.Limit;

		var templates = dbTemplates.value();
		var total = _.size(templates);
		// Keyword filter
		if (!_.isEmpty(Keyword)) {
			templates = _.reduce(templates, (result, template) => {
				if (_.toString(template.Name).indexOf(Keyword) > -1 || template.Description.indexOf(Keyword) > -1) {
					result.push(template);
				}
				return result;
			}, []);
		}

		// Simulate Offset and Limit
		if (!_.isUndefined(Offset) && !_.isUndefined(Limit)) {
			Offset = _.toInteger(Offset);
			Limit = _.toInteger(Limit);
			templates = _.chain(templates)
				.slice(0, Offset)
				.take(Limit)
				.value();
		}

		res.send({
			Status: 1,
			Code: 2,
			Message: 'Sample string 3',
			Offset: Offset || 0,
			Limit: Limit || 5,
			Total: total,
			Data: {
				ReminderTemplateList: templates,
			},
		});
	},
};
