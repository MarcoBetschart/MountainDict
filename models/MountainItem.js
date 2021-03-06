const { Schema, model } = require('mongoose');

const MountainItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	height: {
		type: Number,
		required: true
	},
	longitude: Number,
	latitude: Number,
	officialPath: {
		type: String,
		enum: [ 'Wanderweg', 'Bergwanderweg', 'Alpiner Wanderweg', 'Kein offizieller Weg' ]
	},
	img: {
		data: String,
		contentType: String
	},
	ratings: [{
		name: String,
		rating: Number,
		description: String
	}]
});

const MountainItem = model('mountainListItem', MountainItemSchema);

module.exports = MountainItem;
