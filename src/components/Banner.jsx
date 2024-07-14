import { banner, mediaImg1 } from "../imgs";
const Banner = () => {
    return (
        <>
            <img className="w-full h-full absolute top-0 left-0 object-cover" src={banner} alt="" />
        </>
    );
};
const SubBanner = () => {
    return (
        <>
            <img className="w-full h-full absolute top-0 left-0 object-cover" src={mediaImg1} alt="" />
        </>
    );
};
export { Banner, SubBanner };
