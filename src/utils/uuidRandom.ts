import { extname } from 'path';
import { v4 as uuid } from 'uuid';

export default (file): string => {
  const uuidPath: string = `${uuid()}${extname(file.originalname)}`;
  console.log(uuidPath);
  return uuidPath;
}