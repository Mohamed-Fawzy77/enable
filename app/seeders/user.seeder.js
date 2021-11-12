require('dotenv').config();
require('../../config/db');

const User = require('../modules/user/user.model');

async function addUser(){
    try{
        const newUser = new User({
            firstName: 'mohamed',
            lastName: 'fawzy',
            role: '618e75264c6efddc51c19180', //super admin
            email: 'mohamed.fawzy7996@gmail.com',
            password: 'mypassword'
        });
        const user = await newUser.save();
        console.log({user});
    } catch(error){
        console.log({error})
    }
}

addUser();