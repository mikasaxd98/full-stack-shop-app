const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../configs/keys');

module.exports.login = async function (req, res) {
  const userFromDb = await User.findOne({email: req.body.email});
  const userPassHashFormDb = userFromDb?.password;
  const passResult = userPassHashFormDb ? bcrypt.compareSync(req.body.password, userPassHashFormDb) : false;

  if (userFromDb && passResult) {
    const token = jwt.sign({
      email: userFromDb.email,
      userId: userFromDb._id.toString(),
    }, keys.JWT_WEB_TOKEN, {expiresIn: '1h'});
    res.status(200).json({
      token: `Bearer ${token}`
    });
  } else {
    res.status(404).json({
      message: "Invalid email or password"
    });
  }


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
