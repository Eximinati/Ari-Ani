
const mongoose = require("mongoose");

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const economySchema = new mongoose.Schema({
  userId: String ,

  wallet: { 
    type: Number,
    default: 100, 
    max: 9007199254740991 
  },

  bank: { 
    type: Number, 
    default: 50, 
    max: 9007199254740991 
  },
  items: [
    { 
      itemName: String, 
      description: String, 
      price: Number, 
      number: Number 
    }
  ],
  protected: { 
    type: String, 
    default: 'none' },
  inventory: [
    {
      name: { type: String},
      description: { type: String },
      price: { type: Number},
      number: { type: Number}
    }
  ],
  lastDaily: { 
    type: Date, 
    default: null 
  },
  lastBegTime: { 
    type: Date, 
    default: null 
  },
  lastWork: { 
    type: Date, 
    default: null 
  }
});


economySchema.pre("save", function (next) {
  if (this.wallet < 0) {
    this.wallet = 0;
  }
  if (this.bank < 0) {
    this.bank = 0;
  }
  next();
});

const Economy = mongoose.model('Economy', economySchema);
module.exports = Economy;
