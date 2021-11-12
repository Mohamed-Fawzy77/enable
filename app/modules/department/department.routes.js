const express = require('express');
const departmentRouter = express.Router();
const DepartmentController = require('./department.controller');
const checkPermission = require('../../middlewares/check_permission');
const protectApi =require('../../middlewares/protectApi')


departmentRouter.post(
    '/createDepartment',
    protectApi,
    checkPermission([
        'create_department'
    ]),
    DepartmentController.createDepartment
)

departmentRouter.post(
    '/viewDepartment',
    protectApi,
    checkPermission([
        'view_department'
    ]),
    DepartmentController.viewDepartment
)

departmentRouter.delete(
    '/deleteDepartment',
    protectApi,
    checkPermission([
        'delete_department'
    ]),
    DepartmentController.deleteDepartment
)
// departmentRouter.put(
//     '/deleteDepartment',
//     protectApi,
//     checkPermission([
//         'update_department'
//     ]),
//     DepartmentController.updateDepartment
// )

// departmentRouter.get(
//     '/allDepartments',
//     protectApi,
//     checkPermission([
//         'list_all_departments'
//     ]),
//     DepartmentController.getAllDepartments
// )

module.exports = departmentRouter;