interface markdownData {
  title: string;
  description: string;
  installation: string;
}

const javaScriptInstallation = `1. Install dependencies in main project folder
\`\`\`
npm install
\`\`\`
`;

/**
 * Create markdown from data
 * @param data The data you want to use to create markdown
 * @returns Markdown string
 */
export const createMarkdown = ({
  title,
  description,
  installation,
}: markdownData): String => {
  return `# ${title}
  # ${description}
  ## Installation
  ${javaScriptInstallation}
  `;
};
