const recipeScraper = require("recipe-scraper");

const start = async () => {
  const resp = await recipeScraper(
    "https://www.allrecipes.com/recipe/53110/juicy-peach-crisp/"
  );
  const d = await resp.json();
  console.log(d);
};

start();
