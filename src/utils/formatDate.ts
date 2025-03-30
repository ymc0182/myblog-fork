export function formatDate(date: Date, lang:string = "en") {
    // return zh ? new Date(date).toLocaleString('zh-cn', {dateStyle:'long'}) : new Date(date).toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
    return  (lang==="en") ? Intl.DateTimeFormat("en-US", {year:"numeric", month: "long", day:"2-digit"}).format(date) :
            (lang==="zh") ? Intl.DateTimeFormat("zh-CN", {year:"numeric", month: "long", day:"2-digit"}).format(date) :
            Intl.DateTimeFormat("en-CA", {year:"numeric", month:"2-digit", day:"2-digit"}).format(date)
}