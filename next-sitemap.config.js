const { keywords } = require('./keywords.ts');

module.exports = {
    siteUrl: 'https://harbourfrontwebdesigns.com',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7,
    // Add dynamic routes to the sitemap
    transform: async (config, url) => {
        if (url === '/') {
            return {
                loc: url, // The homepage
                changefreq: 'monthly',
                priority: 1.0,
            };
        }
        return {
            loc: url,
            changefreq: 'monthly',
            priority: 0.7,
        };
    },
    additionalPaths: async (config) => {
        return keywords.map((keyword) => ({
            loc: `/${keyword}`, // This maps to your dynamic route
            changefreq: 'monthly',
            priority: 0.7,
        }));
    },
};
