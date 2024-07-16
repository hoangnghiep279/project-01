import { Link, NavLink } from "react-router-dom";

import Banner from "../components/Banner";
import Button from "../components/Button";
import { smallhome, prodImg1, prodImg2, prodImg3, mediaImg1 } from "../imgs";
const Productpage = () => {
    return (
        <>
            <main className="mt-24 font-montserrat">
                <div className="relative shrink-0 pt-[32%] w-full ">
                    <Banner banner={mediaImg1} />
                </div>
                <section>
                    <div className="lg:w-container m-auto w-container-default mt-5 font-open-sans pb-8">
                        <h4 className="flex items-center gap-3">
                            <img src={smallhome} alt="" />
                            <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">Sản phẩm</span>
                        </h4>
                    </div>
                </section>
                <section>
                    <div className="text-center mb-11">
                        <h1 className="common_heading text-[2.75rem]">
                            SẢN <span className="text-secondColor">PHẨM</span>
                        </h1>
                        <p>
                            Đạt chuẩn <b>Carb - P2/EPA </b>an toàn với sức khoẻ người tiêu dùng
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
                        {/* row 1 */}
                        <div>
                            <img src={prodImg1} alt="" />
                        </div>
                        <article className="p-4">
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        {/* row 2 */}
                        <article className="lg:ml-36 p-4">
                            {" "}
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        <div>
                            <img src={prodImg2} alt="" />
                        </div>
                        {/* row 3 */}
                        <div>
                            <img src={prodImg1} alt="" />
                        </div>
                        <article className="p-4">
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        {/* row 4 */}
                        <article className="lg:ml-36 p-4">
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        <div>
                            <img src={prodImg2} alt="" />
                        </div>
                        {/* row 5 */}
                        <div>
                            <img src={prodImg1} alt="" />
                        </div>
                        <article className="p-4">
                            {" "}
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        {/* row-6 */}
                        <article className="lg:ml-36 p-4">
                            <h3 className="uppercase common_heading text-2xl ">mdf thường</h3>
                            <p className="lg:w-[600px] my-5 font-[450]">
                                Ván MDF chống ẩm là vật liệu lý tưởng cho các đồ nội thất sử dụng trong nhà bếp, nhà tắm
                                và tại các nơi có môi trường độ ẩm cao. <br />
                                Khả năng chống ẩm của ván được tạo ra nhờ việc sử dụng keo melamine nhằm giúp ổn định
                                hình dạng ván cũng như giúp ván ít bị trương nở khi{" "}
                            </p>
                            <NavLink to="/product/detail">
                                {" "}
                                <Button words="XEM THÊM" padding="3" />
                            </NavLink>
                        </article>
                        <div>
                            <img src={prodImg2} alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Productpage;
