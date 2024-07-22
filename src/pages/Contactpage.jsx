import { banner3, smallhome } from "../imgs";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
const Contactpage = () => {
    return (
        <>
            <main className="mt-24 font-open-sans">
                <div className="relative shrink-0 pt-[32%] w-full ">
                    <Banner banner={banner3} />
                </div>
                <div className="lg:w-container m-auto w-container-default mt-5 font-open-sans pb-8">
                    <h4 className="flex items-center gap-3">
                        <img src={smallhome} alt="" />
                        <span className="pl-2 text-sm text-[#AFAFAF] border-l-2">Liên hệ</span>
                    </h4>
                </div>
                <section className="lg:w-container w-container-default m-auto">
                    <h1></h1>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 py-9">
                        <div className="text-base">
                            <Contact />
                        </div>
                        <div>
                            <div className="w-full">
                                <iframe
                                    width="100%"
                                    height="448px"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=auto&amp;hl=en&amp;q=T%C3%A2n%20L%E1%BA%ADp,%20%C4%90%E1%BB%93ng%20Ph%C3%BA,%20B%C3%ACnh%20Ph%C6%B0%E1%BB%9Bc,%20Vi%E1%BB%87t%20Nam+(Khu%20c%C3%B4ng%20nghi%E1%BB%87p%20%C4%91%E1%BB%93ng%20ph%C3%BA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                >
                                    <a href="https://www.gps.ie/">gps systems</a>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <form action="" className="py-6">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[712px] m-auto gap-6">
                        <div className="lg:w-[343px] lg:h-[40px] border-2 border-[#dcdcdcb3] rounded-lg p-2">
                            <input
                                className="w-full h-full border-none outline-none"
                                type="text"
                                placeholder="Họ và tên"
                            />
                        </div>
                        <div className="lg:w-[343px] lg:h-[40px] border-2 border-[#dcdcdcb3] rounded-lg p-2">
                            <input className="w-full h-full border-none outline-none" type="text" placeholder="Email" />
                        </div>
                        <div className="lg:w-[343px] lg:h-[40px] border-2 border-[#dcdcdcb3] rounded-lg p-2">
                            <input
                                className="w-full h-full border-none outline-none"
                                type="text"
                                placeholder="Số điện thoại"
                            />
                        </div>
                        <div className="lg:w-[343px] lg:h-[40px] border-2 border-[#dcdcdcb3] rounded-lg p-2">
                            <input
                                className="w-full h-full border-none outline-none"
                                type="text"
                                placeholder="Tiêu đề"
                            />
                        </div>
                        <div className="w-full lg:col-span-2 h-[88px] border-2 border-[#dcdcdcb3] rounded-lg p-2">
                            <textarea
                                className="w-full h-full border-none outline-none "
                                type="text"
                                placeholder="Nội dung"
                            />
                        </div>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="lg:col-span-2 ml-auto py-2 rounded-lg w-[159px] border-2 border-[#dcdcdcb3] hover:bg-primaryColor hover:text-white"
                        >
                            Gửi
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};
export default Contactpage;
