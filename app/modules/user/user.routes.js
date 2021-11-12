const express = require('express');
const userRouter = express.Router();
const UserController = require('./user.controller');
const checkPermission = require('../../middlewares/check_permission');
const protectApi =require('../../middlewares/protectApi')

userRouter.post(
    '/login',
    UserController.login
)

userRouter.post(
    '/createUser',
    protectApi,
    checkPermission([
        'create_user'
    ]),
    UserController.createUser
)

userRouter.post(
    '/searchUser',
    protectApi,
    checkPermission([
        'create_user'
    ]),
    UserController.searchUsers
)

userRouter.post(
    '/viewUSer',
    protectApi,
    checkPermission([
        'view_user'
    ]),
    UserController.viewUser
)

userRouter.delete(
    '/deleteUSer',
    protectApi,
    checkPermission([
        'delete_user'
    ]),
    UserController.deleteUser
)

userRouter.get(
    '/allUsers',
    protectApi,
    checkPermission([
        'list_all_users'
    ]),
    UserController.getAllUsers
)

module.exports = userRouter;