import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footers-mains bg-[#333] text-[#FFFFFF]">
      <div className="container mx-auto lg:max-w-[1230px] px-[15px] pb-[40px]">
        <div className="top-footers fs-14s py-[40px]">
          <div className="flex-alls flex flex-wrap mx-[-15px]">
            <div className="col-alls w-[40%] px-[15px]">
              <div className="box-footers">
                <h3 className="titles-footers fs-16s mb-15s titles-semi__alls">
                  Địa chỉ
                </h3>
                <div className="groups-locals__footers flex flex-wrap mx-[-15px]">
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          Hà Nội
                        </h3>
                        <p>
                          Tầng 8 tòa nhà Ford, 311 - 313 Trường Chinh, quận
                          Thanh Xuân, Hà Nội
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          Đà Nẵng
                        </h3>
                        <p>
                          Tầng 12, Vĩnh Trung Plaza, 255 - 257 Hùng Vương,
                          Phường Vĩnh Trung, Quận Thanh Khê, TP Đà Nẵng
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          Thanh Hóa
                        </h3>
                        <p>
                          Lô số MG 202, Khu đô thị Vincom, 27 Trần Phú, Phường
                          Điện Biên, TP Thanh Hóa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          TP. Hồ Chí Minh
                        </h3>
                        <p>
                          Tầng 7, toà nhà Citilight, 45 Võ Thị Sáu, Phường Đa
                          Kao, Quận 1, TPHCM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          Điện thoại
                        </h3>
                        <p>
                          <a href="#">1900 2013</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-alls w-[50%] px-[15px]">
                    <div className="box-locals__footers mb-15s">
                      <div className="icons-locals__footers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div className="intros-locals___footers">
                        <h3 className="titles-footers fs-14s titles-semi__alls">
                          Email
                        </h3>
                        <p>
                          <a href="#">info@gcosoftware.vn</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-alls w-[20%] px-[15px]">
              <div className="box-footers">
                <h3 className="titles-footers fs-16s mb-15s titles-semi__alls">
                  Các ngành
                </h3>
                <ul className="nav-footers">
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
              </div>
            </div>
            <div className="col-alls w-[20%] px-[15px]">
              <div className="box-footers">
                <h3 className="titles-footers fs-16s mb-15s titles-semi__alls">
                  Dịch vụ
                </h3>
                <ul className="nav-footers">
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
              </div>
            </div>
            <div className="col-alls w-[20%] px-[15px]">
              <div className="box-footers">
                <h3 className="titles-footers fs-16s mb-15s titles-semi__alls">
                  Tài nguyên
                </h3>
                <ul className="nav-footers">
                  <li>
                    <Link href="/">
                      <a>Về chúng tôi</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Tuyển dụng</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Quy định chung</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Chính sách bảo mật</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Hình thức thanh toán</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Giao nhận - Cài đặt</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Chính sách bảo trì</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Chính sách hoàn tiền</a>
                    </Link>
                  </li>
                </ul>
                <div className="app-footers">
                  <h3 className="titles-footers fs-16s mb-15s titles-semi__alls">
                    Liên kết
                  </h3>
                  <ul>
                    <li>
                      <a href="#" title="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footers py-[20px] flex flex-wrap items-center justify-between ">
          <p className="fs-12s">© 2021 GCO Software. Số QĐ thành lập: 0109817960 do sở KH & ĐT TP Hà Nội cấp ngày 15/11/2021.</p>
          <img src="./dcma-footer.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
