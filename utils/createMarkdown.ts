import { javaScriptInstallation } from "./../templates/installation";

interface markdownData {
  title: string;
  description: string;
  installation: string;
}

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
  ${installation === "JavaScript" ? javaScriptInstallation : "Other"}
  `;
};
