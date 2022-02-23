import passport from 'passport';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import DB from '../database';
const { JWT_SECRET } = process.env;

export const generateTokenResponse = ({ id, email }, verify = false) => {
  let expiryTime = '365d';
  return {
    token: jwt.sign({ id, email }, JWT_SECRET, {
      expiresIn: expiryTime
    }),
    userId: id
  };
};

export const authenticateAuthToken = passport.authenticate('jwt', {
  session: false
});

// ============================ Local Login Strategy ============================ //

export const LocalLoginStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const user = await DB.users.findOne({ where: { email } });
      if (!user) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.'
        });
      }
      const isValid = user.validatePassword(password);
      if (!isValid) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.'
        });
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }
);

// ============================ JWT Strategy ============================ //

export const AuthenticationStrategy = new JWTstrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async (jwtPayload, done) => {
    try {
      const user = await DB.users.findOne({ where: { id: jwtPayload.id } });
      if (!user) return done(null, false);

      return done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
);
