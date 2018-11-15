const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
	email: String,
	displayName: String,
	googleId: String,
	thumbnail: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;