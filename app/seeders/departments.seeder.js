require('dotenv').config();
require('../../config/db');
const Department = require('../modules/department/department.model');
const departments = [
    {name: 'sales'},
    {name: 'hr'},
 
]

async function addDepartments(){
    const result = await Department.insertMany(departments);
    console.log({result});
}
addDepartments();
