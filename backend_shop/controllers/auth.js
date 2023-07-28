const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.login = function (req, res) {
	res.status(200).json({
		login: {
			email: req.body.email,
			password: req.body.password
		}
	})
}

module.exports.reqister = async function (req, res) {

	const user = await User.findOne({email: req.body.email});
	if (!user) {
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password;
		const newUser = new User({
			email: req.body.email,
			password: bcrypt.hashSync(password, salt)
		});
		try {
			await newUser.save();
			res.status(200).json(newUser);
		} catch (e) {
			res.status(500).json({
				message: 'Error'
			})
		}
	} else {
		console.log('user exist');
		res.status(409).json({
			message: 'this user exist'
		})
	}
}
