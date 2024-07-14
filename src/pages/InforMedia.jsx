import { useState } from "react";
import { SubBanner } from "../components/Banner";
import { Event, ImgLibrary } from "../components/News-media";
import { smallhome, arrowRight2 } from "../imgs";
const Informedia = () => {
    // const [content, setContent] = useState(1);
    // const handleClick = (content) => {
    //     setContent(content);
    // };
    const [content, setContent] = useState(1);
    const handleClick = (index) => {
        setContent(index);
    };
    return (
        <>
            <main className="mt-24">
                <div className="relative shrink-0 pt-[32%] w-full ">
                    <SubBanner />
                </div>
                <section>
                    <div className="lg:w-container m-auto w-container-default mt-5 font-open-sans pb-8">
                        <h4 className="flex items-center gap-3">
                            <img src={smallhome} alt="" />
                            <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">Giới thiệu tổng quan</span>
                        </h4>
                    </div>
                </section>
                <section className="pb-44">
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => handleClick(1)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 1 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Sự kiện
                        </button>
                        <button
                            onClick={() => handleClick(2)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 2 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Tin tức nội bộ{" "}
                        </button>
                        <button
                            onClick={() => handleClick(3)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 3 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Thư viện ảnh
                        </button>
                    </div>
                    <div className="py-9">
                        {content === 1 && <Event />}
                        {content === 2 && <Event />}
                        {content === 3 && <ImgLibrary />}
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <span
                            onClick={() => handleClick(1)}
                            className={`w-8 h-8 rounded-full border-primaryColor border-2 block flex-center  text-sm cursor-pointer ${
                                content === 1 ? "bg-primaryColor text-white" : ""
                            }`}
                        >
                            1
                        </span>
                        <span
                            onClick={() => handleClick(2)}
                            className={`w-8 h-8 rounded-full border-primaryColor border-2 block flex-center  text-sm cursor-pointer ${
                                content === 2 ? "bg-primaryColor text-white" : ""
                            }`}
                        >
                            2
                        </span>
                        <span
                            onClick={() => handleClick(3)}
                            className={`w-8 h-8 rounded-full border-primaryColor border-2 block flex-center  text-sm cursor-pointer ${
                                content === 3 ? "bg-primaryColor text-white" : ""
                            }`}
                        >
                            &gt;
                        </span>
                        <span
                            className={`w-8 h-8 rounded-full border-primaryColor border-2 block flex-center  text-sm cursor-pointer ${
                                content === "" ? "bg-primaryColor text-white" : ""
                            }`}
                        >
                            &gt;&gt;
                        </span>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Informedia;
