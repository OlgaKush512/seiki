"use server";

// export const connection = async () => {
//   const url = "https://api.seiki.co/v1/account/credits";
//   const apiKey =
//     "s8gR0oFyGB21ejrOq1zhADbzuFJYJPc_rvG9tyV_jduSKocjm8hab8EmmUZ6vX8mtxhtjKQ6OrXzCR_Kiv2oqygpUJ5UcBsmHZVnn7pBGlxzv4Ay50gHVfr6tWbHbBLpI5mz_Q";

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         key: apiKey,
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

export const analyse = async () => {
  const url = "https://api.seiki.co/v1/poi/analysis";
  const apiKey =
    "s8gR0oFyGB21ejrOq1zhADbzuFJYJPc_rvG9tyV_jduSKocjm8hab8EmmUZ6vX8mtxhtjKQ6OrXzCR_Kiv2oqygpUJ5UcBsmHZVnn7pBGlxzv4Ay50gHVfr6tWbHbBLpI5mz_Q";
  const poiId = "f91ef3e3-9be5-489b-a7bc-b1a527b60780";
  const params = {
    id: poiId,
    kpi: ["traffic.people_in_a_day.total"],
  };

  // const bodyData = {
  //   day_type: "WORKING_DAYS",
  //   gender: "MALE",
  //   hour: [8, 9, 10],
  // };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
      body: JSON.stringify({ ...params }),
    });
    const responseData = await response.json();
    // responseData.items.forEach((item) => {
    // console.log(JSON.stringify(item.data, null, 2));
    // console.log(JSON.stringify(responseData.items[1], null, 2));
    // console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};

// export const poi = async () => {
//   const url = "https://api.seiki.co/v1/poi";
//   const apiKey =
//     "s8gR0oFyGB21ejrOq1zhADbzuFJYJPc_rvG9tyV_jduSKocjm8hab8EmmUZ6vX8mtxhtjKQ6OrXzCR_Kiv2oqygpUJ5UcBsmHZVnn7pBGlxzv4Ay50gHVfr6tWbHbBLpI5mz_Q";
//   const info = { lat: 48.8751, lng: 2.3074 };
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         key: apiKey,
//       },
//       body: JSON.stringify(info),
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
