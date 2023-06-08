module.exports = function(eleventyConfig) {
  // Copy _statics while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Copy favicon
  eleventyConfig.addPassthroughCopy({ "static/favicon.ico": "favicon.ico" });

  // Copy CNAME configuration
  eleventyConfig.addPassthroughCopy({ "static/CNAME": "CNAME" });

  // Copy `static` to `_site/static`
  eleventyConfig.addPassthroughCopy("static/**/*");
};
