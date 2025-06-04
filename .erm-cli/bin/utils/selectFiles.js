import dialog from 'node-file-dialog';

export async function selectSourceImageFile() {
    const dialog = (await import('node-file-dialog')).default;
    try {
        const selectedFiles = await dialog({
            type: 'open-file',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'] // Restrict to image files
        });

        if (!selectedFiles || selectedFiles.length === 0) {
            throw new Error('No file selected');
        }

        return selectedFiles[0];
    } catch (error) {
        throw error;
    }
}