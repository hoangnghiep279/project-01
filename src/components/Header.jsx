import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo, home, dropdown, search } from "../imgs";
const Header = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    // Function to handle link click
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <header className="w-full pb-20 fixed h-20 bg-[#fff] z-30 top-0">
                <div className="lg:w-container w-container-default m-auto flex items-center lg:justify-between lg:gap-0 gap-10 font-montserrat h-20">
                    <img src={logo} alt="may" />
                    <button className="lg:hidden ml-auto ">
                        <img src={search} alt="" />
                    </button>
                    <button onClick={() => setOpen(!open)} className="lg:hidden">
                        {open ? (
                            <div className="text-3xl">
                                {" "}
                                <FaTimes />
                            </div>
                        ) : (
                            <div className="py-3 px-4 text-white rounded-sm  bg-primaryColor">
                                <FaBars />
                            </div>
                        )}
                    </button>

                    <nav
                        className={`lg:block lg:static transition-all duration-500 ease-in ${
                            open
                                ? "fixed top-[70px] right-0 py-4 bottom-0 left-1/3 z-50 bg-[#FFFFFF] font-medium lg:bg-transparent"
                                : "hidden"
                        }`}
                    >
                        <ul className="uppercase text-sm lg:flex gap-9  items-center font-medium  ">
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink to="/" exact activeClassName="text-primaryColor font-normal">
                                    <img src={home} alt="Home" className="hidden lg:block" />
                                    <span className="lg:hidden w-full h-full block">Trang chủ</span>
                                </NavLink>
                            </li>
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink
                                    to="/intro"
                                    className={`w-full h-full block ${
                                        activeLink === "intro" ? "lg:text-primaryColor font-normal" : ""
                                    }`}
                                    onClick={() => handleLinkClick("intro")}
                                >
                                    Giới thiệu
                                </NavLink>
                            </li>
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink
                                    to="/product"
                                    className={`flex gap-2 items-center w-full h-full block ${
                                        activeLink === "product" ? "lg:text-primaryColor font-normal" : ""
                                    }`}
                                    onClick={() => handleLinkClick("product")}
                                >
                                    Sản phẩm
                                    <img src={dropdown} alt="" />
                                </NavLink>
                            </li>
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink
                                    to="/informedia"
                                    className={`flex gap-2 items-center w-full h-full block ${
                                        activeLink === "informedia" ? "lg:text-primaryColor font-normal" : ""
                                    }`}
                                    onClick={() => handleLinkClick("informedia")}
                                >
                                    Thông tin truyền thông
                                    <img src={dropdown} alt="" />
                                </NavLink>
                            </li>
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink
                                    to="/career"
                                    className={`w-full h-full block ${
                                        activeLink === "career" ? "lg:text-primaryColor font-normal" : ""
                                    }`}
                                    onClick={() => handleLinkClick("career")}
                                >
                                    Nghề nghiệp
                                </NavLink>
                            </li>
                            <li className="p-2 ml-auto hover:bg-primaryColor no-hover">
                                <NavLink
                                    to="/contact"
                                    className={`w-full h-full block ${
                                        activeLink === "contact" ? "lg:text-primaryColor font-normal" : ""
                                    }`}
                                    onClick={() => handleLinkClick("contact")}
                                >
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                onClick={() => setOpen(!open)}
                className={`  lg:invisible ${open ? "fixed inset-0 bg-[#000] opacity-65 z-10" : "invisible"}`}
            ></div>
        </>
    );
};
export default Header;
