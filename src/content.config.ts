import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z
      .object({
        title: z.string().optional(),
        content: z.string().optional(),
        image: z.string().optional(),
        button: z
          .object({
            label: z.string(),
            link: z.string().default("/contact"),
            enable: z.boolean().default(true),
          })
          .optional(),
      })
      .optional(),
      key_features: z.object({
        title: z.string(),
        description: z.string(),
        feature_list: z
          .array(
            z.object({
              icon: z.string(),
              title: z.string(),
              content: z.string(),
            }),
          )
          .optional(),
      }),

      service: z.object({
        homepage_tab: z.object({
          title: z.string(),
          description: z.string(),
          tab_list: z
            .array(
              z.object({
                title: z.string(),
                icon: z.string(),
                image: z.string(),
              }),
            )
            .optional(),
        }),
  
        our_service: z.array(
          z.object({
            title: z.string(),
            description: z.string().optional(),
            image: z.string().optional(),
            list: z.array(z.string()).optional(),
            video: z
              .object({
                thumbnail: z.string(),
                video_id: z.string(),
              })
              .optional(),
            button: z
              .object({
                label: z.string(),
                link: z.string(),
                enable: z.boolean().default(true),
              })
              .optional(),
          }),
        ),
      }),
  

    feature: z.object({
      title: z.string(),
      features: z.array(
        z.object({
          name: z.string(),
          icon: z.string().optional(),
          content: z.string().optional(),
        }),
      ),
    }),
    services: z
      .array(
        z.object({
          title: z.string().optional(),
          content: z.string().optional(),
          images: z.array(z.string()).optional(),
          button: z
            .object({
              label: z.string(),
              link: z.string().default("/contact"),
              enable: z.boolean().default(true),
            })
            .optional(),
        }),
      )
      .optional(),
    workflow: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string(),
      })
      .optional(),
    call_to_action: z
      .object({
        title: z.string().optional(),
        content: z.string().optional(),
        image: z.string(),
        button: z
          .object({
            label: z.string(),
            link: z.string().default("/contact"),
            enable: z.boolean().default(true),
          })
          .optional(),
      })
      .optional(),
      testimonial: z.object({
        title: z.string(),
        description: z.string(),
        testimonial_list: z
          .array(
            z.object({
              author: z.string(),
              avatar: z.string(),
              organization: z.string(),
              rating: z.enum(["one", "two", "three", "four", "five"]),
              content: z.string(),
            }),
          )
          .optional(),
      }),
  }),
});

//Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean(),
    info: z.object({
      title: z.string(),
      description: z.string(),
      contacts: z.array(z.string()),
    }),
  }),
});

//pricing collection schema
const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean(),
    plans: z
      .array(
        z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          price: z.number(),
          type: z.string(),
          recommended: z.boolean().optional(),
          features: z.array(z.string()),
          button: z.object({
            label: z.string(),
            link: z.string().default("/contact"),
          }),
        }),
      )
      .optional(),

    call_to_action: z
      .object({
        title: z.string(),
        content: z.string(),
        image: z.string(),
        button: z
          .object({
            enable: z.boolean().default(true),
            label: z.string(),
            link: z.string().default("/contact"),
          })
          .optional(),
      })
      .optional(),
  }),
});

//pricing collection schema
const printableNewCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/printable" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean(),
    printables: z
      .array(
        z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          url: z.string(),
          thumbnail: z.string(),
          type: z.string(),
          recommended: z.boolean().optional(),
          notes: z.array(z.string()),
          button: z.object({
            label: z.string().default("Download"),
            link: z.string().default("/"),
          }),
        }),
      )
      .optional(),

    call_to_action: z
      .object({
        title: z.string(),
        content: z.string(),
        image: z.string(),
        button: z
          .object({
            enable: z.boolean().default(true),
            label: z.string(),
            link: z.string().default("/contact"),
          })
          .optional(),
      })
      .optional(),
  }),
});

// FAQ collection schema
const faqCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/faq" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean(),
    faqs: z.array(
      z.object({
        title: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    post_type: z.string().default("blog"),
  }),
});

// News collection schema
const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/news" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    post_type: z.string().default("news"),
  }),
});


// Printables collection schema
const printablesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/printables" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    post_type: z.string().default("printables"),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});



// About Collection Schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    buttons: z.array(
      z.object({
        label: z.string(),
        link: z.string(),
        outline: z.boolean().optional(),
        enable: z.boolean().default(true),
      }),
    ),

    // Counter
    counter: z.array(
      z.object({
        name: z.string(),
        number: z.union([z.number(), z.string()]), // Support both numeric and string types (e.g., 'M', 'K')
        measurement: z.string(),
        color: z.string(),
      }),
    ),

    // Gallery
    gallery: z.object({
      title: z.string(),
      images: z.array(z.string()),
    }),

    // Our Work
    features: z.object({
      title: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean().default(true),
      }),
      features_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
        }),
      ),
    }),

    // Team Members
    members: z.object({
      title: z.string(),
      description: z.string(),
      member_list: z.array(
        z.object({
          name: z.string(),
          field: z.string(),
          image: z.string(),
        }),
      ),
    }),
  }),
});


// Features collections schema
const featuresCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/features" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        })
        .optional(),
    }),

    // Project Management Section
    project_management: z.object({
      title: z.string(),
      content: z.string(),
      management: z.object({
        title: z.string(),
        projects: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
              icon: z.string(),
            }),
          )
          .optional(),
      }),

      // Feature Service Section
      feature_service: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        list: z.array(z.string()).optional(),
        buttons: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
            enable: z.boolean().default(true),
            outline: z.boolean().optional(),
          }),
        ),
      }),

      // Feature Tab Section
      feature_tab: z.object({
        title: z.string(),
        list: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
              image: z.string(),
            }),
          )
          .optional(),
      }),
    }),
  }),
});

// How It Works Collection Schema
const howItWorksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),

    // Performance Section
    performance: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
      }),
    ),

    // Our Works Section
    our_works: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        list: z.array(z.string()).optional(),
      }),
    ),
  }),
});

// Careers collection schema
const careersCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/careers" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    image: z.string().optional(),
    benefits: z
      .object({
        title: z.string(),
        description: z.string(),
        benefit_list: z.array(
          z
            .object({
              title: z.string(),
              content: z.string(),
              color: z.string(),
              icon: z.string(),
            })
            .optional(),
        ),
      })
      .optional(),
    sidebar_content: z
      .object({
        title: z.string(),
        content: z.string(),
        button: z.object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        }),
        enable: z.boolean().default(true),
      })
      .optional(),
    career: z
      .object({
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    excerpt: z.string().optional(),
    job_nature: z.string().optional(),
    location: z.string().optional(),
    categories: z.array(z.string()).default(["developer"]),
    date: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const integrationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/integrations" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    name: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["social media"]).optional(),
    button: z
      .object({
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

//Apps collections
const appsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/specials/apps" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    name: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["social media"]).optional(),
    button: z
      .object({
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

//Websitesd collections
const websitesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/specials/websites" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    name: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["social media"]).optional(),
    button: z
      .object({
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

// FAQ collection schema
const fqprojectCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/free-quran-project" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean(),
    fqproject: z.array(
      z.object({
        title: z.string(),
        answer: z.string(),
      }),
    ),
    info: z.object({
      title: z.string(),
      description: z.string(),
      contacts: z.array(z.string()),
    }),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  blog: blogCollection,
  pages: pagesCollection,
  contact: contactCollection,
  pricing: pricingCollection,
  faq: faqCollection,
  features: featuresCollection,
  "how-it-works": howItWorksCollection,
  careers: careersCollection,
  integrations: integrationsCollection,
  news: newsCollection,
  apps: appsCollection,
  websites: websitesCollection,
  "fqproject": fqprojectCollection,
  printables: printablesCollection, //old printables collection
  printable: printableNewCollection
};