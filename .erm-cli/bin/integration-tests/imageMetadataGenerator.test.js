import { describe } from 'node:test';
import sidecar from '../imageMetadataGenerator';

describe('testing sidecar', () => {
    test('generates ouput', async () => {
        const path = './image.jpg';
        const generated = await sidecar.generateSidecar(path)
        expect(generated).toEqual(true)
    });

    test('getSourcePath returns a string', async () => {
        const result = await sidecar.getSourcePath();
        expect(typeof result).toBe('string');
    }, 10000);
});