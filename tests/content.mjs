export function visibleCopy(html) {
  return (html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i)?.[1] || html)
    .replace(/<(script|style|figure)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ')
    .replace(/&(?:apos|#x27|#39);/gi, "'").replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}
