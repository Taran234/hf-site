import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";


const MyBlog = async (blogDataCont: any) => {


    const blogImage = blogDataCont.includes.Asset.find(
        (img: any) => img.sys.id === blogDataCont.items[0].fields.image.sys.id
    );
    const imgURL = blogImage.fields.file.url;

    return (

        <section className="py-10">
            <div className="max-w-5xl mx-auto px-5">
                <div>
                    <h1 className="text-center md:text-5xl text-xl font-bold lg:mt-16 text-[#3d483d]">
                        Trending
                    </h1>
                </div>
                <div>
                    <div className="flex justify-between md:mt-16 mt-8">
                        <div className="text-gray-500">
                            {(() => {
                                const date = new Date(blogDataCont.items[0].sys.createdAt);
                                const day = date.toLocaleString("en-US", {
                                    day: "2-digit",
                                });
                                const month = date.toLocaleString("en-US", {
                                    month: "long",
                                });
                                const year = date.toLocaleString("en-US", {
                                    year: "numeric",
                                });
                                return `${day} / ${month} / ${year}`;
                            })()}
                        </div>
                        <div className="flex gap-5">
                            <FaLinkedinIn
                                className="h-6 w-6 text-[#3d483d]"
                                title="Linkedin"
                            />
                            <FaGithub className="h-6 w-6 text-[#3d483d]" title="GitHub" />
                        </div>
                    </div>
                    <div>
                        <Link href={blogDataCont.items[0].fields.slug}>
                            <h1 className="text-[#719b8f] md:text-4xl text-xl py-10 font-bold">
                                {blogDataCont.items[0].fields.title}
                            </h1>
                        </Link>
                        <Link href={blogDataCont.items[0].fields.slug}>
                            <Image
                                src={`https:${imgURL}`}
                                width={
                                    blogDataCont.includes.Asset[0].fields.file.details.image
                                        .width
                                }
                                height={
                                    blogDataCont.includes.Asset[0].fields.file.details.image
                                        .height
                                }
                                alt={blogDataCont.items[0].fields.title}
                                title={blogDataCont.items[0].fields.title}
                                className="h-full w-full rounded-xl flex justify-center"
                            // placeholder="blur"
                            />
                        </Link>
                        <p className="py-4 text-gray-500">
                            {blogDataCont.items[0].fields.description}
                        </p>
                        <div className="flex">
                            <Link
                                href={blogDataCont.items[0].fields.slug}
                                className="flex items-center md:text-xl text-base gap-2 mt-2 hover:text-[#719b8f]"
                            >
                                Learn more{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-center md:text-3xl text-xl md:pt-12 pt-8 md:pb-16 pb-8 font-bold text-[#3d483d]">
                        Latest Blogs
                    </h2>
                </div>
                {blogDataCont.items.map((items: any, index: any) => {
                    const blogImage = blogDataCont.includes.Asset.find(
                        (img: any) => img.sys.id === items.fields.image.sys.id
                    );
                    const imgURL = blogImage.fields.file.url;
                    return (
                        <div
                            key={index}
                            className="grid md:grid-cols-12 lg:gap-10 gap-5 mb-10"
                        >
                            <div className="md:col-span-5">
                                <Link href={items.fields.slug}>
                                    <Image
                                        src={`https:${imgURL}`}
                                        alt="cardImage"
                                        className="rounded-xl h-full w-full"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </div>
                            <div className="md:col-span-7">
                                <div className="flex items-center justify-between">
                                    <div className="text-gray-500">
                                        {(() => {
                                            const date = new Date(items.sys.createdAt);
                                            const day = date.toLocaleString("en-US", {
                                                day: "2-digit",
                                            });
                                            const month = date.toLocaleString("en-US", {
                                                month: "long",
                                            });
                                            const year = date.toLocaleString("en-US", {
                                                year: "numeric",
                                            });
                                            return `${day} / ${month} / ${year}`;
                                        })()}
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <FaLinkedinIn
                                            className="h-5 w-5 text-[#3d483d]"
                                            title="Linkedin"
                                        />
                                        <FaGithub
                                            className="h-5 w-5 text-[#3d483d]"
                                            title="GitHub"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Link href={items.fields.slug}>
                                        <h1 className="text-[#719b8f] lg:text-3xl text-xl py-2 font-bold">
                                            {items.fields.title}
                                        </h1>
                                    </Link>
                                    <p className="text-gray-500">{items.fields.description}</p>
                                    <div className="flex">
                                        <Link
                                            href={items.fields.slug}
                                            className="flex items-center gap-2 mt-2 hover:text-[#719b8f]"
                                        >
                                            Learn more{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

    );
};

export default MyBlog;