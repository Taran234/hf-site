import { client } from "../lib/contentful";
import { Blog } from "../_components/blog-preview";
import BlogsList from "../_components/blog-list";


const BlogsPage = async () => {
    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } }
    };
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

    return <BlogsList blogs={blogs} />;
}

export default BlogsPage;
