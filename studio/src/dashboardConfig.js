export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609942ee7bf7539fb54bae75",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gmqtn6ut",
                  apiId: "5e00badd-c47c-454a-b9b6-b114f05a3da9",
                },
                {
                  buildHookId: "609942ee62bf91c4ec07ee87",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xr1u525n",
                  apiId: "058f7e34-2ec3-4970-828c-0e52bf734e42",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/fullmers/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xr1u525n.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
