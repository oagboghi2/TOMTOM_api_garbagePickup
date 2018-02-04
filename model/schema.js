var mongoose = require('mongoose');

var TOMTOMSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  address: {
    type: String,
    required: 'Address cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Tom = mongoose.model('TOM', TOMTOMSchema);

module.exports = Tom;
