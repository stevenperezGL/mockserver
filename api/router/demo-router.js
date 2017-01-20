var express = require('express');
var router = express.Router({
	mergeParams: true,
});

var demoRoutes = require('../routes/demo-routes');

router.get('/users', demoRoutes.getUsers);
router.get('/user/:id', demoRoutes.getUser);
router.get('/yolo', demoRoutes.getYolo);
router.get('/getResult', demoRoutes.getResult);

module.exports = router;
