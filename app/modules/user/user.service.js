const UserRepo = require('./user.repository');
const CustomError = require('../../helpers/custom_error');

class UserService {
    static async validateIsUniqueEmail(email){
        const users = await UserRepo.getUsers({
            email,
            removed: false
        });

        if(users.length !== 0){
            throw new CustomError({message: 'email not unique'}, 400);
        }
    }

    static async createNewUser(userSchema){
        const user = await UserRepo.createNewUser(userSchema);
        
        return user;
    }
    
    static async getUserByEmail(email){
        const user = await UserRepo.getUser({
            email,
            removed: false
        });

        return user;
    }

    static async deleteUser(id){
        const user = await UserRepo.deleteUser({
            _id:id
        });
    }

    static async getUser(userId){
        const user = await UserRepo.getUserWithRoleAndDepartmentPopulated({
            _id: userId,
            removed: false
        });

        return user;
    }

    static async getUsers(schema){
        const users = await UserRepo.getUsers(schema);

        return users;
    }

    
    
}

module.exports = UserService;