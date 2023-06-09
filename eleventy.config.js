module.exports = function(eleventyConfig) {

  // Copy _statics while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Copy static files to the root of _site
  eleventyConfig.addPassthroughCopy({
    "./static/": "/",
  });

};
