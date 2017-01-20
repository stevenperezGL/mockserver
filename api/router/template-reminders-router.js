var express = require('express');
var router = express.Router({
	mergeParams: true,
});

var routeReminderTemplates = require('../routes/template-reminders-routes');

routeReminderTemplates.initTemplatesTable();
router.get('/ReminderTemplates', routeReminderTemplates.getTemplates);

module.exports = router;
