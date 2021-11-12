const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    removed: { type: Boolean, default: false },
    password: {type: String, required: true}
},
    { timestamps: true }
);
UserSchema.index({ '$**': 'text' });
UserSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { removed: false } })

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;