import { configure } from "queryparams";
import { BIRTHDAYS } from "./birthdays";

const { params } = configure({
  negative: 1000,
  positive: 4000,
});

const ROOT = document.getElementById("root");
const YEAR = new Date().getFullYear();

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const format = (birthday: typeof BIRTHDAYS[number]) => {
  const name = [birthday.first, birthday.last].filter(Boolean).join(" ");
  const year = birthday.birthday.split("-")[0];
  return `${name}<br>${year}–${YEAR}`;
};

const render = async () => {
  ROOT.innerHTML = "";
  await wait(params.negative);
  const birthday = BIRTHDAYS[(Math.random() * BIRTHDAYS.length) | 0];
  ROOT.innerHTML = format(birthday);
  await wait(params.positive);
  render();
};

render();
