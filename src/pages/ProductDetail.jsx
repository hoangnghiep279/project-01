import { useState } from "react";
import { prodImg1, prodImg3, prodImg4 } from "../imgs";
import { ProdDetailpage } from "../components/Product";
const ProductDetail = () => {
    const [img, setImg] = useState(prodImg1);
    const handleClick = (img) => {
        setImg(img);
    };
    return (
        <>
            <main className="mt-24 font-montserrat lg:w-container w-container-default m-auto">
                <section className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                    <div>
                        <img
                            onClick={() => handleClick(prodImg1)}
                            src={img}
                            alt=""
                            className="lg:w-[576px] lg:h-[375px] w-full h-[228px] object-cover"
                        />
                        <div className="flex gap-4 mt-4 flex-wrap">
                            <img
                                onClick={() => handleClick(prodImg1)}
                                src={prodImg1}
                                alt=""
                                className="w-[88px] object-cover"
                            />
                            <img
                                onClick={() => handleClick(prodImg3)}
                                src={prodImg3}
                                alt=""
                                className="w-[88px] object-cover"
                            />
                            <img
                                onClick={() => handleClick(prodImg3)}
                                src={prodImg3}
                                alt=""
                                className="w-[88px] object-cover"
                            />
                            <img
                                onClick={() => handleClick(prodImg3)}
                                src={prodImg3}
                                alt=""
                                className="w-[88px] object-cover"
                            />
                            <img
                                onClick={() => handleClick(prodImg3)}
                                src={prodImg3}
                                alt=""
                                className="w-[88px] object-cover"
                            />
                        </div>
                    </div>
                    <article>
                        <h1 className="uppercase common_heading text-4xl">mdf thường</h1>

                        <div className="h-[2px] w-full bg-primaryColor my-5"></div>
                        <p className="font-[450]">
                            Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm và
                            tại các nơi có môi trường độ ẩm cao. <br /> Khả năng chống ẩm của ván được tạo ra nhờ việc
                            sử dụng keo melamine nhằm giúp ổn định hình dạng ván cũng như giúp ván ít bị trương nở khi
                            nằm trong môi trường có độ ẩm cao hoặc có nguy cơ bị dính nước. Sản phẩm này thường có màu
                            xanh (thuốc nhuộm) hoặc khách hàng cũng có thể yêu cầu không pha trộn màu vào ván.
                        </p>
                        <h3 className="text-secondColor font-medium text-2xl my-5">Quy trình sản xuất</h3>
                        <p className="font-[450]">
                            Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm và
                            tại các nơi có môi trường độ ẩm cao. <br /> Khả năng chống ẩm của ván được tạo ra nhờ việc
                            sử dụng keo melamine nhằm giúp ổn định hình dạng ván cũng như giúp ván ít bị trương nở khi
                            nằm trong môi trường có độ ẩm cao hoặc có nguy cơ bị dính nước. Sản phẩm này thường có
                        </p>
                    </article>
                </section>
                <div className="overflow-auto mt-20">
                    <img src={prodImg4} alt="" className="w-container h-[900px] no-max-width " />
                </div>
                <section className="py-14">
                    <h2 className="font-bold text-4xl mb-12">SẢN PHẨM LIÊN QUAN</h2>
                    <div className=" flex items-center justify-center lg:overflow-visible overflow-hidden">
                        <ProdDetailpage />
                    </div>
                </section>
            </main>
        </>
    );
};
export default ProductDetail;
