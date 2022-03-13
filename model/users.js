const mongoose = require('./connect.js');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        //必填信息，后为报错信息
        required: [true, '请输入用户名'],
        minlength: 3,
        maxlength: 10,
        //去除两端空格
        trim: true
    },
    email: {
        type: String,
        require: [true, '请输入邮箱'],
        //唯一性
        unique: true
    },
    password: {
        type: String,
        require: [true, '请输入密码'],
        minlength: 8
    },
    role: {
        type: String,
        default: 'normal'
    },
    state: {
        type: Boolean,
        default: false
    }
});
const Users = mongoose.model('User', userSchema);

// const User = new Users({
//         username: '梦涵之诺',
//         password: 'nmdzz000',
//         email: '1600513615@qq.com',
//         role: 'admin',
//         state: 'false'
//     }

// )
// User.save();

module.exports = Users;