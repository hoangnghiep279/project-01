import { NewsOther } from "../components/News-media";
import { mediaImg2 } from "../imgs";
const NewsDetail = () => {
    return (
        <>
            <main className="lg:w-[1000px] m-auto font-open-sans">
                <div className="mt-24"></div>
                <h1 className="font-semibold text-2xl">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    ...
                </h1>
                <span className="text-[#A4A4A4] text-sm mt-14">20.10.2022</span>
                <div className="h-[1px] bg-[#a4a4a461] w-full mt-3"></div>
                <p className="mt-12">
                    Từ ngày 18 -21/10/2022 Kim Tín tham gia Triển lãm quốc tế ngành công nghiệp chế biến gỗ VietNamWood
                    diễn ra tại Trung tâm Triển lãm và Hội nghị Sài Gòn (SECC). Gian hàng Kim Tín được thiết kế theo
                    không gian mở với tông gỗ ấm áp giúp khách hàng dễ dàng tham quan và trải nghiệm sản phẩm.
                </p>
                <img src={mediaImg2} alt="" />
                <p className="mt-8">
                    Từ ngày 18 -21/10/2022 Kim Tín tham gia Triển lãm quốc tế ngành công nghiệp chế biến gỗ VietNamWood
                    diễn ra tại Trung tâm Triển lãm và Hội nghị Sài Gòn (SECC). Gian hàng Kim Tín được thiết kế theo
                    không gian mở với tông gỗ ấm áp giúp khách hàng dễ dàng tham quan và trải nghiệm sản phẩm.
                </p>

                <div className="py-9">
                    <h2 className="common_heading text-[2.5rem] mt-9 mb-4">TIN TỨC KHÁC</h2>
                    <div>
                        {" "}
                        <NewsOther />
                    </div>
                </div>
            </main>
        </>
    );
};
export default NewsDetail;
