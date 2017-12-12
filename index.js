const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

// import google cred and set callback route after getting google profile
passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		console.log(accessToken);
		console.log(refreshToken);
		console.log(profile);
	})
);


// 'google' is set internally by GoogleStrategy
app.get('/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get('/auth/google/callback', passport.authenticate('google'));

// set the port for deployment or local
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
		console.log('Running on: ' + PORT)
});