const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"108138655449-673udglt076bha8jh1jkrbauak2pgngv.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:500/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));