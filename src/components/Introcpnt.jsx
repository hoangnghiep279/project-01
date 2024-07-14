import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Subnav = () => {
    return (
        <>
            <nav className="bg-[#F5F5F5]">
                <ul className="flex items-center justify-around py-5 overflow-auto w-full overscroll-contain">
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            GIỚI THIỆU{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            VỊ TRÍ ĐỊA LÝ{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            THƯ CẢM ƠN
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            QUY HOẠCH
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            VÙNG NGUYÊN LIỆU{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="hover:underline text-nowrap px-6 text-sm lg:text-base">
                            {" "}
                            KÊNH PHÂN PHỐI{" "}
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export { Subnav };
