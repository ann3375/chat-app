export function truncateFileName(fileName: string): string {
  if (fileName.length > 30) {
    return fileName.slice(0, 30) + '..' + fileName.slice(fileName.lastIndexOf('.'));
  }
  return fileName;
}
