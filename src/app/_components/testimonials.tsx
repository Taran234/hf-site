import { MdStarRate } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Testimonials = ({ keyword }: { keyword: any }) => {
    return (
        <div>
            <div className="flex md:flex-row flex-col">
                <div className="text-left md:w-1/2 md:text-6xl mx-8 font-semibold leading-normal my-10">
                    <h4 className="md:text-xl text-base font-aclonica lg:leading-tight  justify-start md:mx-20 text-left tracking-tight font-medium text-white">
                        Website Design {keyword}
                    </h4>
                    <h4 className="md:text-4xl text-2xl font-aclonica lg:leading-tight  justify-start md:mx-20 text-left tracking-tight font-medium text-white">
                        Anyone can make promises we give you proof.
                    </h4>
                    <br />
                    <h4 className="md:text-2xl text-sm font-aclonica lg:leading-tight  justify-start md:mx-20 text-left tracking-tight font-medium text-white">
                        We asked some of our clients to write an honest review about their experience working with us. Here's what they had to say:
                    </h4>

                </div>

                <div className="flex  items-center mx-auto md:w-1/2 justify-center ">
                    <div className="flex flex-col items-center space-x-2 w-full mx-4 md:w-auto bg-[#222222] rounded-3xl p-8">



                        {/* Rating Info */}
                        <div className="flex flex-row gap-2">
                            <FcGoogle size={36} />
                            <div className="text-2xl font-bold p-1">5.0</div>
                            <div className="flex space-x-1">
                                {/* Rating Stars */}
                                <MdStarRate size={36} className=" text-yellow-400" />
                                <MdStarRate size={36} className=" text-yellow-400" />
                                <MdStarRate size={36} className=" text-yellow-400" />
                                <MdStarRate size={36} className=" text-yellow-400" />
                                <MdStarRate size={36} className=" text-yellow-400" />
                            </div>
                        </div>
                        <button className="bg-amber-500 p-2 m-2 rounded-lg font-aclonica font-extrabold justify-center items-center flex  text-white" ><Link href={`https://maps.app.goo.gl/U8AEH1ut9YatNpBi6`}> Review us on Google</Link></button>
                    </div>

                </div>
            </div>
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-3b4b470e-17e8-42b6-9b89-a4ecd50cfc58" data-elfsight-app-lazy></div>
        </div>
    );
};

export default Testimonials;
