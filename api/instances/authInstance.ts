import axios from "axios";
import { REACT_APP_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authInstance = axios.create({
  baseURL: REACT_APP_URL,
});

const token = await AsyncStorage.getItem("authToken");

authInstance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  config.headers["Authorization"] = `Bearer ${token ? token : ""}`;
  return config;
});
