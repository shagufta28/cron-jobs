const Webhook = require('../models/Webhook');

exports.receiveWebhook = async (req, res) => {
  try {
    const webhook = new Webhook({ data: req.body });
    await webhook.save();
    res.status(201).json({ message: 'Webhook received', webhook });
  } catch (error) {
    res.status(500).json({ message: 'Error storing webhook', error });
  }
};

exports.getAllWebhooks = async (req, res) => {
  try {
    const webhooks = await Webhook.find();
    res.status(200).json(webhooks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving webhooks', error });
  }
};
