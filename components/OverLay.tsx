import React from "react";
import BannerImage from "@/public/assets/banner.png";

const OverLay = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default OverLay;
