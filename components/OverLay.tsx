import React from "react";

const OverLay = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b4ef/e861/474dbbd27f8f50cc0c0dced87b0f6b76?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pcMjIOIWb7VaoLcbgoZBwjAWMw7tvr2YvdOe6GKk-bS7BRYSXYSYz83um78jSjyW8gqAlesQOYmGASvbKkm3jxlWNApvhqXLU37y387rrGL04BZeN~fYvR2aSuQgc47c6Yo5uk-IWYouaswxYGvtK2XMfcLIpAzpffMHFsibNhXQ-Y6RlxQNz2MnxOl1y5HESjpr2PFp32VWHJlhFVMxwmhar9QzUH8U8pIOGsHNghJw2QY~Bd948RxPnnd4oT7XI4QlIuCm6J6Wg6y86NxZFcZhapTsBDfB5FDu0W9fQBWG9kZxasRBoIQIZkHVcI~SXi83R~-IGcd5KRmQwxKitQ__')`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default OverLay;
