import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import {
    prize1,
    prize2,
    prize3,
    arrowleft,
    arrowright,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    decor1,
    decor2,
    star,
    newimg1,
    newimg2,
    newimg3,
} from "../imgs";
const data = [
    {
        img: prize1,
        title: "TOP 100 DOANH NGHIỆP BỀN VỮNG",
    },
    {
        img: prize2,
        title: "TOP 555 DOANH NGHIỆP LỢI NHUẬN CAO NHẤT",
    },
    {
        img: prize3,
        title: "TOP 10 DOANH NGHIỆP TIÊU BIỂU ASIAN AWARD",
    },
];
const PrizeHome = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="w-container m-auto">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div>
                        <div key={index} className="flex flex-col items-center ml-4">
                            <div className="w-44 h-44 rounded-full overflow-hidden flex items-center justify-center">
                                <img src={d.img} alt="" className="h-[90%] w-[90%] object-cover" />
                            </div>
                            <p className="text-sm font-inter w-44 h-44 text-center mt-14 text-[#3E3636]">{d.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Custom arrows for the slider
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="w-12 h-12 rounded-full border-primaryColor border-2 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 right-[-40px] mr-2 cursor-pointer z-10"
        >
            <img src={arrowright} alt="Next" />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="w-12 h-12 rounded-full border-primaryColor border-2 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-[-40px] ml-2 cursor-pointer z-10"
        >
            <img src={arrowleft} alt="Previous" />
        </div>
    );
};
// phần rating
const rating = [
    {
        name: "Wade Warren",
        avatar: avatar1,
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "Floyd Miles",
        avatar: avatar2,
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.+",
    },
    {
        name: "Wade Warren",
        avatar: avatar3,
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "Wade Warren",
        avatar: avatar4,
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "Wade Warren",
        avatar: avatar4,
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];
const Rate = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    800: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="pt-20"
            >
                {rating.map((rate) => (
                    <SwiperSlide>
                        <div className="rounded-xl bg-primaryColor relative font-inter lg:w-auto text-white p-5">
                            <div>
                                <img
                                    src={rate.avatar}
                                    alt=""
                                    className="lg:w-28 w-24 lg:h-28 h-24 rounded-full absolute top-[-50px] left-1/2 translate-x-[-50%]"
                                />
                                <img src={decor2} alt="" className="absolute top-[-50px] lg:left-[21%]  left-[10%]" />
                                <img src={decor1} alt="" className="absolute top-[-50px] lg:right-[21%] right-[10%]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                {" "}
                                <h3 className="mt-16 text-base">{rate.name}</h3>
                                <div className="flex items-center gap-2 my-4">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#AFCEFF] lg:text-base text-xs text-center ">{rate.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="lg:flex lg:gap-7 mt-28 grid grid-cols-2 gap-14">
                {rating.map((rate) => (
                    <div className="rounded-xl bg-primaryColor relative font-inter lg:w-auto text-white p-5">
                        <div>
                            <img
                                src={rate.avatar}
                                alt=""
                                className="w-28 h-28 rounded-full absolute top-[-50px] left-1/2 translate-x-[-50%]"
                            />
                            <img src={decor2} alt="" className="absolute top-[-50px] left-[21%]" />
                            <img src={decor1} alt="" className="absolute top-[-50px] right-[21%]" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            {" "}
                            <h3 className="mt-16 text-base">{rate.name}</h3>
                            <div className="flex items-center gap-2 my-4">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className="text-[#AFCEFF] lg:text-base text-xs text-center ">{rate.review}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </>
    );
};

// Phần News-event
const dataNews = [
    {
        image: newimg1,
        title: "How to design a product that can grow itself 10x in year:",
        date: "May 20, 2015",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        image: newimg2,
        title: "How to design a product that can grow itself 10x in year:",
        date: "May 20, 2015",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        image: newimg3,
        title: "How to design a product that can grow itself 10x in year:",
        date: "May 20, 2015",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];
const News = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div className="w-container m-auto ">
                <Slider {...settings}>
                    {dataNews.map((data, index) => (
                        <div className="ml-[30px] font-inter ">
                            <div key={index} className="flex flex-col w-[340px]">
                                <img src={data.image} alt="" className="w-full h-[186px]" />
                                <div className="px-5 bg-[#EBF0F7]">
                                    <h3 className="text-base font-bold mt-3">{data.title}</h3>
                                    <span className="text-xs block my-3 text-[#8D8D8D]">{data.date}</span>
                                    <p className="text-[#3E3636] text-base text-left pb-2">{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
export { PrizeHome, Rate, News };
