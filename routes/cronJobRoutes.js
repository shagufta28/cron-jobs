const express = require('express');
const router = express.Router();
const { 
  createCronJob, 
  getAllCronJobs, 
  getCronJobById, 
  updateCronJob, 
  deleteCronJob 
} = require('../controllers/cronController.js');

/**
 * @swagger
 * tags:
 *   name: CronJobs
 *   description: CRUD operations for cron jobs
 */

/**
 * @swagger
 * /cron-jobs:
 *   post:
 *     summary: Create a new cron job
 *     tags: [CronJobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               triggerUrl:
 *                 type: string
 *               apiKey:
 *                 type: string
 *               schedule:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Cron job created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createCronJob);

/**
 * @swagger
 * /cron-jobs:
 *   get:
 *     summary: Retrieve all cron jobs
 *     tags: [CronJobs]
 *     responses:
 *       200:
 *         description: A list of cron jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   triggerUrl:
 *                     type: string
 *                   apiKey:
 *                     type: string
 *                   schedule:
 *                     type: string
 *                   startDate:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */
router.get('/', getAllCronJobs);

/**
 * @swagger
 * /cron-jobs/{id}:
 *   get:
 *     summary: Retrieve a single cron job by ID
 *     tags: [CronJobs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cron job to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single cron job
 *       404:
 *         description: Cron job not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getCronJobById);

/**
 * @swagger
 * /cron-jobs/{id}:
 *   patch:
 *     summary: Update a cron job by ID
 *     tags: [CronJobs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cron job to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               triggerUrl:
 *                 type: string
 *               apiKey:
 *                 type: string
 *               schedule:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Cron job updated successfully
 *       404:
 *         description: Cron job not found
 *       500:
 *         description: Server error
 */
router.patch('/:id', updateCronJob);

/**
 * @swagger
 * /cron-jobs/{id}:
 *   delete:
 *     summary: Delete a cron job by ID
 *     tags: [CronJobs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cron job to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cron job deleted successfully
 *       404:
 *         description: Cron job not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteCronJob);

module.exports = router;
