const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const key = require('../configs/keys');
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key.JWT_WEB_TOKEN
};
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('email id');

        if(user) {
          done(null, user)
        }else {
          done(null, false)
        }
      } catch (e) {
        console.log(e)
      }

    })
  )
}
