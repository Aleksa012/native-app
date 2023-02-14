import axios from "axios";
import { REACT_APP_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authInstance = axios.create({
  baseURL: REACT_APP_URL,
});

authInstance.interceptors.request.use(async (config) => {
  if (!config.headers) return config;
  config.headers["Authorization"] = `Bearer ${await AsyncStorage.getItem(
    "authToken"
  )}`;
  return config;
});
