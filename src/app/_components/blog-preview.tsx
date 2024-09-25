import Image from "next/image";
import Link from "next/link";

export interface Blog {
    date: string;
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
}

export interface BlogsPreProps {
    blogs: Blog[];
}
export function BlogsPre({ blogs }: BlogsPreProps) {
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div role="main" className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                        Recent Blogs
                    </h1>
                    <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                        If you're looking for SEO tutorials and tips on how to grow your website, you've come to the right place.
                    </p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        {/* First Row (Two Small Blogs) */}
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            {blogs.slice(0, 2).map((blog, idx) => (
                                <SmallBlogCard key={idx} blog={blog} />
                            ))}
                        </div>

                        {/* Second Row (One Large Blog) */}
                        <div className="relative mt-4">
                            <LargeBlogCard blog={blogs[2]} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        {/* Large Blog */}
                        <div className="relative">
                            <LargeBlogCard blog={blogs[3]} />
                        </div>

                        {/* Last Row (Two Small Blogs) */}
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            {blogs.slice(4, 6).map((blog, idx) => (
                                <SmallBlogCard key={idx} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
interface SmallBlogCardProps {
    blog: Blog;
}

function SmallBlogCard({ blog }: SmallBlogCardProps) {
    return (
        <div className="sm:w-1/2 relative">
            <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blog.date}</p>
                <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white line-clamp-1">{blog.title}</h2>
                    <p className="text-base leading-4 text-white mt-2 line-clamp-1">{blog.description}</p>
                    <Link href={blog.link} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <Image
                src={blog.image}
                alt={blog.alt}
                width={500} // Adjust these dimensions according to your layout
                height={300}
                loading="lazy"

            />
        </div>
    );
}

interface LargeBlogCardProps {
    blog: Blog;
}

function LargeBlogCard({ blog }: LargeBlogCardProps) {
    return (
        <div className="relative">
            <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blog.date}</p>
                <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
                    <p className="text-base leading-4 text-white mt-2">{blog.description}</p>
                    <Link href={blog.link} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <Image
                src={blog.image}
                alt={blog.alt}
                width={800}  // Adjust these dimensions according to your layout
                height={450}
                loading="lazy"

            />
        </div>
    );
}