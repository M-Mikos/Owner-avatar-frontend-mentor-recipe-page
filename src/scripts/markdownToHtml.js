import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(gfm)
    .process(markdown);
  return result.toString();
}
