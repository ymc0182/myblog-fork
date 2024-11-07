export function formatDate(date: Date, zh:boolean = false) {
    return zh ? new Date(date).toLocaleString('zh-cn', {dateStyle:'long'}) : new Date(date).toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}