import path from "path";
import fs from "fs";
import handlebar from "handlebars";
// import { rootPath } from "@/path-helper";
import { rootPath } from "../../path-helper";

export abstract class TemplateRender {
  abstract render(templateName: string, data: any): Promise<string>;
}

export class HandleBarTemplateRender implements TemplateRender {
  async render(templateName: string, data: any): Promise<string> {
    const templatePath = path.join(
      rootPath,
      "src",
      "templates",
      `${templateName}.hbs`
    );
    const templateContent = (await fs.promises.readFile(templatePath)).toString();
    const template = handlebar.compile(templateContent);
    return await template(data);
  }
}
