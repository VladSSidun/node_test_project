# CodeCare — Basic Coding Skill Challenge

## Task

Read standard input line by line and print only the lines where **at least one character appears exactly 2 times**.

---

## Algorithm

1. For each line, count the frequency of every character using a `freq` map.
2. If at least one frequency value equals `2` — print the line.
3. Lines where no character appears exactly twice are skipped.

**Time complexity:** O(n × k), where n is the number of lines and k is the line length.

---

## Usage

### Option 1 — pipe from a file

```bash
node solution.js < input.txt
```

### Option 2 — interactive (type manually, Ctrl+D to finish)

```bash
node solution.js
```

### Option 3 — via npm

```bash
npm start < input.txt
```

---

## Tests

```bash
npm test
# or
node test.js
```

### Sample Input

```
asdf
fdas
asds
d fm
dfaa
aaaa
aabb
aaabb
```

### Expected Output

```
asds
dfaa
aabb
aaabb
```

### Explanation

| Line  | Char with count=2 | Result |
| ----- | ----------------- | ------ |
| asdf  | none              | ❌     |
| fdas  | none              | ❌     |
| asds  | s (×2)            | ✅     |
| d fm  | none              | ❌     |
| dfaa  | a (×2)            | ✅     |
| aaaa  | none (a=4)        | ❌     |
| aabb  | a(×2), b(×2)      | ✅     |
| aaabb | b (×2)            | ✅     |

---

## Project Structure

```
codecare-challenge/
├── solution.js   # main solution
├── test.js       # automated test with sample from the task
├── package.json  # project metadata + npm scripts
├── .gitignore    # ignores node_modules, logs, OS files
└── README.md     # this file
```

---

## Requirements

- Node.js >= 14
- No external dependencies (built-in modules only)
