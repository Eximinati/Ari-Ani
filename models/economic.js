const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const economySchema = new mongoose.Schema({
  userId: String,
  wallet: { type: Number, default: 100, max: 9007199254740991},
  bank: { type: Number, default: 50, max: 9007199254740991 },
  items: [{ itemName: String, description: String, price: Number, number: Number }],
  protected: { type: String, default: 'none' },
  inventory: [{
    name: { type: String},
    description: { type: String },
    price: { type: Number},
    number: { type: Number}
  }],
  lastDaily: { type: Date, default: null },
  lastBegTime: { type: Date, default: null }
});

const Economy = mongoose.model('Economy', economySchema);
module.exports = Economy