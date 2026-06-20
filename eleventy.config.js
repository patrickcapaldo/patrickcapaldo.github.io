// Canonical project status order: Active, Paused, Archive
const STATUS_ORDER = { active: 0, paused: 1, archive: 2 };

function byStatusThenDate(a, b) {
  const sa = STATUS_ORDER[(a.data.status || "").toLowerCase()] ?? 99;
  const sb = STATUS_ORDER[(b.data.status || "").toLowerCase()] ?? 99;
  if (sa !== sb) return sa - sb;
  return b.date - a.date;
}

export default function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collections
  eleventyConfig.addCollection("thoughts", (api) =>
    api.getFilteredByGlob("src/thoughts/*.md")
       .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("firstPrinciples", (api) =>
    api.getFilteredByGlob("src/projects/first-principles/*.md")
       .sort(byStatusThenDate)
  );

  eleventyConfig.addCollection("other", (api) =>
    api.getFilteredByGlob("src/projects/other/*.md")
       .sort(byStatusThenDate)
  );

  eleventyConfig.addCollection("openSource", (api) =>
    api.getFilteredByGlob("src/projects/open-source/*.md")
       .sort(byStatusThenDate)
  );

  // Combined collection across all project groups, used for things like
  // aggregating the full set of tags for the filter UI.
  eleventyConfig.addCollection("allProjects", (api) =>
    api.getFilteredByGlob("src/projects/**/*.md")
       .sort(byStatusThenDate)
  );

  // Date filter
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });
  });

  // Returns the best available cover/thumbnail image for a piece of content.
  // Priority: explicit `thumbnail` field -> explicit `cover` field -> first
  // <img> found in the rendered content -> null (no image).
  eleventyConfig.addFilter("coverImage", (item) => {
    if (!item || !item.data) return null;
    if (item.data.thumbnail) return item.data.thumbnail;
    if (item.data.cover) return item.data.cover;
    const html = item.templateContent || "";
    const match = html.match(/<img[^>]+src="([^"]+)"/i);
    return match ? match[1] : null;
  });

  // Returns a sorted list of unique tags across a collection.
  eleventyConfig.addFilter("uniqueTags", (collection) => {
    const tags = new Set();
    (collection || []).forEach((item) => {
      (item.data.tags || []).forEach((t) => tags.add(t));
    });
    return [...tags].sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
