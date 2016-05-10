var format = require('util').format
var chalk = require('chalk')

module.exports = function(broker) {
    return function(user, cb) {

        // Pretend we'd really saved something
        console.log(chalk.magenta('Sending mail:'), user.username)

        // Simulate errors and success
        switch (Math.floor(Math.random() * 10)) {
            case 5: {
                var err = new Error('Connection Timeout')
                err.recoverable = true
                return cb(err)
            }
            case 7: {
                var err = new Error('Wrong mail address')
                err.recoverable = false
                return cb(err)
            }
            default: {
                setTimeout(cb, 50000)
            }
        }
    }
}
