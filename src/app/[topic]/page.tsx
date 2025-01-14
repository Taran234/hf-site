// src/app/[topic]/page.tsx
import { notFound } from 'next/navigation';
import { keywords } from '../lib/keywords';
import DynamicPage from '../_components/dynamic-page';
import { Blog } from '../_components/blog-preview';
import { client } from '../lib/contentful';
import Head from 'next/head';

export async function generateStaticParams() {
    return keywords.map((keyword: string) => ({
        topic: keyword,
    }));
}
export async function generateMetadata({ params }: Params) {
    const { topic } = params;

    if (!keywords.includes(topic)) {
        notFound();
    }

    const cities = [
        'toronto', 'markham', 'richmond-hill',
        'etobicoke', 'oshawa', 'kitchener', 'hamilton',
        'london', 'waterloo', 'cambridge', 'mississauga',
        'brampton', 'oakville', 'burlington', 'vaughan'
    ];

    const service = 'Website Design';

    // Find the city from the keyword
    let location = (cities.find(city => topic.includes(city))) || "Toronto";
    location = location.charAt(0).toUpperCase() + location.slice(1);

    return {
        title: `${service} ${location} | Best Website Design Company ${location}`,
        description: `${location}'s Best ${service} Company specializing in custom website solutions, offering services such as website development, website redesign, portfolio design, and building a business website`,
        keywords: `${service}, ${location}, website design Company, small business website`,
        openGraph: {
            title: `${service} Services in ${location}`,
            description: `Looking for ${service} in ${location}? We're the leading website design Company offering tailored solutions website development, website redesign, portfolio design, and building a business website.`,
            url: `https://harbourfrontwebdesigns.com/${service.replace(/\s+/g, "-").toLowerCase()}-${location}`,
            images: [{ url: '/meta.png', alt: `${service} company in ${location}` }],
            type: 'website',
        },
        twitter: {
            title: `Top ${service} Services in ${location}`,
            description: `The best ${service} Company in ${location}. Affordable prices, SEO updates, and 24/7 support.`,
            images: ['/meta.png'],
            card: 'summary_large_image',
        },
    };
}

interface Params {
    params: {
        topic: string;
    };
}
const generateMetaTags = ({ service, location }: { service: string; location: string | undefined }) => ({
    title: `${service} ${location ? location : "Toronto"} | Best Website Design Company for Small Businesses ${location ? location : "Toronto"}`,
    description: `${location ? location : "Toronto"}'s best Top-Rated ${service} Company. Get weekly SEO updates, 24/7 on-call support, affordable payment options, and more...`,
    keywords: `${service}, ${location ? location : "Toronto"}, website design Company, small business website`,
    ogTitle: `${service} Services in ${location ? location : "Toronto"}`,
    ogDescription: `Looking for ${service} in ${location ? location : "Toronto"}? We're the leading website design Company offering tailored solutions for small businesses.`,
    ogUrl: `https://harbourfrontwebdesigns.com/${service.replace(/\s+/g, "-").toLowerCase()}-${location ? location : "Toronto"}`,
    ogImage: `/meta.png`,
    twitterTitle: `Top ${service} Services in ${location ? location : "Toronto"}`,
    twitterDescription: `The best ${service} Company in ${location ? location : "Toronto"}. Affordable prices, SEO updates, and 24/7 support.`,
    twitterImage: `/meta.png`,
});

export default async function KeywordPage({ params }: Params) {
    const { topic } = params;

    if (!keywords.includes(topic)) {
        notFound();
    }
    const cities = [
        'toronto', 'markham', 'richmond-hill',
        'etobicoke', 'oshawa', 'kitchener', 'hamilton',
        'london', 'waterloo', 'cambridge', 'mississauga',
        'brampton', 'oakville', 'burlington', 'vaughan'
    ];

    const service = 'Website Design';

    // Find the city from the keyword
    let location = (cities?.find(city => topic.includes(city)))?.toString() || "Toronto";
    location = location.charAt(0).toUpperCase() + location.slice(1);
    const meta = generateMetaTags({ service, location });
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
    return (
        <>
            <DynamicPage keyword={location} posts={blogs} />
        </>
    );
}