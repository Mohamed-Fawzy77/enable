const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        removed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

PermissionSchema.index({ name: 1 }, { unique: true, partialFilterExpression: { removed: false } })

const Permission = mongoose.model('Permission', PermissionSchema);

module.exports = Permission;
