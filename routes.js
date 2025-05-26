import express from "express";
import {
  addToActiveCampaign2,
  addToActiveCampaign3,
  addToActiveCampaign4,
  createTag,
  getTags,
  getTags2,
  getTags3,
} from "./controller.js";

const router = express.Router();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Get Response
 *     responses:
 *       200:
 *         description: Server is okay
 */
router.get("/", (req, res) => {
  res.send("Respone send");
});

/**
 * @swagger
 * /add-active-camp2/:
 *   post:
 *     summary: Send Data
 *     responses:
 *       200:
 *         description: Send Data from webinarjam to ActiveCampagian
 */
router.post("/add-active-camp2", addToActiveCampaign2);

/**
 * @swagger
 * /add-active-camp3/:
 *   post:
 *     summary: Send Data
 *     responses:
 *       200:
 *         description: Send Data from webinarjam to ActiveCampagian
 */
router.post("/add-active-camp3", addToActiveCampaign3);
router.post("/add-active-camp4", addToActiveCampaign4);

/**
 * @swagger
 * /create-tag/:
 *   post:
 *     summary: Create A Tag
 *     responses:
 *       200:
 *         description: Create a tag in ActiveCampagian
 */
router.post("/create-tag", createTag);
/**
 * @swagger
 * /get-tags/:
 *   get:
 *     summary: Get All Tags
 *     responses:
 *       200:
 *         description: Tags Information
 */
router.get("/get-tags", getTags);

/**
 * @swagger
 * /get-tags2/:
 *   get:
 *     summary: Get All Tags
 *     responses:
 *       200:
 *         description: Tags Information
 */
router.get("/get-tags2", getTags2);
/**
 * @swagger
 * /get-tags3/:
 *   get:
 *     summary: Get All Tags
 *     responses:
 *       200:
 *         description: Tags Information
 */
router.get("/get-tags3", getTags3);
export default router;
