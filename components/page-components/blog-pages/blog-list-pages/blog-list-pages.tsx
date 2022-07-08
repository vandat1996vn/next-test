// import styles from "./Blog-layout.module.scss";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogListItems from "../../../prop-items/prop-items-blogs/prop-items-pages.tsx";

export function BlogListPages() {
  const [key, setKey] = useState("home");

  return (
    <div className="blog-list__pages mb-60s">
      <div className="container lg:max-w-[1230px] mx-auto px-[15px]">
        <div className="form-filters__news mb-50s">
          <form>
            <div className="flex flex-wrap mx-[-15px] ">
              <div className="w-[66.66%] px-[15px]">
                <div className="search-news__pages groups-form__news p-[10px] rounded-[15px] ">
                  <input className="" placeholder="Tìm kiếm bài viết" />
                  <button className="btn-blues__alls">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                      data-v-6deb3081=""
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        class=""
                        data-v-6deb3081=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-[33.33%] px-[15px]">
                <div className="take-news__pages groups-form__news p-[10px] rounded-[15px] ">
                  <input className="" placeholder="Đằng kí nhận tin" />
                  <button className="btn-blues__alls">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      class="h-6 w-6"
                      data-v-6deb3081=""
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        data-v-6deb3081=""
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="news-list__pages">
          <Tabs
            defaultActiveKey="TatCa"
            id="uncontrolled-tab-example"
            className="mb-30s"
          >
            <Tabs eventKey="TatCa" title="Tất cả" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="AR/VR" title="AR/VR" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="BLOCKCHAIN" title="BLOCKCHAIN" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="DATASCIENCE" title="DATA SCIENCE" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="KinhDoanh" title="Kinh doanh" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="KyThuat" title="Kỹ thuật" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="Mobile" title="Mobile" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="ThietKe" title="Thiết kế" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="ThinhHanh" title="Thịnh hành" className="mb-40s">
              <BlogListItems />
            </Tabs>
            <Tabs eventKey="TinTuc" title="Tin tức" className="mb-40s">
              <BlogListItems />
            </Tabs>
          </Tabs>
        </div>
        <div className="pagination-alls">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default BlogListPages;
