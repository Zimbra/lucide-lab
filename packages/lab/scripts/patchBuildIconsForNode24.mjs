import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageDirectory = path.dirname(require.resolve('@lucide/build-icons/package.json'));
const loaders = ['getAliases.mjs', 'getIconMetaData.mjs'];

for (const loader of loaders) {
  const filePath = path.join(packageDirectory, 'utils', loader);
  const contents = fs.readFileSync(filePath, 'utf8');
  const updatedContents = contents.replace('{ assert: { type: \'json\' } }', '{ with: { type: \'json\' } }');

  if (updatedContents !== contents) {
    fs.writeFileSync(filePath, updatedContents);
  }
}