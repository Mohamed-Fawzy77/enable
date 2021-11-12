const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        removed: {
            type: Boolean,
            default: false
        },
        manager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

departmentSchema.index({ name: 1 }, { unique: true, partialFilterExpression: { removed: false } })

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
