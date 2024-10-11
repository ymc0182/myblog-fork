export function  formatDate(date: Date) {
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}