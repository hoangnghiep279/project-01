import { Banner, SubBanner } from "../components/Banner";
import Contact from "../components/Contact";
import { PrizeHome, Rate, News } from "../components/PrizeHome";
import Product from "../components/Product";
import {
    preview,
    phone,
    inforimg,
    nootbook,
    smallphone,
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    prizeBg,
    star,
    homeContact1,
    homeContact2,
} from "../imgs";

const Homepage = () => {
    return (
        <>
            <div className="mt-24">
                <div className="relative shrink-0 pt-[32%] w-full ">
                    <Banner />
                </div>
            </div>
            <section className="font-montserrat py-12">
                <div className="text-center mb-9">
                    <h1 className="font-bold text-4.5xl text-primaryColor">SẢN PHẨM</h1>
                    <p className="text-base font-light">
                        Đạt chuẩn <strong>Carb - P2/EPA</strong> an toàn với sức khoẻ người tiêu dùng
                    </p>
                </div>
                <div className="flex items-center justify-center lg:overflow-visible overflow-hidden">
                    <Product />
                </div>
            </section>
            <section className="my-16">
                <div className="lg:w-container w-container-default m-auto">
                    {" "}
                    <img src={preview} alt="" className=" object-cover w-full h-full" />
                </div>
            </section>

            <section className="my-10 font-montserrat">
                <div className="relative ">
                    <img src={inforimg} alt="" className=" object-cover w-full h-full" />
                    <div className="lg:absolute lg:left-[55%] lg:top-2/4 lg:translate-y-[-50%]">
                        <div className="flex items-center gap-4 lg:static absolute top-3 left-[50%] ">
                            <img src={phone} alt="" className="w-7 self-start lg:self-center lg:mt-0 mt-3" />
                            <div>
                                <h3 className="lg:text-2xl text-xl text-primaryColor font-extrabold">
                                    Liên hệ với MAY{" "}
                                </h3>
                                <p className="lg:text-base text-[14px]">
                                    Nhận báo giá ván ép, ván ép xây dựng cho các dự án của bạn
                                </p>
                            </div>
                        </div>
                        <div className="flex lg:block gap-6 lg:mt-0 mt-6">
                            <a
                                href="tel:(207) 555-0119"
                                className="lg:w-80 w-1/2 bg-primaryColor rounded-xl lg:py-7 p-4 leading-3  flex gap-6 items-center justify-center text-white text-lg lg:text-2xl lg:my-10"
                            >
                                <img src={smallphone} alt="" />
                                (207) 555-0119
                            </a>
                            <a
                                href="#!"
                                className="lg:w-80 w-1/2 bg-[#FFB800] rounded-xl lg:py-7 p-4 leading-3 flex gap-6 items-center justify-center text-white text-lg lg:text-2xl "
                            >
                                <img src={nootbook} alt="" />
                                NHẬN BÁO GIÁ
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h2 className="font-montserrat text-3xl font-bold text-primaryColor text-center mb-5">
                    ĐỐI TÁC CỦA <span className="text-[#FFB800]">CHÚNG TÔI</span>{" "}
                </h2>
                <div className="flex justify-between flex-wrap">
                    <a href="#!">
                        <img src={partner1} alt="" className="w-52 h-28 object-contain" />
                    </a>
                    <a href="#!">
                        <img src={partner2} alt="" className="w-52 h-28 object-contain" />
                    </a>
                    <a href="#!">
                        <img src={partner3} alt="" className="w-52 h-28 object-contain" />
                    </a>
                    <a href="#!">
                        <img src={partner4} alt="" className="w-52 h-28 object-contain" />
                    </a>
                    <a href="#!">
                        <img src={partner5} alt="" className="w-52 h-28 object-contain" />
                    </a>
                </div>
            </section>

            <section className="relative h-[569px] ">
                <img src={prizeBg} alt="" className="opacity-10 w-full h-full object-cover" />
                <div className="absolute top-0 left-1/2 translate-x-[-50%] w-container-default">
                    <div className="mt-11 mb-20">
                        <h2 className="font-montserrat text-3xl font-bold text-primaryColor text-center  mb-4">
                            GIẢI THƯỞNG
                        </h2>
                        <p className="text-[#3E3636] w-full text-center lg:w-[753px] m-auto">
                            May được các tổ chức uy tín trong và ngoài nước trao tặng nhiều giải thưởng cao quý, nhằm
                            ghi nhận những thành tựu, đóng góp cho sự phát triển của ngành, cộng đồng và xã hội
                        </p>
                    </div>{" "}
                    <div className="w-full overflow-hidden flex items-center justify-center">
                        {" "}
                        <PrizeHome />
                    </div>
                </div>
            </section>
            <section className="py-12 bg-rate-gradient">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-montserrat text-3xl font-bold text-primaryColor text-center mb-5">
                        ĐÁNH GIÁ TỪ <span className="text-[#FFB800]">KHÁCH HÀNG</span>
                    </h2>
                    <div className="flex gap-2 items-center">
                        <span className="w-24 h-[2px] bg-[#FFB800] block rounded-sm"></span>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <span className="w-24 h-[2px] bg-[#FFB800] block rounded-sm"></span>
                    </div>
                </div>
                <div className="lg:w-container m-auto w-container-default">
                    <Rate />
                </div>
            </section>
            <section className="py-24">
                <h2 className="font-montserrat text-3xl font-bold text-primaryColor text-center mb-10">
                    TIN TỨC - <span className="text-[#FFB800]">SỰ KIỆN</span>
                </h2>
                <div className=" flex items-center justify-center overflow-hidden">
                    {" "}
                    <News />
                </div>
            </section>
            <section className="lg:w-container m-auto font-montserrat flex py-9 relative w-container-default">
                <div className="lg:w-1/2">
                    <Contact heading="LIÊN HỆ" />
                </div>
                <img
                    src={homeContact1}
                    alt=""
                    className="lg:w-[233px] lg:h-[233px] w-[68px] h-[68px] absolute z-10 lg:bottom-[56px] lg:right-[270px] top-[55px] right-[86px]"
                />
                <img
                    src={homeContact2}
                    alt=""
                    className="lg:w-[410px] lg:h-[410px] w-[121px] h-[121px] absolute lg:right-0 right-0 top-0"
                />
            </section>
        </>
    );
};

export default Homepage;
