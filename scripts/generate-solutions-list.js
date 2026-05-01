import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOLUTIONS_DIR = path.join(__dirname, '..', 'leetcode-solutions');
const README_FILE = path.join(SOLUTIONS_DIR, 'README.md');
const LIST_FILE = path.join(SOLUTIONS_DIR, 'solutions-list.md');

function parseSolution(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const titleMatch = content.match(/^\s*\*\s*(\d+)\.\s+(.+)$/m);
  const urlMatch = content.match(/https:\/\/leetcode\.com\/problems\/[^\s*]+/);
  const difficultyMatch = content.match(/Difficulty:\s*(Easy|Medium|Hard)/);

  const numberFromFile = fileName.match(/^(\d{4})/)?.[1];

  return {
    number: titleMatch?.[1] || numberFromFile?.replace(/^0+/, '') || '?',
    title: titleMatch?.[2]?.trim() || fileName.replace(/^\d+-/, '').replace(/\.js$/, ''),
    url: urlMatch?.[0] || '',
    difficulty: difficultyMatch?.[1] || 'Unknown',
    file: fileName,
  };
}

function generateReadme(solutions) {
  const counts = solutions.reduce((acc, s) => {
    acc[s.difficulty] = (acc[s.difficulty] || 0) + 1;
    return acc;
  }, {});

  const lines = [];
  lines.push('# LeetCode Solutions');
  lines.push('');
  lines.push('Solutions cloned from [JoshCrozier/leetcode-javascript](https://github.com/JoshCrozier/leetcode-javascript).');
  lines.push('');
  lines.push(`**Total:** ${solutions.length} solutions`);
  lines.push('');
  lines.push('**By difficulty:**');
  lines.push(`- Easy: ${counts.Easy || 0}`);
  lines.push(`- Medium: ${counts.Medium || 0}`);
  lines.push(`- Hard: ${counts.Hard || 0}`);
  if (counts.Unknown) lines.push(`- Unknown: ${counts.Unknown}`);
  lines.push('');
  lines.push('## Solutions');
  lines.push('');
  lines.push('| # | Title | Difficulty | File |');
  lines.push('|---|-------|------------|------|');

  for (const s of solutions) {
    const titleCell = s.url ? `[${s.title}](${s.url})` : s.title;
    lines.push(`| ${s.number} | ${titleCell} | ${s.difficulty} | [${s.file}](./${s.file}) |`);
  }

  lines.push('');
  return lines.join('\n');
}

function generateList(files) {
  const lines = [];
  for (const file of files) {
    lines.push(file);
  }
  lines.push('');
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(SOLUTIONS_DIR)) {
    console.error(`Solutions directory not found: ${SOLUTIONS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(SOLUTIONS_DIR)
    .filter(f => f.endsWith('.js'))
    .sort();

  console.log(`Found ${files.length} solution files`);

  const solutions = files.map(file => {
    const filePath = path.join(SOLUTIONS_DIR, file);
    return parseSolution(filePath, file);
  });

  solutions.sort((a, b) => {
    const numA = parseInt(a.number, 10) || 0;
    const numB = parseInt(b.number, 10) || 0;
    return numA - numB;
  });

  fs.writeFileSync(README_FILE, generateReadme(solutions));
  console.log(`Wrote ${README_FILE}`);

  const sortedFiles = solutions.map(s => s.file);
  fs.writeFileSync(LIST_FILE, generateList(sortedFiles));
  console.log(`Wrote ${LIST_FILE}`);
}

main();
