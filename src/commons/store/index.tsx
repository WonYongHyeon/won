import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
export const AccessToken = atom({
  key: "accessToken" + uuidv4(),
  default: "",
});
