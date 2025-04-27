import fs from 'fs';
// export const privateKey: string = fs.readFileSync('./private.key', 'utf8');
// export const publicKey: string = fs.readFileSync('./public.key', 'utf8');

import path from 'path';

export const privateKey: string = fs.readFileSync(path.resolve(__dirname, '../secrets/private.key'), 'utf8');
export const publicKey: string = fs.readFileSync(path.resolve(__dirname, '../secrets/public.key'), 'utf8');