import { readFile } from "node:fs/promises";

const css = await readFile("app/globals.css", "utf8");
if (!css.includes("--text-muted: #6B736E;")) throw new Error("muted text must meet contrast requirements on white");

console.log("Contrast guard passed.");
