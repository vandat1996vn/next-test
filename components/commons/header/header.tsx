import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="header-mains">
        <div className="container mx-auto lg:max-w-[1230px] pt-[20px] pb-[20px] pl-[15px] pr-[15px] flex flex-wrap items-center">
          <div className="logo-mains w-[150px]">
            <img src="./logo-mains.svg" alt="" />
          </div>
          <div className="right-headers ml-auto">
            <div className="menu-desktop">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Ngành</a>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Công nghệ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tiếp thị & Quảng cáo</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Truyền thông & Giải trí</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Logicstics & Vận tải</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Giáo dục & Đào tạo trực tuyến</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Bán lẻ & Thương mại điện tử</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Công ty Product</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Doanh nghiệp vừa và nhỏ (SME)</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    <a>Dịch vụ</a>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Bảo trì và nâng cấp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tư vấn & Phát triển phần mềm</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Phát triển ứng dụng di động</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tư vấn & Thiết kế website</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Dịch vụ kiểm thử phần mềm</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Nhóm phát triển có chuyên môn cao</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Dịch vụ IT Offshore & Out Sourcing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Phát triển phần mềm tùy chỉnh</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    <a>Dự án</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Về chúng tôi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Tuyển dụng</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Liên hệ</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
