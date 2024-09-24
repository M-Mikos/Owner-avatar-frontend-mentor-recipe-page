import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "recipes");

export default function getRecipeFileContent(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  return fileContent;
}
