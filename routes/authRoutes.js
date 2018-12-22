const passport = require('passport');

module.exports = (app) => {
    //A request to this route redirects to google server and asks for google userID and password
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //A request to this route sends the user to the homescreen upon successful login
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req,res)=>{
            res.redirect('/home');
        });

    //This route logs out the user and deletes his stores cookies on the browser
    app.get('/api/logout',(req, res) => {
        req.logout();
        res.redirect('/');
    });

    //This route sends the currently logged in user's cookie information if there is someone logged in or sends an empty message
    //This is handled in the front end of the application to show logged in and logged out screen accordingly
    app.get('/api/current_user', (req, res)=>{
        //res.send(req.session);
        res.send(req.user);
    })
};