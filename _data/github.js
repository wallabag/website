const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching Github latest release" );

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/wallabag/wallabag/releases/latest")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return {
        appVersion: json.name
      };
    });
};
