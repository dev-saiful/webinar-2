import axios from "axios";
import { getRegistrants, getRegistrants3, getWebinar } from "./helper.js";

const addToActiveCampaign2 = async (req, res) => {
  try {
    const AC_API_KEY =
      "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
    const SYNC_API_URL =
      "https://oebic1747111734.api-us1.com/api/3/contact/sync";
    const TAG_API_URL = "https://oebic1747111734.api-us1.com/api/3/contactTags";
    const TAG_ID = "5"; // ✅ Replace with your actual tag ID

    const contacts = await getRegistrants();
    if (!contacts || !Array.isArray(contacts)) {
      return res.status(500).json({ message: "Invalid registrant data" });
    }

    for (const contact of contacts) {
      const { first_name, last_name, phone, email } = contact;
      if (!email) continue;

      const contactPayload = {
        contact: {
          email,
          firstName: first_name || "",
          lastName: last_name || "",
          phone: phone || "",
        },
      };

      try {
        // Step 1: Sync contact
        const syncRes = await axios.post(SYNC_API_URL, contactPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        const contactId = syncRes.data.contact?.id;
        if (!contactId) {
          console.error(`⚠️ No contact ID returned for ${email}`);
          continue;
        }

        // Step 2: Assign tag to contact
        const tagPayload = {
          contactTag: {
            contact: contactId,
            tag: TAG_ID,
          },
        };

        await axios.post(TAG_API_URL, tagPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        console.log(`✅ Tagged ${email} with tag ID ${TAG_ID}`);
      } catch (err) {
        console.error(
          `❌ Failed for ${email}:`,
          err.response?.data || err.message
        );
      }
    }

    res.json({ message: "All contacts synced and tagged." });
  } catch (error) {
    console.error("ActiveCampaign integration error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// client
const addToActiveCampaign3 = async (req, res) => {
  try {
    console.log("client");
    const AC_API_KEY =
      "24365954107d07deab71b287cba7becc06d034d56cb3eb93b9cd53e6a06e982148e978fd";
    const SYNC_API_URL =
      "https://dugreenetdulove.activehosted.com/api/3/contact/sync";
    const TAG_API_URL =
      "https://dugreenetdulove.activehosted.com/api/3/contactTags";
    const TAG_ID = "10"; // ✅ Replace with your actual tag ID

    const contacts = await getRegistrants();
    if (!contacts || !Array.isArray(contacts)) {
      return res.status(500).json({ message: "Invalid registrant data" });
    }

    for (const contact of contacts) {
      const { first_name, last_name, phone, email } = contact;
      if (!email) continue;

      const contactPayload = {
        contact: {
          email,
          firstName: first_name || "",
          lastName: last_name || "",
          phone: phone || "",
        },
      };

      try {
        // Step 1: Sync contact
        const syncRes = await axios.post(SYNC_API_URL, contactPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        const contactId = syncRes.data.contact?.id;
        if (!contactId) {
          console.error(`⚠️ No contact ID returned for ${email}`);
          continue;
        }

        // Step 2: Assign tag to contact
        const tagPayload = {
          contactTag: {
            contact: contactId,
            tag: TAG_ID,
          },
        };

        await axios.post(TAG_API_URL, tagPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        console.log(`✅ Tagged ${email} with tag ID ${TAG_ID}`);
      } catch (err) {
        console.error(
          `❌ Failed for ${email}:`,
          err.response?.data || err.message
        );
      }
    }

    res.json({ message: "All contacts synced and tagged." });
  } catch (error) {
    console.error("ActiveCampaign integration error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const addToActiveCampaign4 = async (req, res) => {
  try {
    console.log("saiful");
    const AC_API_KEY =
      "171d70d05989fc79027078314c10042ccc78eebc28d533b1d26abeb46e4f58f07ff61878";
    const SYNC_API_URL =
      "https://raddsoft1748269930.api-us1.com/api/3/contact/sync";
    const TAG_API_URL =
      "https://raddsoft1748269930.api-us1.com/api/3/contactTags";
    const TAG_ID = "1"; // ✅ Replace with your actual tag ID

    const contacts = await getRegistrants();
    if (!contacts || !Array.isArray(contacts)) {
      return res.status(500).json({ message: "Invalid registrant data" });
    }

    for (const contact of contacts) {
      const { first_name, last_name, phone, email } = contact;
      if (!email) continue;

      const contactPayload = {
        contact: {
          email,
          firstName: first_name || "",
          lastName: last_name || "",
          phone: phone || "",
        },
      };

      try {
        // Step 1: Sync contact
        const syncRes = await axios.post(SYNC_API_URL, contactPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        const contactId = syncRes.data.contact?.id;
        if (!contactId) {
          console.error(`⚠️ No contact ID returned for ${email}`);
          continue;
        }

        // Step 2: Assign tag to contact
        const tagPayload = {
          contactTag: {
            contact: contactId,
            tag: TAG_ID,
          },
        };

        await axios.post(TAG_API_URL, tagPayload, {
          headers: {
            "Api-Token": AC_API_KEY,
            "Content-Type": "application/json",
          },
        });

        console.log(`✅ Tagged ${email} with tag ID ${TAG_ID}`);
      } catch (err) {
        console.error(
          `❌ Failed for ${email}:`,
          err.response?.data || err.message
        );
      }
    }

    res.json({ message: "All contacts synced and tagged." });
  } catch (error) {
    console.error("ActiveCampaign integration error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// const addToActiveCampaign2 = async (req, res) => {
//   try {
//     const AC_API_KEY =
//       "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
//     const AC_API_URL = "https://oebic1747111734.api-us1.com/api/3/contact/sync";

//     const contacts = await getRegistrants(); // Get contacts from WebinarJam
//     // console.log(contacts);
//     if (!contacts || !Array.isArray(contacts)) {
//       return res.status(500).json({ message: "Invalid registrant data" });
//     }

//     for (const contact of contacts) {
//       const { first_name, last_name, phone, email } = contact;

//       // Skip if required fields are missing
//       if (!email) continue;

//       const contactPayload = {
//         contact: {
//           email: email,
//           firstName: first_name || "",
//           lastName: last_name || "",
//           phone: phone || "",
//         },
//       };

//       try {
//         const response = await axios.post(AC_API_URL, contactPayload, {
//           headers: {
//             "Api-Token": AC_API_KEY,
//             "Content-Type": "application/json",
//           },
//         });

//         console.log(
//           `✅ Sent to ActiveCampaign: ${email} ${phone} ${first_name} ${last_name}`
//         );
//       } catch (err) {
//         console.error(
//           `❌ Failed to send ${email}:`,
//           err.response?.data || err.message
//         );
//       }
//     }

//     res.json({ message: "All contacts processed." });
//   } catch (error) {
//     console.error("ActiveCampaign integration error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

const createTag = async (req, res) => {
  try {
    const AC_API_KEY =
      "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
    const TagsURL = "https://oebic1747111734.api-us1.com/api/3/tags";
    const tag = {
      tag: {
        tag: "Webinar-Attenedee",
        tagType: "contact",
        description: "Webinar-Attenedee Description",
      },
    };
    const resp = await axios.post(TagsURL, tag, {
      headers: {
        "Api-Token": AC_API_KEY,
        "Content-Type": "application/json",
      },
    });
    res.json(resp.data);
  } catch (error) {
    res.json(error.message);
  }
};

const getTags = async (req, res) => {
  try {
    const AC_API_KEY =
      "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
    const TagsURL = "https://oebic1747111734.api-us1.com/api/3/tags";
    const resp = await axios.get(TagsURL, {
      headers: {
        "Api-Token": AC_API_KEY,
        "Content-Type": "application/json",
      },
    });
    res.json(resp.data);
  } catch (error) {
    res.json(error.message);
  }
};

const getTags2 = async (req, res) => {
  try {
    const AC_API_KEY =
      "24365954107d07deab71b287cba7becc06d034d56cb3eb93b9cd53e6a06e982148e978fd";
    const TagsURL = "https://dugreenetdulove.activehosted.com/api/3/tags";
    const resp = await axios.get(TagsURL, {
      headers: {
        "Api-Token": AC_API_KEY,
        "Content-Type": "application/json",
      },
    });
    res.json(resp.data);
  } catch (error) {
    res.json(error.message);
  }
};

const getTags3 = async (req, res) => {
  try {
    const AC_API_KEY =
      "171d70d05989fc79027078314c10042ccc78eebc28d533b1d26abeb46e4f58f07ff61878";
    const TagsURL = "https://raddsoft1748269930.api-us1.com/api/3/tags";
    const resp = await axios.get(TagsURL, {
      headers: {
        "Api-Token": AC_API_KEY,
        "Content-Type": "application/json",
      },
    });
    res.json(resp.data);
  } catch (error) {
    res.json(error.message);
  }
};

export {
  addToActiveCampaign2,
  addToActiveCampaign3,
  createTag,
  getTags2,
  getTags,
  getTags3,
  addToActiveCampaign4,
};
