const mongoose = require('mongoose');

const rolesNames = ['super_admin', 'department_manager', 'employee'];

const RoleSchema = new mongoose.Schema({
    name: { type: String, enum: rolesNames, required: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId }],
    removed: { type: Boolean, default: false }
},
    { timestamps: true }
);


RoleSchema.index({ name: 1 }, { unique: true, partialFilterExpression: { removed: false } })

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;