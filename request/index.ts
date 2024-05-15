import { API_BASE_URL } from "@/config/serverApiConfig";
import { searchOptionsType, keyOptionsType, keyIdType } from "@/types";

export const request = {
  search: async ({ options = {} }: { options: searchOptionsType }) => {
    try {
      let query = "&";
      for (let key in options) {
        query += key + "=" + options[key as keyOptionsType] + "&";
      }
      query = query.slice(0, -1);

      const response = await fetch(
        `${API_BASE_URL}?apikey=${process.env.NEXT_PUBLIC_API_KEY}${query}`
      );

      const data = await response.json();

      if (data.Response === "True") return { success: true, result: data };
      else
        return {
          success: true,
          result: {
            Search: [],
            totalResults: 0,
          },
        };
    } catch (error) {
      return { success: false, result: null };
    }
  },
  getById: async ({ options }: { options: { i: string } }) => {
    try {
      let query = "&";
      for (let key in options) {
        query += key + "=" + options[key as keyIdType] + "&";
      }
      query = query.slice(0, -1);

      const response = await fetch(
        `${API_BASE_URL}?apikey=${process.env.NEXT_PUBLIC_API_KEY}${query}`
      );

      const data = await response.json();

      if (data.Response === "True") return { success: true, result: data };
      else
        return {
          success: true,
          result: null,
        };
    } catch (error) {
      return { success: false, result: null };
    }
  },
};
