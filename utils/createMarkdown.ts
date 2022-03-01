import {
  javaScriptInstallation,
  pythonInstallation,
  mavenInstallation,
  gradleInstallation,
} from "./../templates/installation";

interface markdownData {
  title: string;
  description: string;
  installation: string;
}

const createInstallationMarkdown = (template: String) => {
  if (template === "JavaScript") return javaScriptInstallation;
  if (template === "Python") return pythonInstallation;
  if (template === "Maven") return mavenInstallation;
  if (template === "Gradle") return gradleInstallation;
  else return "Other";
};

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
  ${createInstallationMarkdown(installation)}
  `;
};
