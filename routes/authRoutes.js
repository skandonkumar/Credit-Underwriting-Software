const passport = require('passport');

module.exports = (app) => {
    app.post('/login', passport.authenticate('local',{ failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');})

    app.get('/',(req, res) =>{
        res.send({hi:'there'});
    });

    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req,res)=>{
        res.send(req.user);
    })
}