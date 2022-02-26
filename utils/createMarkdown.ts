/**
 * Create markdown from data
 * @param data The data you want to use to create markdown
 * @returns Markdown string
 */
export const createMarkdown = ({title, description, installation}): String => {
  return `# ${title}
  # ${description}
  # ${installation}
  `;
};
