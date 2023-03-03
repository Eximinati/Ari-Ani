const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
    unique: true,
  },
  enabled: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Group", groupSchema);
