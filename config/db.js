const mongoose = require('mongoose');

mongoose.connect(process.env.database_connection_string).then(()=>{
    console.log(`connection to database succeed`);
}).catch((error)=> {
    console.log(`connection to database failed`);
    console.log({error})
})