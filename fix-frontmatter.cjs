const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.resolve(__dirname, "src/content/posts");

function walkDir(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walkDir(postsDir);
let fixed = 0;

for (const filePath of files) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw);
  let changed = false;

  // 1. published → pubDatetime
  if (parsed.data.published !== undefined && parsed.data.pubDatetime === undefined) {
    let dt = parsed.data.published;
    if (typeof dt === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dt)) {
      dt = dt + "T00:00:00Z";
    }
    parsed.data.pubDatetime = dt;
    delete parsed.data.published;
    changed = true;
  }

  // 2. category → merge into tags
  if (parsed.data.category !== undefined) {
    const cat = parsed.data.category;
    if (!parsed.data.tags) {
      parsed.data.tags = [cat];
    } else if (Array.isArray(parsed.data.tags)) {
      if (!parsed.data.tags.includes(cat)) {
        parsed.data.tags.push(cat);
      }
    }
    delete parsed.data.category;
    changed = true;
  }

  // 3. Add description if missing
  if (parsed.data.description === undefined) {
    parsed.data.description = parsed.data.title || "No description";
    changed = true;
  }

  if (changed) {
    const newContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, newContent, "utf-8");
    console.log("Fixed:", path.relative(postsDir, filePath));
    fixed++;
  }
}

console.log(`\nFixed ${fixed} files.`);
