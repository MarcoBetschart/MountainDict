const {Schema, model} = require('mongoose')

const MountainItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

const MountainItem = model('mountainListItem', MountainItemSchema)

module.exports = MountainItem