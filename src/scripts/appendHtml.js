import getRecipeHtml from "./getRecipeHtml.js";
import fs from "fs";

const indexTemplate = fs.readFileSync(
  `src/templates/template-index.html`,
  "utf8"
);
const recipeContent = await getRecipeHtml(
  "sample-recipe.md"
);

const populatedIndex = indexTemplate.replace(
  "{%RECIPE_CONTENT%}",
  recipeContent
);

fs.writeFileSync(`index.html`, populatedIndex, "utf-8");
