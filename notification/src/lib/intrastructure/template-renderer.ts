import path from "path";
import fs from "fs";
import handlebar from "handlebars";
import { rootPath } from "@/path-helper";

export abstract class TemplateRender {
  abstract render(templateName: string, data: any): Promise<string>;
}

export class HandleBarTemplateRender implements TemplateRender {
  async render(templateName: string, data: any): Promise<string> {
    const templatePath = path.join(rootPath, "template", `${templateName}.hbs`);
    const templateContent = fs.promises.readFile(templatePath);
    const template = handlebar.compile(templateContent);
    return await template(data);
  }
}
