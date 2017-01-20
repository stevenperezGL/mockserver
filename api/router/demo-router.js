const express = require('express');
const router = express.Router({
	mergeParams: true,
});

const demoRoutes = require('../routes/demo-routes');

router.get('/users', demoRoutes.getUsers);
router.get('/user/:id', demoRoutes.getUser);

module.exports = router;
