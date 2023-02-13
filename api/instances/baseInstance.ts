import axios from "axios";
import { REACT_APP_URL } from "@env";

export const baseInstance = axios.create({
  baseURL: REACT_APP_URL,
});
