// src/app/[topic]/page.tsx
import { notFound } from 'next/navigation';
import { keywords } from '../lib/keywords';
import DynamicPage from '../_components/dynamic-page';

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

export default function KeywordPage({ params }: Params) {
    const { topic } = params;

    if (!keywords.includes(topic)) {
        notFound();
    }

    return <DynamicPage keyword={topic} />;
}
