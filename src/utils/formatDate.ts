type FormatDateProps = {
    date: Date;
}
export function formatDate({ date }: FormatDateProps) {
    return new Intl.DateTimeFormat("en-US").format(date);
}

export function formatTime(timeString: string): string {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0);

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    });
}