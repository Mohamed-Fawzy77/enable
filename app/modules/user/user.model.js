const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    removed: { type: Boolean, default: false }
},
    { timestamps: true }
);


PermissionSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { removed: false } })

const User = mongoose.model('User', UserSchema);

module.exports = User;