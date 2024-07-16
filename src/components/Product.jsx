import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { product1, product2, product3, product4, product5, arrowleft, arrowright, prodImg1, arrowRight } from "../imgs";
import { Link, NavLink } from "react-router-dom";

import React, { useState } from "react";
import Button from "./Button";

const Producthome = () => {
    // const products = [product1, product2, product3, product4, product5];
    const products = [
        {
            name: "VÁN HDF",
            img: product1,
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            name: "PRODUCT 2",
            img: product2,
            description: "Description for product 2.",
        },
        {
            name: "PRODUCT 3",
            img: product3,
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            name: "PRODUCT 4",
            img: product4,
            description: "Description for product 4.",
        },
        {
            name: "PRODUCT 5",
            img: product5,
            description: "Description for product 5.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(2);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-container m-auto">
            <div className="flex justify-between items-center h-52">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`w-40 h-40 rounded-full border-4 ${
                            index === currentIndex ? "w-48 h-48 border-primaryColor duration-1000" : "border-[#8D8D8D]"
                        } border-solid`}
                    >
                        <img src={product.img} alt="" className="h-full w-full rounded-full object-contain" />
                    </div>
                ))}
            </div>
            <div className="flex w-80 lg:justify-between justify-around m-auto mt-6">
                <img src={arrowleft} alt="" onClick={handlePrev} className="cursor-pointer" />
                <span className="w-4 h-4 rounded-full bg-primaryColor block"></span>
                <img src={arrowright} alt="" onClick={handleNext} className="cursor-pointer" />
            </div>
            <div className="text-center font-montserrat w-1/3 flex flex-col m-auto h-56">
                <h3 className="text-2xl font-semibold text-primaryColor my-5">{products[currentIndex].name}</h3>
                <p className="font-light text-base ">{products[currentIndex].description}</p>
                <div className="mt-5">
                    <Button words="Xem thêm" padding="5" />
                </div>
            </div>
        </div>
    );
};
const ProdDetailpage = () => {
    const prod = [
        {
            img: prodImg1,
            name: "VÁN MDF",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat ...",
        },
        {
            img: prodImg1,
            name: "VÁN MDF",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat ...",
        },
        {
            img: prodImg1,
            name: "VÁN MDF",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat ...",
        },
    ];
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
            {prod.map((p) => (
                <div
                    key={p.name}
                    className="  overflow-hidden px-4 
                                "
                >
                    <img src={p.img} alt="" className="w-full  object-cover" />
                    <div className=" p-5 bg-primary01">
                        <span className="text-[#A4A4A4] text-xs">{p.name}</span>
                        <h3 className="display-dot my-5">{p.desc}</h3>
                        <NavLink to="#!" className="flex items-center text-primaryColor gap-3">
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
            className="w-12 h-12 hidden lg:flex rounded-full border-primaryColor border-2  items-center justify-center absolute top-1/2 transform -translate-y-1/2 right-[-126px] mr-2 cursor-pointer z-10"
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
            className="w-12 h-12 hidden lg:flex rounded-full border-primaryColor border-2  items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-[-126px] ml-2 cursor-pointer z-10"
        >
            <img src={arrowleft} alt="Previous" />
        </div>
    );
};
export { Producthome, ProdDetailpage };
