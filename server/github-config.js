import { Strategy as GitHubStrategy } from 'passport-github';
import passport from 'passport';

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS,
      callbackURL: 'http://localhost:6969/auth/github/callback',
      profileFields: ['id', 'displayName', 'email', 'name'],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
