//Exports the Production version of the keys which are already setup in Heroku server.

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI : process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
}