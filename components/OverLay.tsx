import BannerImage from "@/public/assets/banner.png";

const OverLay = () => <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BannerImage.src})` }}><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,17,.75),rgba(10,25,17,.34)_55%,rgba(10,25,17,.12))]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,25,17,.55),transparent_45%)]" /></div>;

export default OverLay;
