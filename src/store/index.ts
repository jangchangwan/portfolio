import { atom } from "recoil";

const testType = atom<string>({
  key: "test1",
  default: "",
});

export { testType };
