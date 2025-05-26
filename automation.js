// cronJob.js
import { schedule } from "node-cron";
import { DateTime } from "luxon";
import { addToActiveCampaign2, addToActiveCampaign3 } from "./controller.js";

// Runs every day at 8:00 PM Bangladesh time (Asia/Dhaka)
schedule(
  "10 20 * * *",
  async () => {
    const bdTime = DateTime.now().setZone("Asia/Dhaka").toISO();
    console.log(`🕗 Cron triggered at BD time: ${bdTime}`);

    try {
      await addToActiveCampaign2();
      await addToActiveCampaign3();
      console.log("✅ All scheduled tasks completed.");
    } catch (error) {
      console.error("❌ Cron task failed:", error.message);
    }
  },
  {
    timezone: "Asia/Dhaka",
  }
);
