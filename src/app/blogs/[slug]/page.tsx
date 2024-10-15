// Import necessary modules and components
import { client } from "@/app/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Header } from "@/app/_components/header";
import { Modal, ModalBody, ModalContent, ModalProvider } from "@/app/components/ui/model";
import { Footer } from "@/app/_components/footer";
import { Contact } from "@/app/_components/contact";

// Force dynamic rendering (optional based on your use case)
export const dynamic = "force-dynamic";

// Define TypeScript interfaces for type safety
type Params = {
    slug: string
}

type Props = {
    params: Params
}

interface BlogFields {
    title: string;
    slug: string;
    body: any; // Adjust the type based on your rich text structure
    mainImage: {
        fields: {
            file: {
                url: string;
                details: {
                    image: {
                        width: number;
                        height: number;
                    };
                };
            };
            title?: string;
            description?: string;
        };
    };
    // Add other fields as necessary
}

const BlogDetailPage = async ({ params }: Props) => {
    try {
        // Fetch blog entries from Contentful filtered by the slug
        const response = await client.getEntries({
            content_type: 'bloghf',         // Specify the content type
            'fields.slug[in]': [params.slug],       // Use the correct syntax to query by slug
            limit: 1                        // Limit to one entry
        });

        // Check if any entries were returned
        if (!response.items.length) {
            return (
                <section>
                    <div className="max-w-3xl mx-auto px-5">
                        <p className="text-center mt-20 text-xl">Blog post not found.</p>
                        <div className="flex justify-center mt-4">
                            <Link href="/" className="text-amber-400 hover:text-[#719b8f]">
                                ← Back to home
                            </Link>
                        </div>
                    </div>
                </section>
            );
        }
        const renderOptions = {
            renderNode: {
                [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
                    <h1 className="text-4xl font-bold text-white">{children}</h1>
                ),
                [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
                    <h2 className="text-3xl font-semibold text-white">{children}</h2>
                ),
                [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
                    <h3 className="text-2xl font-medium text-white">{children}</h3>
                ),
                [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
                    <p className="mb-4 text-white">{children}</p>
                ),
                [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
                    <ul className="list-disc pl-5 text-white">{children}</ul>
                ),
                [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
                    <ol className="list-decimal pl-5 text-white">{children}</ol>
                ),
                [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
                    <li className="text-white">{children}</li>
                ),
                [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
                    <blockquote className="border-l-4 pl-4 italic text-white">{children}</blockquote>
                ),
                [BLOCKS.EMBEDDED_ASSET]: (_node: any) => {
                    const { title, file } = _node.data.target.fields;
                    return (
                        <div className="mb-4">
                            <img src={`https:${file.url}`} alt={title} className="rounded-lg" />
                            <p>{title}</p>
                        </div>
                    );
                },
                [BLOCKS.HR]: () => <hr className="my-4 border-gray-300" />,
                [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => (
                    <table className="min-w-full">{children}</table>
                ),
                [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
                    <tr>{children}</tr>
                ),
                [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
                    <td className="border px-4 py-2">{children}</td>
                ),

                // Inline nodes
                [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
                    <a href={node.data.uri} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                ),
            },
            renderMark: {
                [MARKS.BOLD]: (text: React.ReactNode) => <strong className="text-white font-bold">{text}</strong>,
                [MARKS.ITALIC]: (text: React.ReactNode) => <em className="text-white">{text}</em>,
                [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="text-white underline">{text}</u>,
                [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-200 rounded px-1">{text}</code>,
            },
        };
        // Extract the first (and only) blog entry
        const blogDetailData = response.items[0];

        // Extract image details safely
        const imgURL = blogDetailData.fields.mainImage.fields.file.url;
        const imgWidth = blogDetailData.fields.mainImage.fields.file.details.image.width;
        const imgHeight = blogDetailData.fields.mainImage.fields.file.details.image.height;
        const imgDesc = blogDetailData.fields.mainImage.fields.title || blogDetailData.fields.mainImage.fields.description || 'Blog image';

        // Format the creation date
        const createdAt = new Date(blogDetailData.sys.createdAt).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });

        return (
            <section className="bg-dot-slate-50/10">
                <ModalProvider>
                    <Modal>
                        <ModalBody>
                            <ModalContent>
                                <h4 className="text-lg md:text-2xl z-50 text-neutral-100 font-bold text-center mb-8">
                                    Get a {" "}
                                    <span className="px-1 py-0.5 rounded-md bg-neutral-800 border-neutral-700 border">
                                        FREE
                                    </span>{" "}
                                    Consultation! 📞
                                </h4>
                                <Contact />
                            </ModalContent>
                        </ModalBody>
                        <div className="fixed top-0 left-0 right-0 z-50">
                            <Header />
                        </div>
                    </Modal>
                </ModalProvider>
                <div className="max-w-4xl mt-20 mx-auto px-5 overflow-x-hidden scroll-smooth  ">
                    {/* Back to Home Link */}
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex items-center gap-2 mt-10 hover:text-[#719b8f] text-sm md:text-base text-amber-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="md:size-5 size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>{" "}
                            Back to home
                        </Link>
                    </div>

                    {/* Blog Metadata */}
                    <div className="flex justify-between md:mt-10 mt-8">
                        <div className="text-gray-500">{createdAt}</div>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/taranjeet-bhatia/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="h-6 w-6 text-amber-400" title="LinkedIn" />
                            </a>
                            <a href="https://github.com/Taran234" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-6 w-6 text-amber-400" title="GitHub" />
                            </a>
                        </div>

                    </div>

                    {/* Blog Title and Author */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-center md:text-4xl text-xl font-bold md:mt-10 mt-8 mb-4">
                            {blogDetailData.fields.title}
                        </h1>
                        <div className="text-left mb-4 md:text-base text-sm text-amber-400 font-bold px-4">
                            <span className="text-amber-400 font-normal">Written by</span> | Taranjeet Singh
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div>
                        <Image
                            src={`https:${imgURL}`}
                            width={imgWidth}
                            height={imgHeight}
                            alt={imgDesc}
                            title={imgDesc}
                            className="h-full w-full rounded-xl flex justify-center"
                        // Uncomment the next line if you have a placeholder image
                        // placeholder="blur"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="prose text-white max-w-full mb-10 md:text-justify lg:px-5 md:mt-10 mt-5">
                        {documentToReactComponents(blogDetailData.fields.blogContent, renderOptions)}
                    </div>

                    {/* Back to Home Link */}
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex items-center gap-2 mt-2 hover:text-[#719b8f] text-sm md:text-base text-amber-400 mb-10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="md:size-5 size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>{" "}
                            Back to home
                        </Link>
                    </div>
                </div>
                <Footer />

            </section>
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return (
            <section>
                <div className="max-w-3xl mx-auto px-5">
                    <p className="text-center mt-20 text-xl">An error occurred while fetching the blog post.</p>
                    <div className="flex justify-center mt-4">
                        <Link href="/" className="text-amber-400 hover:text-[#719b8f]">
                            ← Back to home
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
};

export default BlogDetailPage;
