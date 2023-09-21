import { NextRequest } from "next/server";

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import axios from "axios";
import {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const fakeDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getStrTimestamp = () => Math.floor(Date.now() / 1000).toString();

export const capitalizeSentence = (sentence: string) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getClientIp = (request: NextRequest) => {
  let ip: string | null;

  ip = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? null;
  }

  return ip;
};

export const makeHttpRequest = async ({ ...args }: AxiosRequestConfig) => {
  try {
    const response: AxiosResponse = await axios(args);
    return response.data;
  } catch (error: any) {
    const axiosError: AxiosError = error;
    if (axiosError.response) {
      console.error("Axios Error:", axiosError.message);
      throw new Error("Something went wrong, please try again.");
    } else if (axiosError.request) {
      console.error("Request Error:", axiosError.request);
      throw new Error("Request timeout, please try again.");
    } else {
      console.error("Server Error:", axiosError.message);
      throw new Error("Something went wrong, please try again.");
    }
  }
};
