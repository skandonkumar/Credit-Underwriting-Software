//exports the development or production version of the keys based on NODE_ENV is a default environment variable which recognizes the environment


if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}
else{
    module.exports = require('./dev');
}