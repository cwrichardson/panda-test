import path from 'path';
import { readFile } from 'fs/promises';

export async function getLayoutData() {
  const dataFilePath = path.join(process.cwd(), 'json/sampleData.json');
  const jsonData = await readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return { ...data };
}