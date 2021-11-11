const mongoose = require('mongoose');

const rolesNames = ['Super Admin Role', 'Department Manager', 'Employee'];

const RoleSchema = new mongoose.Schema({
    name: { type: String, enum: rolesNames, required: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId }],
    removed: { type: Boolean, default: false }
},
    { timestamps: true }
);

const Role = mongoose.model('User', RoleSchema);

module.exports = Role;