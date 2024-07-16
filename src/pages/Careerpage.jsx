import { useState } from "react";
import Banner from "../components/Banner";
import { smallhome, careerImg1, careerImg2, careerImg3, careerImg4, people, careerDecor, mediaImg1 } from "../imgs";
const Careerpage = () => {
    const [content, setContent] = useState(1);
    const handleClick = (index) => {
        setContent(index);
    };
    return (
        <>
            <main className="mt-24 font-open-sans">
                <div className="relative shrink-0 pt-[32%] w-full ">
                    <Banner banner={mediaImg1} />
                </div>
                <section>
                    <div className="lg:w-container m-auto w-container-default mt-5  ">
                        <h4 className="flex items-center gap-3">
                            <img src={smallhome} alt="" />
                            {content === 1 && (
                                <>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2"> Nghề nghiệp</span>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2"> Tuyển dụng</span>
                                </>
                            )}
                            {content === 2 && (
                                <>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">
                                        {" "}
                                        Thông Tin Truyền Thông
                                    </span>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2"> Nghề nghiệp</span>
                                </>
                            )}
                            {content === 3 && (
                                <>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">
                                        {" "}
                                        Thông Tin Truyền Thông
                                    </span>
                                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2"> Nghề nghiệp</span>
                                </>
                            )}
                        </h4>
                    </div>
                </section>
                <section className="py-8">
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => handleClick(1)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 1 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Tuyển dụng
                        </button>
                        <button
                            onClick={() => handleClick(2)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 2 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Lộ trình thăng tiến{" "}
                        </button>
                        <button
                            onClick={() => handleClick(3)}
                            className={` text-primaryColor border-2 border-primaryColor py-3 w-52 rounded-lg  inline-block text-base  ${
                                content === 3 ? "bg-primaryColor text-white" : ""
                            } `}
                        >
                            Môi trường làm việc
                        </button>
                    </div>
                </section>
                <section className="py-14">
                    {content === 1 && (
                        <>
                            <div className="lg:w-container w-container-default m-auto ">
                                <h1 className="common_heading text-2xl mb-8">
                                    TUYỂN DỤNG: NHÂN VIÊN SẢN XUẤT, LÁI XE NÂNG
                                </h1>
                                <p>
                                    Nhà máy chế biến Gỗ Nghệ An tuyển dụng <br />
                                    <br />
                                    1. Vị trí: Lái xe nâng – Bộ phận Ván thanh=&gt; Yêu cầu: Có chứng chỉ lái xe nâng,
                                    nhanh nhẹn, chịu khó….. <br />
                                    =&gt; Mô tả công việc:– Chịu trách nhiệm vận hành xe nâng để phục vụ các việc vận
                                    chuyển trong bộ phận: lựa gỗ, nạp gỗ lên băng tải, vận chuyển ván sau xẻ, chồng gỗ
                                    sau xếp kiện, nâng gỗ cho máy rong, vào, ra lò sấy… <br />– Theo dõi tình hình hoạt
                                    động của xe nâng, lịch bảo trì, sử dụng nhiên liệu. <br />
                                    <br />
                                    2. Nhân viên sản xuất <br />– Bộ phận Ván thanh <br />
                                    =&gt;Yêu cầu: Tốt nghiệp THCS trở lên, có sức khỏe, chăm chỉ, thật thà. Quyền lợi:
                                    <br />– Lương tháng 13– Thu nhập : 4.000.000 – 4.500.000 VND/ tháng <br />– Thử việc
                                    1 tháng– Hỗ trợ ăn ca– Khám sức khỏe định kỳ hàng năm <br />– Đóng bảo hiểm đầy đủ
                                    theo quy định. <br />– Các chế độ ngày lễ, tết, sinh nhật,….. <br />
                                    <br />
                                    Hồ sơ ứng viên có thể gửi trực tiếp về Công ty CP Lâm nghiệp Tháng Năm, xóm Hoa Bình
                                    Sơn, xã Nghĩa Hội, huyện Nghĩa Đàn, tỉnh Nghệ An hoặc email: hao.ct@mayforestry.vn
                                    hoặc liên hệ số điện thoại: 0382166261 (Mrs. Hảo) để biết thêm chi tiết. Thời gian
                                    nhận hồ sơ từ 06/09/2022 – 30/09/2022.
                                </p>
                            </div>
                        </>
                    )}
                    {content === 2 && (
                        <>
                            <div>
                                <div className="text-center">
                                    <h2 className="common_heading text-[2.75rem]">CHẾ ĐỘ ĐÃI NGỘ</h2>
                                    <p>
                                        Nhân viên chính thức của Công ty sẽ được nhận những chế độ đãi ngộ và phúc lợi
                                        như sau:
                                    </p>
                                </div>
                                <div className="flex flex-col items-center mt-10 lg:flex-row-reverse  lg:w-container w-container-default m-auto">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
                                        <div className="w-[344px] h-auto lg:h-[310px] p-6 rounded-tr-[50px] rounded-bl-[50px] border-primaryColor border-[1px]">
                                            <h3 className="common_heading mb-3 ">
                                                Lương + <span className="text-secondColor">Phụ cấp:</span>
                                            </h3>
                                            <ul className="list-disc ml-4">
                                                <li>Lương theo năng lực</li>
                                                <li>Lương theo năng suất làm việc</li>
                                                <li>Lương tháng 13</li>
                                                <li>
                                                    Các loại phụ cấp theo yêu cầu và tính chất công việc (phụ cấp xăng
                                                    xe, điện thoại…)
                                                </li>
                                                <li>Chế độ xem xét điều chỉnh lương hàng năm</li>
                                                <li>Công ty hỗ trợ ăn ca tại nhà máy</li>
                                            </ul>
                                        </div>
                                        <div className="w-[344px] h-auto lg:h-[310px] p-6 rounded-tr-[50px] rounded-bl-[50px] border-primaryColor border-[1px]">
                                            <h3 className="common_heading mb-3 ">Thưởng</h3>
                                            <ul className="list-disc ml-4">
                                                <li>Lương theo năng lực</li>
                                                <li>Lương theo năng suất làm việc</li>
                                                <li>Lương tháng 13</li>
                                                <li>
                                                    Các loại phụ cấp theo yêu cầu và tính chất công việc (phụ cấp xăng
                                                    xe, điện thoại…)
                                                </li>
                                                <li>Chế độ xem xét điều chỉnh lương hàng năm</li>
                                                <li>Công ty hỗ trợ ăn ca tại nhà máy</li>
                                            </ul>
                                        </div>
                                        <div className="w-[344px] h-auto lg:h-[310px] p-6 rounded-tr-[50px] rounded-bl-[50px] border-primaryColor border-[1px] lg:col-span-2 lg:m-auto">
                                            <h3 className="common_heading mb-3 ">Chế độ bảo hiểm</h3>
                                            <ul className="list-disc ml-4">
                                                <li>
                                                    Tham gia Bảo hiểm xã hội – Bảo hiểm y tế – Bảo hiểm thất nghiệp cho
                                                    tất cả nhân viên
                                                </li>
                                                <li> Tham gia gói Bảo hiểm sức khỏe đối với cấp quản lý</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 relative">
                                        <img src={people} alt="" />
                                        <img
                                            src={careerDecor}
                                            alt=""
                                            className="absolute top-8 left-[-214px] no-max-width w-[585px] z-[-1]"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-container m-auto w-container-default py-16">
                                    <h2 className="common_heading text-4xl uppercase">Chế độ phúc lợi khác</h2>
                                    <p className="text-2xl mt-3">
                                        Ngoài các chế độ theo quy định của Pháp luật, Công ty còn có các chế độ phúc lợi
                                        sau:
                                    </p>
                                    <div className="flex flex-col lg:flex-row gap-6 mt-10">
                                        <div className="lg:w-3/5">
                                            {" "}
                                            <img src={careerImg4} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p>
                                                Chính sách thăm hỏi khi : ốm đau, thai sản, kết hôn, tang chế cụ thể
                                                từng trường hợp
                                            </p>
                                            <ul className="list-disc ml-6">
                                                <li>
                                                    Tất cả nhân viên chính thức đều được nhận các khoản thưởng bằng tiền
                                                    (hoặc hiện vật có giá trị tương đương) vào các dịp:
                                                    <ul className="list-disc ml-6">
                                                        <li>Ngày Tết Dương lịch (1/1)</li>
                                                        <li>Ngày Quốc Tế Phụ Nữ (8/3)</li>
                                                        <li>Giỗ Tổ Hùng Vương (10/3 Âm Lịch)</li>
                                                        <li>
                                                            Ngày Quốc Tế Lao Động và giải phóng miền nam (1/5) 30/4)
                                                        </li>
                                                        <li>Ngày Quốc Tế Thiếu Nhi (1/6)</li>
                                                        <li>Ngày Quốc Khánh (2/9)</li>
                                                        <li>Ngày Tết trung thu (15/08 Âm lịch)</li>
                                                        <li>Ngày Thành Lập Công Ty</li>
                                                        <li>Ngày Sinh nhật nhân viên</li>
                                                        <li>Mừng tuổi đầu năm mới</li>
                                                    </ul>
                                                </li>
                                                <li>Tất cả nhân viên được khám sức khoẻ định kỳ hàng năm.</li>
                                                <li>Nhân viên được cấp phát bảo hộ lao động, đồng phục hàng năm</li>
                                                <li>
                                                    Hàng năm công ty tổ chức các chương trình Team buiding để gắn kết
                                                    nhân viên
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {content === 3 && (
                        <>
                            <div className="lg:w-container w-container-default m-auto  grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
                                <div className="text-left">
                                    <h2 className="common_heading text-2xl">Kế hoạch tuyển dụng:</h2>
                                    <p className="lg:w-[398px] mt-3 ">
                                        {" "}
                                        Hàng năm, căn cứ vào nhu cầu công việc, căn cứ vào kế hoạch hoạt động, các mục
                                        tiêu ngắn hạn và dài hạn mà Công ty có kế hoạch tuyển dụng nhân sự.
                                    </p>
                                </div>
                                <div>
                                    <img src={careerImg1} alt="" className="w-full h-full object-cover" />
                                </div>

                                <div>
                                    <img src={careerImg2} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-right">
                                    <h2 className="common_heading text-2xl">Thông báo tuyển dụng:</h2>
                                    <p className="lg:w-[398px] mt-3 ml-auto">
                                        {" "}
                                        Các yêu cầu tuyển dụng của Công ty trước hết sẽ được đăng tải trên Facebook,
                                        Website của Công ty và trên các trang Thông tin điện tử việc làm khác.
                                    </p>
                                </div>

                                <div className="text-left">
                                    <h2 className="common_heading text-2xl">Nguyên tắc tuyển dụng:</h2>
                                    <p className="lg:w-[398px] mt-3 ">
                                        {" "}
                                        Đảm bảo Công khai – Công bằng – Bình đẳng cho mọi đối tượng phù hợp. <br /> Ưu
                                        tiên nguồn nhân lực sẵn có của địa phương đối với các vị trí lao động giản đơn.
                                    </p>
                                </div>
                                <div>
                                    <img src={careerImg3} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </main>
        </>
    );
};
export default Careerpage;
