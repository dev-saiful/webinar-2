import axios from "axios";

// https://api.webinarjam.com/webinarjam/registrants
// https://api.webinarjam.com/webinarjam/webinar

const getWebinar = async () => {
  try {
    const WB_API_KEY = "986cd1e8-7f7e-41f6-a744-148d59c9e8eb";
    const WEBINAR_ID = "2";
    const API_URL = "https://api.webinarjam.com/webinarjam/webinar";
    const response = await axios.post(API_URL, null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        api_key: WB_API_KEY,
        webinar_id: WEBINAR_ID,
      },
    });
    // console.log(response.data);
    const schedules = response.data.webinar.schedules;
    if (schedules.length > 0) {
      // console.log(schedules[0]);
      const schedule = schedules[0];
      return schedule;
    }
  } catch (error) {
    console.log("WebinarJam error:", error.response?.data || error.message);
  }
};

const getRegistrants = async () => {
  try {
    const WB_API_KEY = "9e941b07-cf6c-42c6-af10-8d832a1b7818";
    const WEBINAR_ID = "9";
    const BASE_URL = "https://api.webinarjam.com/webinarjam/registrants";
    const DATE_RANGE = 1;
    const ATTENDED_LIVE = 1; // 0 means Registrants, 1 means Attendees

    // Fetch the first page to get pagination info
    let response = await axios.post(BASE_URL, null, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        api_key: WB_API_KEY,
        webinar_id: WEBINAR_ID,
        attended_live: ATTENDED_LIVE,
        date_range: DATE_RANGE,
      },
    });

    let allRegistrants = [];
    const { data: firstPageData, last_page } = response.data.registrants;

    // Add registrants from the first page
    allRegistrants.push(
      ...firstPageData.map((user) => ({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
      }))
    );

    // Fetch from remaining pages if any
    for (let page = 2; page <= last_page; page++) {
      const pageResponse = await axios.post(`${BASE_URL}?page=${page}`, null, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        params: {
          api_key: WB_API_KEY,
          webinar_id: WEBINAR_ID,
          attended_live: ATTENDED_LIVE,
          date_range: DATE_RANGE,
        },
      });

      const pageData = pageResponse.data.registrants.data;
      allRegistrants.push(
        ...pageData.map((user) => ({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          email: user.email,
        }))
      );
    }
    console.log(allRegistrants);
    return allRegistrants;
  } catch (error) {
    console.error("WebinarJam error:", error.response?.data || error.message);
    return [];
  }
};

export { getRegistrants, getWebinar };
