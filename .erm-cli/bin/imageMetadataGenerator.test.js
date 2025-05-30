import { describe } from 'node:test';
import sidecar from './sidecarGenerator';

describe('testing sidecar', () => {
    test('getSidecarContent() returns content', () => {
        const result = sidecar.getSidecarContent();
        // console.log('result: ', result);
        expect(typeof result).toBe('string');
    })
    test('getSidecarPath() returns path', () => {
        const result = sidecar.getSidecarPath('../image.jpg');
        // console.log('result: ', result);
        expect(typeof result).toBe('string');
    })
});