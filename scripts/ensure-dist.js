const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "../packages/lab/dist");

if (!fs.existsSync(distPath)) {
  console.error("\n❌ packages/lab/dist is missing.");
  console.error("Run: npm run build\n");
  process.exit(1);
}

// Ensure dist is tracked
try {
  execSync("git ls-files --error-unmatch packages/lab/dist", { stdio: "ignore" });
} catch {
  console.error("\n❌ packages/lab/dist is not committed.");
  console.error("Run: git add packages/lab/dist\n");
  process.exit(1);
}

console.log("✅ dist exists and is tracked.");
