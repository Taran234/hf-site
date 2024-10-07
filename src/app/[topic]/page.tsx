// src/app/[topic]/page.tsx
import { notFound } from 'next/navigation';
import { keywords } from '../lib/keywords';
import DynamicPage from '../_components/dynamic-page';
import { Blog } from '../_components/blog-preview';
import { client } from '../lib/contentful';

export async function generateStaticParams() {
    return keywords.map((keyword: string) => ({
        topic: keyword,
    }));
}

interface Params {
    params: {
        topic: string;
    };
}

export default async function KeywordPage({ params }: Params) {
    const { topic } = params;

    if (!keywords.includes(topic)) {
        notFound();
    }
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

    return <DynamicPage keyword={topic} posts={blogs} />;
}
