const User = require('./user.model');

class UserService {

    static async createNewUser(userSchema){
        const user = new User(userSchema);

        return user;
    }

    static async getUsers(schema){
        const users = await User.find(schema);

        return users;
    }

    static async getUser(schema){
        const user = await User.findOne(schema);

        return user;
    }
}

module.exports = UserService;