import { banner, banner3, mediaImg1 } from "../imgs";
const Banner = ({ banner }) => {
    return (
        <>
            <img className="w-full h-full absolute top-0 left-0 object-cover" src={banner} alt="" />
        </>
    );
};

export default Banner;
