import { BIRTHDAYS } from "./birthdays";

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
  await wait(1000);
  const birthday = BIRTHDAYS[(Math.random() * BIRTHDAYS.length) | 0];
  ROOT.innerHTML = format(birthday);
  await wait(4000);
  render();
};

render();
