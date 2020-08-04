import path from 'path';
import fs from 'fs';

export function retrieveJsonContent(fileName: string): string {
  const contentDirectory = path.join(process.cwd(), 'public/content');
  const filePath = path.join(contentDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}
