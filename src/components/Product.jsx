import { product1, product2, product3, product4, product5, arrowleft, arrowright } from "../imgs";

import React, { useState } from "react";
import Button from "./Button";

const Product = () => {
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
                    <Button words="Xem thêm" />
                </div>
            </div>
        </div>
    );
};

export default Product;
