"use server";

export const analyse = async () => {
  const url = "https://api.seiki.co/v1/poi/analysis";
  const apiKey =
    "s8gR0oFyGB21ejrOq1zhADbzuFJYJPc_rvG9tyV_jduSKocjm8hab8EmmUZ6vX8mtxhtjKQ6OrXzCR_Kiv2oqygpUJ5UcBsmHZVnn7pBGlxzv4Ay50gHVfr6tWbHbBLpI5mz_Q";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const analyseFilter = async (filtres: any) => {
  const url =
    "https://api.seiki.co/v1/poi/analysis?" +
    new URLSearchParams({
      id: filtres.id,
      ...(filtres.kpi !== "" && { kpi: filtres.kpi }),
    }).toString();
  console.log("url", url);
  const apiKey =
    "s8gR0oFyGB21ejrOq1zhADbzuFJYJPc_rvG9tyV_jduSKocjm8hab8EmmUZ6vX8mtxhtjKQ6OrXzCR_Kiv2oqygpUJ5UcBsmHZVnn7pBGlxzv4Ay50gHVfr6tWbHbBLpI5mz_Q";

  const bodyData = {
    ...(filtres.age !== "" && { age: filtres.age }),
    ...(filtres.gender !== "" && { gender: filtres.gender }),
    ...(filtres.hour && filtres.hour.length > 0 && { hour: filtres.hour }),
    ...(filtres.week !== "" && { week: filtres.week }),
    ...(filtres.dayType !== "" && { day_type: filtres.dayType }),
    ...(filtres.mode !== "" && { mode: filtres.mode }),
    ...(filtres.purpose !== "" && { trip_purpose: filtres.purpose }),
  };
  console.log("bodyData", JSON.stringify(bodyData));
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
      body: JSON.stringify(bodyData),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};
