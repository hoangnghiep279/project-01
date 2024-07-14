import { location, contact, user, mail } from "../imgs";
const Contact = ({ heading }) => {
    return (
        <>
            <h2 className="font-montserrat text-3xl font-extrabold text-primaryColor ">{heading}</h2>
            <h3 className="font-bold text-primaryColor text-xl mt-6">NHÀ MÁY</h3>
            <p className="flex items-center text-base gap-3 my-3">
                <img src={location} alt="" />
                Nhà máy chế biến gỗ Nghệ An, xã Nghĩa Hội, huyện Nghĩa Đàn, tỉnh Nghệ An, Việt Nam
            </p>
            <p className="flex items-center text-base gap-3 my-3">
                <img src={contact} alt="" />
                Điện thoại: +84 (04) 3938 768
            </p>
            <h3 className="font-bold text-primaryColor text-xl mt-6">PHÒNG KINH DOANH</h3>
            <p className="flex items-center text-base gap-3 my-3">
                <img src={location} alt="" />
                162 Khuất Duy Tiến, Quận Thanh Xuân, TP Hà Nội
            </p>
            <div className="w-[280px] bg-primaryColor h-[2px] my-4"></div>
            <div className="flex items-center gap-3 my-3">
                <img src={user} alt="" />
                <p className="font-bold">
                    Mr. Trần Xuân Quỳnh
                    <span className="block text-sm font-medium">(Giám đốc Kinh doanh)</span>
                </p>
            </div>
            <p className="flex items-center text-base gap-3 my-3">
                <img src={contact} alt="" />
                Điện thoại: 0978 668 786
            </p>
            <p className="flex items-center text-base gap-3 my-3">
                <img src={mail} alt="" />
                Email: quynh.tx1@eximgreen.vn - quynh.tx@mayforestry.vn
            </p>
        </>
    );
};
export default Contact;
