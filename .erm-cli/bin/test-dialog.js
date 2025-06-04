import dialog from 'node-file-dialog';

const result = await dialog({ type: 'open-file' });
console.log('Result:', result);
