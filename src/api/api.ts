// create an api bussines with try catch and re-try logic that takes everything as a paramater
// api should include timeout, retries, and error handling

import axios from "axios";
import { ApiResponse } from "../types/api";

const ApiRequest = async <T>(
  url: string,
  method: string,
  body?: any,
  timeout: number = 3000,
  retries: number = 3
): Promise<ApiResponse<T>> => {
  let responseObject: ApiResponse<T> | null;
  let error: any;
  let retry = 0;

  while (retry < retries) {
    try {
      const response = await axios({
        method,
        url,
        data: body,
        timeout,
      });
      responseObject = {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        isSuccessful: true,
      };
      break;
    } catch (err) {
      error = err;
      retry++;
    }
  }

  if (error) {
    return {
      status: error.response?.status,
      statusText: error.response?.statusText,
      isSuccessful: false,
      error: JSON.stringify(error),
    };
  }

  return responseObject!;
};

export { ApiRequest };