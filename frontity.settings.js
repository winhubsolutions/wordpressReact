const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://chitrambhalare.in",
      title: "Chitrambhalare Blog",
      description: "Latest Movies News"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],

            ["About Us", "/about-us/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://chitrambhalare.in/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
