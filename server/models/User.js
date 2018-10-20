const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: 0
  },
  lastName: {
    type: String,
    default: 0
  },
  email: {
    type: String,
    default: 0
  },
  password: {
    type: String,
    default: 0
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
