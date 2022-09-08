import { atom } from "recoil";

export const navState = atom({
  key: "navState",
  default: false,
});

export const loadState = atom({
  key: "loadState",
  default: true,
});
