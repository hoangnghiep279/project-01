import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

import {
    mediaImg2,
    mediaImg3,
    mediaImg4,
    mediaImg5,
    mediaImg6,
    mediaImg7,
    arrowRight,
    arrowleft,
    arrowright,
} from "../imgs";
import { space } from "postcss/lib/list";
const firstContent = [
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg3,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
];

const secondContent = [
    {
        img: mediaImg4,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg5,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg6,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg7,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg4,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg5,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg6,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
    {
        img: mediaImg7,
        date: "20.10.2022",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  sit aliqua dolor do amet sint. Velit officia consequat ",
    },
];
const Event = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-5 lg:w-container m-auto w-container-default">
                <div className="col-span-2 h-[406px]">
                    <img src={mediaImg2} alt="" className="w-full h-full object-cover" />
                </div>
                {firstContent.map((c) => (
                    <div className="lg:h-[406px]">
                        <div
                            key={c.img}
                            className=" h-full overflow-hidden bg-primary01
                        "
                        >
                            <img src={c.img} alt="" className="w-full  object-cover" />
                            <div className=" p-5 ">
                                <span className="text-[#A4A4A4] text-xs">{c.date}</span>
                                <h3 className="display-dot my-5">{c.desc}</h3>
                                <NavLink
                                    to="/informedia/newsdetail"
                                    className="flex items-center text-primaryColor gap-3"
                                >
                                    Xem thêm
                                    <img src={arrowRight} alt="" className="mt-1" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
const ImgLibrary = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-5 lg:w-container m-auto w-container-default">
                {secondContent.map((sc) => (
                    <div className="lg:h-[406px]">
                        <div
                            key={sc.img}
                            className=" h-full overflow-hidden bg-primary01
                        "
                        >
                            <img src={sc.img} alt="" className="w-full  object-cover" />
                            <div className=" p-5 ">
                                <span className="text-[#A4A4A4] text-xs">{sc.date}</span>
                                <h3 className="display-dot my-5">{sc.desc}</h3>
                                <NavLink
                                    to="/informedia/newsdetail"
                                    className="flex items-center text-primaryColor gap-3"
                                >
                                    Xem thêm
                                    <img src={arrowRight} alt="" className="mt-1" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
const NewsOther = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider {...settings}>
            {firstContent.map((c) => (
                <div
                    key={c.img}
                    className=" overflow-hidden  px-4 
                                "
                >
                    <img src={c.img} alt="" className="w-full  object-cover" />
                    <div className=" p-5 bg-primary01">
                        <span className="text-[#A4A4A4] text-xs">{c.date}</span>
                        <h3 className="display-dot my-5">{c.desc}</h3>
                        <NavLink to="/informedia/newsdetail" className="flex items-center text-primaryColor gap-3">
                            Xem thêm
                            <img src={arrowRight} alt="" className="mt-1" />
                        </NavLink>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

// Custom arrows for the slider
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="w-12 h-12 rounded-full border-primaryColor border-2 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 right-[-126px] mr-2 cursor-pointer z-10"
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
            className="w-12 h-12 rounded-full border-primaryColor border-2 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-[-126px] ml-2 cursor-pointer z-10"
        >
            <img src={arrowleft} alt="Previous" />
        </div>
    );
};
export { Event, ImgLibrary, NewsOther };
