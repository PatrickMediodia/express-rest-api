const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedTo: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// export mongoose.model so that importing it would directly allow to use the model
module.exports = mongoose.model('Subscriber', subscriberSchema)