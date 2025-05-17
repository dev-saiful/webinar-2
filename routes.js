import express from "express";
import { addToActiveCampaign,addToActiveCampaign2,getWebinar } from "./controller.js";

const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Respone send")
});

// router.post("/get-webinar",getWebinar);
router.post("/add-active-camp",addToActiveCampaign);
router.post("/add-active-camp2",addToActiveCampaign2);



export default router;