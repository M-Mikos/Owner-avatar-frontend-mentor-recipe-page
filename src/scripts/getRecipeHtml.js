import markdownToHtml from "./markdownToHtml.js";
import getRecipeFileContent from "./getRecipeFile.js";

export default async function getRecipeHtml(slug) {
  const fileContent = getRecipeFileContent(slug);
  const markup = await markdownToHtml(fileContent);
  return markup;
}
