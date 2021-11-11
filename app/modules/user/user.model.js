const mongoose = require('mongoose');

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
},
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);