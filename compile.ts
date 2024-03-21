import path from "path";
import { spawn } from "promisify-child-process";

let doneCompile = false;

export const compile = async () => {
  if (process.env.ENV === "prod" && doneCompile) {
    return;
  }
  await spawn(
    "bun",
    ["build", "./client/index.tsx", "--outfile=./static/bundle.js"],
    { cwd: process.cwd() }
  );
  doneCompile = true;
  console.log("done compile!");
};
