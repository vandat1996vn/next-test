import styles from "./Blog-layout.module.scss";
import React from "react";
import Link from "next/link";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export function BlogPagesBanner() {
  return (
    <div className="blog-pages__banners">
      <div className="container lg:max-w-[1230px] mx-auto px-[15px]">
        <div className="flex flex-wrap items-center mx-[-15px] py-[50px]">
          <div className="w-[50%] px-[15px]">
            <div className="text-blog__banner">
              <h2 className="fs-60s mb-[15px] titles-semi__alls">Blog</h2>
              <p className="fs-18s">
                Chúng tôi muốn chia sẻ cái nhìn sâu sắc và kinh nghiệm của mình
                để giúp bạn tìm hiểu thêm về các chuyển đổi kỹ thuật số tuyệt
                vời. Để có thông tin, ý tưởng và thông điệp mạnh mẽ, hãy đọc các
                bài đăng trên blog của chúng tôi.
              </p>
            </div>
          </div>
          <div className="w-[50%] px-[15px]">
            <div className="img-banner__pages">
              <Player 
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_zvcyhdqv.json"
                style={{ height: "400px", width: "100%" }}
              >
                <Controls
                  visible={false}
                  buttons={[]}
                />
              </Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPagesBanner;
