const express = require('express');
const router = express.Router();
const { receiveWebhook, getAllWebhooks } = require('../controllers/webhookController');

/**
 * @swagger
 * tags:
 *   name: Webhooks
 *   description: Operations for webhooks
 */

/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Receive a new webhook
 *     tags: [Webhooks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event:
 *                 type: string
 *               data:
 *                 type: object
 *     responses:
 *       201:
 *         description: Webhook received successfully
 *       500:
 *         description: Error storing webhook
 */
router.post('/', receiveWebhook);

/**
 * @swagger
 * /webhook:
 *   get:
 *     summary: Retrieve all received webhooks
 *     tags: [Webhooks]
 *     responses:
 *       200:
 *         description: A list of webhooks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   event:
 *                     type: string
 *                   data:
 *                     type: object
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error retrieving webhooks
 */
router.get('/', getAllWebhooks);

module.exports = router;
