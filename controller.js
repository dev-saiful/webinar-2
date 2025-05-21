import axios from "axios";
// https://api.webinarjam.com/webinarjam/registrants
// https://api.webinarjam.com/webinarjam/webinar
const getWebinar = async () => {
  try {
    const WB_API_KEY = "986cd1e8-7f7e-41f6-a744-148d59c9e8eb";
    const EVENT_ID = "42";
    const API_URL = "https://api.webinarjam.com/webinarjam/registrants";
    const response = await axios.post(API_URL, null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        api_key: WB_API_KEY,
        webinar_id: EVENT_ID,
      },
    });
    const registrants = response.data.registrants.data;
    // Extract required fields only
    const cleanRegistrants = registrants.map((user) => ({
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      email: user.email,
    }));
    console.log(cleanRegistrants.length);
    return cleanRegistrants;
  } catch (error) {
    console.log("WebinarJam error:", error.response?.data || error.message);
    return [];
  }
};

const addToActiveCampaign = async (req, res) => {
  try {
    const contacts = await getWebinar();
    // console.log(contacts);
    // // console.log(contacts[0]);
    // const contact = {
    //   email: contacts[1].email,
    //   firstName: contacts[1].name,
    // };
    // const { email, firstName, lastName } = req.body;
    // const { email, name } = req.body;
    const AC_API_KEY =
      "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
    const AC_API_URL =
      "https://oebic1747111734.api-us1.com/api/3/import/bulk_import";

    const response = await axios.post(
      AC_API_URL,
      {
        // contact: {
        //   email,
        //   firstName: name,
        // },
        contacts,
      },
      {
        headers: {
          "Api-Token": AC_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log("ActiveCamp error:", error.response?.data || error.message);
    res.json(error.message);
  }
};

const addToActiveCampaign2 = async (req, res) => {
  try {
     const AC_API_KEY =
      "d0fcf31b4bc0f1c0f52f1cbf188487a1565dbb1781c9cdaf70e66adeb875a74ad4ab8ae8";
    const AC_API_URL =
      "https://oebic1747111734.api-us1.com/api/3/contacts";
    // const AC_API_KEY =
    //   "24365954107d07deab71b287cba7becc06d034d56cb3eb93b9cd53e6a06e982148e978fdz";
    // const AC_API_URL =
    //   "https://dugreenetdulove.activehosted.com/api/3/contacts";
    // const contacts = await getWebinar();
    // console.log(contacts[0]);
    const { email, firstName, lastName } = req.body;
    const contact = {
      email:email,
      first_name:firstName,
      last_name:lastName,
    };

    const response = await axios.post(
      AC_API_URL,
      {
        contact,
        // contacts,
      },
      {
        headers: {
          "Api-Token": AC_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
     console.log("ActiveCamp error:", error.response?.data || error.message);
    res.json(error.message);
  }
};

export { addToActiveCampaign, addToActiveCampaign2 };
