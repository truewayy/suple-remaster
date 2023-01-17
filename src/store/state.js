import { atom } from "recoil";

export const partState = atom({
  key: "partState",
  default: "all",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: undefined,
});
