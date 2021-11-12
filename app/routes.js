const express = require('express');
const router = express.Router();

const userRoutes = require('./modules/user/user.routes');
const departmentRoutes = require('./modules/department/department.routes');

router.use('/users', userRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;