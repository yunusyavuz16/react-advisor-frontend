import { API_URLS } from "../constants/api-url";
import { Chat } from "../types";
import { ChatHistory } from "../types/chat-api";
import { ApiRequest } from "./api";

export const getChats = async (page = 1, perPage = 10) => {
  const url = `${API_URLS.HISTORY}?page=${page}&per_page=${perPage}`;

  const response = await ApiRequest<ChatHistory>(url, "GET");

  if (response.isSuccessful) {
    return response.data.messages;
  } else {
    console.log("Error in getChats", response);
    return [] as Chat[];
  }
};
