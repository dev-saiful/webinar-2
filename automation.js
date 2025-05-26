// cronJob.js
import { schedule } from "node-cron";
import { DateTime } from "luxon";
import {
  addToActiveCampaign2,
  addToActiveCampaign3,
  addToActiveCampaign4,
} from "./controller.js";

// Runs every day at 8:00 PM Bangladesh time (Asia/Dhaka)
schedule(
  "30 21 * * *",
  async () => {
    const bdTime = DateTime.now().setZone("Asia/Dhaka").toISO();
    console.log(`🕗 Cron triggered at BD time: ${bdTime}`);

    try {
      await addToActiveCampaign3();
      console.log("✅ Campaign 4 completed");
    } catch (error) {
      console.error("❌ Campaign 4 failed:", error.message);
    }

    try {
      await addToActiveCampaign2();
      console.log("✅ Campaign 2 completed");
    } catch (error) {
      console.error("❌ Campaign 2 failed:", error.message);
    }
  },
  {
    timezone: "Asia/Dhaka",
  }
);
