import styles from "./Blog-layout.module.scss";
import React from "react";
import Link from "next/link";

export function BlogPagesConTacts() {
  return (
    <div className="blog-contacts__pages py-[40px]">
      <div className="container lg:max-w-[1230px] mx-auto px-[15px]">
        <div className="flex flex-wrap">
          <div className="w-[40%]">
            <div className="img-contacts__blogs">
              <img src="./img-contacts-blogs.webp" alt="" />
            </div>
          </div>
          <div className="w-[60%]">
            <div className="blog-contacts__forms">
              <div className="text-contacts__blogs mb-60s">
                <h2 className="fs-60s titles-semi__alls mb-15s">
                  Liên hệ với chúng tôi
                </h2>
                <p>
                  Bạn có thể gửi tất câu hỏi và thắc mắc của bạn bằng cách sử
                  dụng biểu mẫu này. Chúng tôi sẽ phản hồi trong thời gian ngắn
                  nhất.
                </p>
              </div>
              <div className="form-contacts__blogs">
                <form>
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="w-[50%] px-[15px] mb-30s">
                      <input
                        type="text"
                        placeholder="Họ tên"
                        className="pt-[10px] control-alls input-alls"
                      />
                    </div>
                    <div className="w-[50%] px-[15px] mb-30s">
                      <input
                        type="text"
                        placeholder="Họ tên"
                        className="pt-[10px] control-alls input-alls"
                      />
                    </div>
                    <div className="w-[100%] px-[15px] mb-30s">
                      <input
                        type="text"
                        placeholder="Email"
                        className="pt-[10px] control-alls input-alls"
                      />
                    </div>
                    <div className="w-[100%] px-[15px] mb-30s">
                      <textarea
                        type="text"
                        rows="4"
                        placeholder="Nội dung"
                        className="pt-[10px] control-alls"
                      ></textarea>
                    </div>
                  </div>
                  <button className="btn-blues__alls mx-auto">Gửi tin nhắn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPagesConTacts;
