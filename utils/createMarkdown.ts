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
  screenshots: boolean;
}

/**
 * Generate markdown for installation instructions
 * @param template The language template to use for creating instructions
 * @returns Installation instruction markdown
 */
const createInstallationMarkdown = (template: string) => {
  if (template === "JavaScript") return javaScriptInstallation;
  if (template === "Python") return pythonInstallation;
  if (template === "Maven") return mavenInstallation;
  if (template === "Gradle") return gradleInstallation;
  else return "Other";
};

const createScreenshotMarkdown = () => {
  return `
  ## Screenshots
  ![Coming Soon](https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png "Coming Soon")
  `;
};

const createLicenseMarkdown = (licenseType: string) => {
  if (licenseType === "Mit") {
    return `
  ## License
  This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
  `;
  } else if (licenseType === "Other") {
    return `
    ## License
    This project is licensed under the Other License - see the [LICENSE.md](LICENSE.md) file for details
    `;
  } else {
    return ``;
  }
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
  screenshots,
}: markdownData): String => {
  return `# ${title}
---
# ${description}
---
## Installation
${createInstallationMarkdown(installation)}
---
${screenshots ? createScreenshotMarkdown() : ``}
`;
};
