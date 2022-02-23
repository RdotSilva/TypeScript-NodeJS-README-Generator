/**
 * Create markdown from data
 * @param data The data you want to use to create markdown
 * @returns Markdown string
 */
export const createMarkdown = (data: String): String => {
  return `# ${data}`;
};
