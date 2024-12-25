import { Strategy as TwitterStrategy } from 'passport-twitter';
import passport from 'passport';

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.X_API_KEY,
      consumerSecret: process.env.X_API_KEY_SECRET,
      callbackURL: 'http://localhost:6969/auth/twitter/callback',
      profileFields: ['id', 'displayName', 'email', 'name'],
      includeEmail: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    },
  ),
);
