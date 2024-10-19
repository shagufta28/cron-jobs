const mongoose = require('mongoose');

const webhookSchema = new mongoose.Schema({
  event: { type: String },
  data: { type: mongoose.Schema.Types.Mixed }, // Store dynamic data
  createdAt: { type: Date, default: Date.now }
});

const Webhook = mongoose.model('Webhook', webhookSchema);
module.exports = Webhook;
