const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", function(value) {
    const jsToDateTime = (date, lang = 'en') => {
      return DateTime.fromJSDate(date, { setZone: true })
        .setZone('Europe/Paris')
        .setLocale(lang);
    }

    const formattedDate = (date, lang = 'en') => {
      return jsToDateTime(date, lang).toFormat('d LLLL y');
    }
    return value ? formattedDate(value) : "";

  });

  // Copy _statics while using `--serve`
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  eleventyConfig.addPassthroughCopy('**/*.{jpg,jpeg,png,gif}');

  // Copy static files to the root of _site
  eleventyConfig.addPassthroughCopy({
    "./static/": "/",
    "./CNAME": "/CNAME"
  });

};
