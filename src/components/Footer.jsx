import { arrownfooter, location, contact, facebook, youtube, twitter, telegram } from "../imgs";
const Footer = () => {
    return (
        <>
            <footer className="lg:bg-primaryColor py-9 bg-[#F5F5F5]">
                <div className="w-container m-auto lg:flex justify-around font-montserrat hidden">
                    <div className="uppercase text-white">
                        <h3 className="text-base font-medium leading-5 mb-7">GIỚI THIỆU</h3>
                        <ul>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    GIỚI THIỆU TỔNG QUAN
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    THÔNG ĐIỆP TỪ TỔNG GIÁM ĐỐC
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    VÙNG NGUYÊN LIỆU
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    KÊNH PHÂN PHỐI
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="uppercase text-white">
                        <h3 className="text-base font-medium leading-5 mb-7">SẢN PHẨM</h3>
                        <ul>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    MDF THƯỜNG
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    MDF HMR/MMR
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    LDF
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    HDF HMR
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    HDF
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    VÁN GHÉP THANH - MỘNG DỌC
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    VÁN GHÉP THANH - MỘNG NGANG
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="uppercase text-white">
                        <h3 className="text-base font-medium leading-5 mb-7">TRUYỀN THÔNG</h3>
                        <ul>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    SỰ KIỆN{" "}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    TIN TỨC
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    THƯ VIỆN ẢNH
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="uppercase text-white">
                        <h3 className="text-base font-medium leading-5 mb-7">THƯ VIỆN ẢNH</h3>
                        <ul>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    TUYỂN DỤNG
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    MÔI TRƯỜNG LÀM VIỆC
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                                <img src={arrownfooter} alt="" />
                                <a href="#!" className="text-sm ">
                                    CHẾ ĐỘ ĐÃI NGỘ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden grid grid-cols-2  w-container-default m-auto gap-9 font-montserrat">
                    <div>
                        <h3 className="common_heading text-sm uppercase">Công ty Cổ Lâm nghiệp tháng Năm</h3>
                        <ul className="text-xs mt-3 flex flex-col gap-4">
                            <li className="flex gap-2">
                                <img src={location} alt="" className="self-start" />
                                Nhà máy chế biến gỗ Nghệ An, xã Nghĩa Hội, huyện Nghĩa Đàn, tỉnh Nghệ An, Việt Nam
                            </li>
                            <li className="flex gap-2">
                                <img src={contact} alt="" className="self-start" />
                                Điện thoại: +84 (04) 3938 768
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="common_heading text-sm uppercase">liên kết nhanh</h3>
                        <ul className="text-xs mt-10 flex flex-col gap-3">
                            <li>
                                <a href="#!">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#!">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="#!">Thông tin truyền thông</a>
                            </li>
                            <li>
                                <a href="#!">Nghề nghiệp</a>
                            </li>
                            <li>
                                <a href="#!">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="common_heading text-sm uppercase">MẠNG XÃ HỘI</h3>
                        <div className="flex gap-4 mt-3">
                            <a href="#!">
                                <div className="border-[1px] border-[#D9D9D9] w-7 h-7 rounded-full flex-center">
                                    <img src={facebook} alt="" />
                                </div>
                            </a>
                            <a href="#!">
                                <div className="border-[1px] border-[#D9D9D9] w-7 h-7 rounded-full flex-center">
                                    <img src={youtube} alt="" />
                                </div>
                            </a>
                            <a href="#!">
                                <div className="border-[1px] border-[#D9D9D9] w-7 h-7 rounded-full flex-center">
                                    <img src={twitter} alt="" />
                                </div>
                            </a>
                            <a href="#!">
                                <div className="border-[1px] border-[#D9D9D9] w-7 h-7 rounded-full flex-center">
                                    <img src={telegram} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
