#!/usr/bin/env node

const {execSync} = require("child_process"); // для запуску shell-команд
const path = require("path");

// Sample із PDF завдання
const INPUT = `asdf
fdas
asds
d fm
dfaa
aaaa
aabb
aaabb`;

const EXPECTED_OUTPUT = `asds
dfaa
aabb
aaabb`;

const solutionPath = path.join(__dirname, "solution.js");

let actualOutput;
try {
  actualOutput = execSync(`node "${solutionPath}"`, {
    input: INPUT,
    encoding: "utf-8",
  }).trim();
} catch (err) {
  console.error("❌ Помилка при запуску solution.js:", err.message);
  process.exit(1);
}

if (actualOutput === EXPECTED_OUTPUT.trim()) {
  console.log("✅ Тест пройдено! Output співпадає з еталоном.\n");
  console.log("--- Output ---");
  console.log(actualOutput);
} else {
  console.log("❌ Тест НЕ пройдено!\n");
  console.log("--- Очікувалось ---");
  console.log(EXPECTED_OUTPUT);
  console.log("\n--- Отримано ---");
  console.log(actualOutput);
  process.exit(1);
}
