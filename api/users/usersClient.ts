import { authInstance } from "../instances/authInstance";
import { baseInstance } from "../instances/baseInstance";

const COMMON_PATH = "/users";

export type UserData = {
  userName: string;
  password: string;
  passwordConfirmation?: string;
  email?: string;
};

export const getAllUsers = async () => {
  const { data } = await authInstance.get(COMMON_PATH);
  return data;
};

export const postUser = async (userData: UserData) => {
  await baseInstance.post(COMMON_PATH, userData);
};

export const login = async (userData: UserData): Promise<string> => {
  const { data } = await baseInstance.post(COMMON_PATH + "/login", userData);
  return data;
};
