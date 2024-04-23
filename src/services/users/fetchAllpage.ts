import axios from "axios";

export const BASE_URL = "https://demo2019.tapclicks.com/server/api/dash/pages";

export default async () => {
  const response = await axios.get(BASE_URL);
  return response;
};
