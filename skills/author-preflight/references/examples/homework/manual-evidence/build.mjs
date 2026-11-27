import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const content = await readFile(new URL('./src/message.txt', import.meta.url));
const hash = createHash('sha256').update(content).digest('hex').slice(0, 10);
const name = `message-${hash}.txt`;
const dist = new URL('./dist/', import.meta.url);
await mkdir(dist, { recursive: true });
await writeFile(new URL(name, dist), content);
console.log(`dist/${name}`);
