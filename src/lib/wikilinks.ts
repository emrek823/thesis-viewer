// Convert Obsidian [[wikilinks]] to regular links

export function resolveWikilinks(content: string): string {
  // [[Link]] -> [Link](/thesis/Link)
  // [[Link|Display]] -> [Display](/thesis/Link)
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (match, link, display) => {
      const slug = link.trim().replace(/\s+/g, "-");
      const text = display || link;
      return `[${text}](/thesis/${slug})`;
    }
  );
}
