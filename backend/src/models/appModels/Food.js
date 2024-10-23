const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    default: 0,
  },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Food', schema);
