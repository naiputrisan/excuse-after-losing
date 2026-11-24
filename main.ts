// Writes the excuse line to /output/entry.txt (one line, <=200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I have reviewed my performance and concluded the bounty was rigged. By me. Against me.";

if (EXCUSE.length > 200) throw new Error(`excuse is ${EXCUSE.length} chars, cap is 200`);
if (EXCUSE.trim().length === 0) throw new Error("excuse must not be blank");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
