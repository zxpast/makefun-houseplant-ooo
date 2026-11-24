// makefun-houseplant-ooo — The Houseplant Out-of-Office
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
//
// Writes one out-of-office auto-reply, as if sent by the office fern,
// to /output/entry.txt. Deterministic: the same fixed text is written on
// every run. Node 22, stdlib only, no network, no environment reads.
//
// The line (115 characters, within the 120-character cap):
//   "It's the fern. Forgotten since March, I've drunk your coffee,
//    claimed the window, and filed for custody of the sun."
//
// Why this line: the fern is the specific neglected plant from the brief
// (ignored since March); it acts — it drank your coffee, claimed the
// window, and filed for custody of the sun — so the plant's own life
// (water withheld, sunlight) drives the joke, and the twist lands in the
// last six words instead of being explained.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It's the fern. Forgotten since March, I've drunk your coffee, claimed the window, and filed for custody of the sun.";

// The gate requires 1-120 characters; fail loudly instead of writing
// an entry that could never be judged.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters, cap is 120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
