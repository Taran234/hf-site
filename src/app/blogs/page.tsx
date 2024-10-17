import { client } from "../lib/contentful";
import { Blog, BlogsPre } from "../_components/blog-preview";

const BlogsList = async () => {
    // Fetch blog entries from Contentful
    const res = await client.getEntries({ content_type: 'bloghf' });

    // Map the blog data into the required Blog interface structure
    const blogs: Blog[] = res.items.map((item: any) => {
        const imageUrl = `https:${item.fields.mainImage.fields.file.url}`;
        const altText = item.fields.mainImage.fields.title || item.fields.mainImage.fields.description || 'Blog image';

        return {
            date: new Date(item.sys.createdAt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            title: item.fields.title,
            description: item.fields.description || '',
            link: `/blogs/${item.fields.slug}`,  // Assuming dynamic blog route
            image: imageUrl,
            alt: altText,
        };
    });

    return <BlogsPre blogs={blogs} />;
}

export default BlogsList;