import express from 'express';
import 'dotenv/config';
import './google-config.js'; // Assuming google-config.js sets up google passport strategy
import './facebook-config.js'; // Assuming facebook-config.js sets up facebook passport strategy
import './github-config.js';
import './twitter-config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import session from 'express-session';

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to `true` in production if using HTTPS
  }),
);

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true, // Allow credentials to be sent (cookies)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login' }),
  (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true }); // Make cookie HttpOnly for better security
    res.redirect('http://localhost:5173/');
  },
);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: 'http://localhost:5173/login' }),
  (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true }); // Secure token handling
    res.redirect('http://localhost:5173/');
  },
);

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: 'http://localhost:5173/login' }),
  function (req, res) {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('http://localhost:5173/');
  },
);

app.get('/auth/twitter', passport.authenticate('twitter', { scope: ['email'] }));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('http://localhost:5173/');
  },
);

app.listen(6969, () => {
  console.log('Server is running on port 6969');
});
