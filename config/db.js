const mongoose = require('mongoose');

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(process.env.database_connection_string, config).then(()=>{
    console.log(`connection to database succeed`);
}).catch(()=> {
    console.log(`connection to database failed`);
})