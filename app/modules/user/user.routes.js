const express = require('express');
const userRouter = express.Router();
const UserController = require('./user.controller');
const checkPermission = require('../../middlewares/check_permission');

userRouter.post(
    '/login',
    UserController.login
)

userRouter.post(
    '/createUSer',
    checkPermission([
        'create_user'
    ]),
    UserController.createUser
)

module.exports = userRouter;