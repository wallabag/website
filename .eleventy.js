module.exports = function(eleventyConfig) {
  // Copy _statics while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Copy favicon
  eleventyConfig.addPassthroughCopy({ "static/favicon.ico": "favicon.ico" });

  // Copy `static` to `_site/static`
  eleventyConfig.addPassthroughCopy("static/**/*");
};
