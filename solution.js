#!/usr/bin/env node

/*
  CodeCare Basic Coding Skill Challenge
 
  Task: Read stdin line by line, print only lines where
        at least one character appears exactly 2 times.
 
  Author: Vlad
 */

const readline = require("readline"); // built-in Node.js module for reading lines

// Create an interface that reads from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false, // disable interactive mode — we're piping data, not typing
});

//Checks if a line contains any character that appears exactly 2 times.
function hasCharWithExactlyTwoOccurrences(line) {
  // Step 1: count how many times each character appears
  const freq = {}; // { 'a': 2, 's': 1, 'd': 1 }

  for (const char of line) {
    if (char === " ") continue; // skip spaces (optional, depends on spec)
    freq[char] = (freq[char] || 0) + 1; // increment count, start from 0 if not seen yet
  }

  // Step 2: check if ANY character has count === 2
  return Object.values(freq).some((count) => count === 2);
}

// Process each line as it arrives from stdin
rl.on("line", (line) => {
  if (hasCharWithExactlyTwoOccurrences(line)) {
    console.log(line);
  }
});
