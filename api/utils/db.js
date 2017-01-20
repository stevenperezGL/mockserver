var path = require('path');
var low = require('lowdb');
var fs = require('fs');
var fileAsync = require('lowdb/lib/file-async');

// Folder Settings
var folderPath = path.resolve(__dirname, '../../db');
if (!fs.existsSync(folderPath)) {
	fs.mkdirSync(folderPath);
}

// DB Settings
var dbPath = `${folderPath}/mockDB.json`;
var db = low(dbPath, { storage: fileAsync });

// Default Schemas
db
	.defaults({
		templates: [],
	})
	.value();

module.exports = {
	getTable(schema) {
		return db.get(schema);
	},
	getFilter(table, filters) {
		return db.get(table)
			.filter(filters)
			.value();
	},
	tables: {
		TEMPLATES_TABLE: 'templates',
	},
};
