const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
},
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports  = User;