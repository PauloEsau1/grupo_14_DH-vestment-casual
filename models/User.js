const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { use } = require('../routes/admin');

const User = {
    fileName: './data/users.json',
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName,"utf-8"));
    },
    generateId: function() {
        let allUser = this.findAll();
        let lastUser = allUser.pop();
        if (lastUser) {
            return lastUser.id + 1 ;
        }
        return 1;
    },
    findAll: function() {
        return this.getData();
    },
    findByEmail: function(email) {
        let allUser = this.findAll();
        let userFound= allUser.find(
            oneUser => oneUser.email === email)
        return userFound;

    },    
    create: function (userData) {
        let allUser = this.findAll();
        let newUser = {
            id: this.generateId(),
            "first_name": userData.first_name,
            "last_name": userData.last_name,
            "email": userData.user,
            "password": bcryptjs.hashSync(userData.password1,10),
            "avatar": "default.jpg"
        }
        allUser.push(newUser);
        fs.writeFileSync(this.fileName,
            JSON.stringify(allUser,null,' '));
    }
}

module.exports = User;