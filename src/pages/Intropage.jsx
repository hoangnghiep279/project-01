import Banner from "../components/Banner";
import Contact from "../components/Contact";
import { Subnav } from "../components/Introcpnt";
import {
    logo,
    smallhome,
    introimg1,
    introimg2,
    introimg3,
    introimg4,
    introimg5,
    introimg6,
    introimg7,
    introAvatar,
    introdecor1,
    introdecor2,
    introLogo1,
    introLogo2,
    introLogo3,
    introLogo4,
    introLogo5,
    homeContact1,
    banner,
} from "../imgs";
const Intropage = () => {
    return (
        <main className="mt-24">
            <div className="relative shrink-0 pt-[32%] w-full ">
                <Banner banner={banner} />
            </div>
            <div>
                <Subnav />
            </div>
            <section className="lg:w-container m-auto w-container-default mt-5 font-open-sans pb-8">
                <h4 className="flex items-center gap-3">
                    <img src={smallhome} alt="" />
                    <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">Giới thiệu tổng quan</span>
                </h4>
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-13 gap-y-28 mt-10">
                    <div>
                        <img
                            src={introimg1}
                            alt=""
                            className="lg:w-[333px] lg:h-[521px] w-[273px] h-[427px] object-cover"
                        />
                    </div>
                    <article>
                        <h2 className="common_heading text-[2.75rem]">GIỚI THIỆU</h2>
                        <p className="my-8">
                            Công ty Cổ phần Lâm Nghiệp Tháng Năm được thành lập vào năm 2013, nằm trong khuôn khổ dự án
                            chế biến gỗ và phát triển lâm nghiệp bền vững tại tỉnh Nghệ An. Với mục tiêu khai thác những
                            ưu thế về địa lý để phát triển kinh tế vùng, dự án đã được phê duyệt và đi vào hoạt động.
                        </p>
                        <h2 className="font-bold text-secondColor lg:text-4xl text-2xl">SINCE 2013</h2>
                        <img src={logo} alt="" className="lg:w-[402px] w-[259.73px] mt-[-40px] ml-auto" />
                    </article>

                    <article>
                        <h2 className="common_heading text-[2.75rem]">
                            VỊ TRÍ
                            <span className="text-secondColor"> ĐỊA LÝ</span>
                        </h2>
                        <p className="mt-5 font-semibold">
                            Nhà máy chế biến gỗ Nghệ An, với tổng diện tích 40 ha, thuộc sở hữu của Công ty Cổ phần Lâm
                            Nghiệp Tháng Năm, là khu phức hợp nhà máy – văn phòng của công ty. Tọa lạc tại xã Nghĩa Hội,
                            huyện Nghĩa Đàn, tỉnh Nghệ An.
                        </p>
                        <p className="mt-5">
                            Nhà máy nằm trong vùng nguyên liệu dồi dào cùng những điều kiện về khí hậu, thủy văn thuận
                            lợi cho sự phát triển của ngành công nghiệp gỗ.{" "}
                        </p>
                        <p className="mt-5">
                            Đồng thời, nhà máy có ưu thế về vị trí địa lý khi gần với trung tâm kinh tế lớn thứ 2 của
                            Việt Nam – Thành phố Hà Nội cùng các cảng biển lớn thuận lợi cho giao thương quốc tế.
                        </p>
                    </article>
                    <div className="relative">
                        <img src={introimg2} alt="" className="lg:w-[545px] lg:h-[155px] w-full h-auto ml-auto " />
                        <img
                            src={introimg3}
                            alt=""
                            className="lg:w-[545px] lg:h-[155px] w-full h-auto  ml-auto lg:mt-4 mt-8"
                        />
                        <img src={introdecor1} alt="" className="absolute right-[42px] top-[57px] " />
                        <img src={introdecor2} alt="" className="absolute right-[56px] bottom-[37px]" />
                    </div>
                </div>
            </section>
            <section className="lg:pt-20 lg:pb-40 py-8 font-montserrat">
                <article className="lg:w-container w-container-default m-auto">
                    <h2 className="common_heading text-[2.75rem] text-center mb-6">QUY HOẠCH</h2>
                    <p className="text-center font-light">
                        Được chú trọng từ khâu đầu tư và quy hoạch, cùng sự tư vấn chuyên sâu từ các chuyên gia hàng
                        đầu, Công ty Cổ phần Lâm Nghiệp Tháng Năm đã đầu tư hai dây chuyền thiết bị tiên tiến nhằm phục
                        vụ cho việc sản xuất ván ghép thanh và ván sợi MDF. Trong đó, dự án sản xuất ván MDF được trang
                        bị hệ thống định hình ván, hệ thống ép và xử lý ván thô đồng bộ, nhập khẩu từ Dieffenbacher GmbH
                        của Đức, hệ thống nghiền sợi từ Metso Paper Sweden AB của Thụy Điển, hệ thống băm dăm, làm sạch
                        và lưu trữ từ Hombak/ Carpenterie Metalliche de Colzate S.r.l, hệ thống chà nhám từ Steinemann
                        Technology AG, và hệ thống cắt ván từ Anthon GmbH…
                    </p>
                    <p className="text-center font-light">
                        Dưới sự quản lý và giám sát của Công ty Cổ phần Lâm Nghiệp Tháng Năm cùng các chuyên gia nước
                        ngoài, sản phẩm của chúng tôi có thể đáp ứng những tiêu chuẩn khắt khe nhất. Chúng tôi hướng đến
                        sự hài lòng của khách hàng đối với chất lượng sản phẩm và dịch vụ, cũng như sự phát triển bền
                        vững của ngành lâm nghiệp trong tương lai.
                    </p>
                </article>
                <div className="flex gap-10 justify-around items-center mt-6 overflow-x-auto w-full">
                    <img src={introLogo1} alt="" className="flex-shrink-0 w-auto h-auto max-w-full max-h-full" />
                    <img src={introLogo2} alt="" className="flex-shrink-0 w-auto h-auto max-w-full max-h-full" />
                    <img src={introLogo3} alt="" className="flex-shrink-0 w-auto h-auto max-w-full max-h-full" />
                    <img src={introLogo4} alt="" className="flex-shrink-0 w-auto h-auto max-w-full max-h-full" />
                    <img src={introLogo5} alt="" className="flex-shrink-0 w-auto h-auto max-w-full max-h-full" />
                </div>
            </section>
            <section className={`bg-intro-bg bg-cover bg-center lg:h-[324px]`}>
                <div className="font-montserrat lg:flex items-center lg:justify-start flex-center flex-col lg:flex-row lg:gap-16 gap-5 lg:ml-20 py-5">
                    <div className="h-[200px] w-[200px] rounded-full">
                        <img src={introAvatar} alt="" className="w-full h-full rounded-full" />
                    </div>
                    <div>
                        <p className="text-[#FBFBFB] text-xl font-bold lg:text-start text-center">TỔNG GIÁM ĐỐC</p>
                        <h3 className="text-secondColor text-[2rem] font-bold lg:text-start text-center">
                            NGUYỄN TẤT SƠN
                        </h3>
                        <p className="text-[#FBFBFB] lg:w-[586px]  text-center">
                            “Các sản phẩm của chúng tôi, nhờ sự kiểm soát nghiêm ngặt từ khâu nguyên liệu đầu vào tới
                            công nghệ hiện đại và quy trình kiểm soát chất lượng khắt khe, nhất định sẽ mang tới sự hài
                            lòng cho quý khách hàng.”
                        </p>
                    </div>
                </div>
            </section>
            <section className="font-open-sans text-center  lg:w-[1000px] m-auto pt-7 pb-20 w-container-default">
                <h3 className="text-secondColor lg:text-2xl font-semibold">Cảm ơn quý khách hàng đã đồng hành cùng</h3>
                <h2 className="common_heading lg:text-[2rem] text-2xl my-5">Lâm Nghiệp Tháng Năm</h2>
                <p className="font-light ">
                    Nhà máy chế biến gỗ Nghệ An đã được khởi công xây dựng vào tháng 2 năm 2013, với mục đích ban đầu là
                    trở thành nhà máy gỗ có công nghệ tiên tiến nhất Đông Nam Á. Nằm giữa vùng nguyên liệu dồi dào trù
                    phú rộng 45.000 hectares của khu vực phía Tây tỉnh Nghệ An, nhà máy chúng tôi được ưu đãi với nguồn
                    nguyên liệu đầu vào ổn định. Đồng thời, nông dân nơi đây có điều kiện mở rộng đất canh tác song song
                    với sự phát triển của nhà máy, ấy là chúng tôi đã đóng góp cho sự phát triển bền vững của ngành lâm
                    nghiệp cũng như chính sách an dân của tỉnh Nghệ An nói riêng và cả nước nói chung. Mang trong mình
                    sứ mệnh áp dụng công nghệ tiên tiến để tiết kiệm năng lượng và tiên phong trong công cuộc phát triển
                    lâm nghiệp bền vững theo tiêu chí “xanh – sạch – thân thiện với môi trường”, Nhà máy chế biến gỗ
                    Nghệ An sỡ hữu 2 lợi thế cạnh tranh về công nghê, đó là:
                    <br />– Sự kết hợp hài hòa giữa công nghệ sản xuất ván ghép thanh và công nghệ sản xuất ván MDF: nhà
                    máy ván ghép thanh sử dụng những phần giá trị nhất của thanh gỗ, trong khi đó, những phần còn lại
                    như cành, rễ cùng các phụ phẩm của gỗ nguyên liệu sẽ được tận dụng, chuyển đến nhà máy MDF để chế
                    tạo gỗ công nghiệp. Sự kết hợp hài hòa này là cách tận dụng giá trị tối ưu của gỗ nguyên liệu.
                    <br />– Áp dụng triệt để công nghệ năng lượng xanh: năng lượng mặt trời – nguồn năng lượng có thể
                    tái tạo được ưu tiên sử dụng ở nhà máy chúng tôi. Bên cạnh đó, chúng tôi rất chú trọng tới việc tận
                    dụng tất cả nguồn năng lượng để bảo vệ môi trường. Những vụn gỗ và các phế phẩm nguyên liệu sẽ được
                    thug om và đưa tới nhà máy năng lượng để xử lý và tái sản xuất năng lượng, phục vụ cho quá trình sản
                    xuất gỗ. Nhờ đó, vấn đề ô nhiễm môi trường được chúng tôi giải quyết triệt để. Chúng tôi là nhà máy
                    gỗ đầu tiên tại tỉnh Nghệ An cũng như trên cả nước thành công trong việc áp dụng năng lượng tái tạo
                    để bảo vệ môi trường. Đồng thời, nhà máy chúng tôi là một điểm sáng mang tính bước ngoặt trong công
                    cuộc phát triển kinh tế rừng và nâng cao hiệu quả kinh tế ở tỉnh Nghệ An. Các sản phẩm của chúng
                    tôi, nhờ sự kiểm soát nghiêm ngặt từ khâu nguyên liệu đầu vào tới công nghệ hiện đại và quy trình
                    kiểm soát chất lượng khắt khe, nhất định sẽ mang tới sự hài lòng cho quý khách hàng.
                </p>
                <p className="italic text-primaryColor font-light mt-4">
                    <b className="not-italic block text-[#000] font-bold">Thân ái,</b>
                    Công ty Cổ Lâm nghiệp tháng Năm / Tổng giám đốc / Nguyễn Tất Sơn
                </p>
            </section>
            <section className="lg:w-container m-auto w-container-default py-28">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <img src={introimg5} alt="" className="w-full  object-cover" />
                        <p className="mt-6 ">
                            Xây dựng và phát triển vùng nguyên liệu bền vững là một trong những chiến lược quan trọng
                            của công ty Cổ phần Lâm Nghiệp Tháng Năm kể từ ngày thành lập. Ủy Ban Nhân Dân Tỉnh Nghệ An
                            đã phê duyệt vùng quy hoạch có diện tích 50,000 hecta nằm trên địa bàn của 6 tỉnh miền Tây
                            Nghệ An. Theo quyết định số 4212/QĐ-UBND ban hành ngày 20/09/2013 về việc “Phê duyệt diện
                            tích quy hoạch vùng nguyên liệu cho Nhà máy chế biến gỗ Nghệ An”
                        </p>
                    </div>
                    <div>
                        <img src={introimg6} alt="" className="w-full  object-cover" />
                        <p className="mt-6 ">
                            Diện tích cho thuê là 12,589 hecta. Trong số này, 11,000 hecta được sử dụng để phát triển
                            rừng tự trồng nhằm đảm bảo nguồn nguyên liệu cho nhà máy chế biến gỗ. Dịch tích còn lại là
                            của các nông trường quốc doanh và các hộ dân. <br />
                            Diện tích của các đơn vị liên kết là 38.422 hecta. <br />
                            Vùng nguyên liệu nằm tập trung và liên tục trong bán kính 100km từ nhà máy, trên các tuyến
                            đường thuận tiện cho việc vận chuyển nguyên liệu.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-28 bg-primary01 ">
                <div className="lg:w-container w-container-default m-auto grid lg:grid-cols-2 grid-cols-1 gap-24">
                    <div>
                        <Contact heading="KÊNH PHÂN PHỐI" />
                    </div>
                    <div className="relative">
                        <img src={introimg7} alt="" className="w-[95%]" />
                        <img
                            src={homeContact1}
                            alt=""
                            className="lg:w-52 w-28 absolute lg:right-[-34px] right-[-10px] lg:bottom-[-44px] bottom-[-30px]"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Intropage;
