const passport = require('passport');
const FacebookStrategy = require('passport-facebook')


passport.serializeUser(function(user, done) {
    done(null,user)
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(new FacebookStrategy({
    // clientID: '709032063771348',
    // clientSecret: 'f25a6bd356b1bac57d35241d53d3be88',


    clientID: '724361018748142',
    clientSecret: 'a6205e14a642317448b30cd4b155afd6',

    // passReqToCallback : true,
    callbackURL: "http://localhost:3000/test/callback",
    profileFields:['id','displayName','name','emails','gender','picture.type(large)']
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //     console.log(user);
    //     return cb(err, user);

    // });

    console.log(profile);
    return cb(null,profile)
  }
));