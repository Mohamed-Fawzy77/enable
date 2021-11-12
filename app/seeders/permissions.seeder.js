require('dotenv').config();
require('../../config/db');
const Permission = require('../modules/permission/permission.model');
const permissions = [
    {name: 'create_user'},
    {name: 'delete_user'},
    {name: 'view_user'},
    {name: 'list_all_users'},
    {name: 'search_users'},
    {name: 'create_department'},
    {name: 'delete_department'},
    {name: 'view_department'},
    {name: 'update_department'},
    {name: 'assign_user'},
    {name: 'list_all_departments'}
]

async function addPermissions(){
    const result = await Permission.insertMany(permissions);
    console.log({result});
}
addPermissions();
