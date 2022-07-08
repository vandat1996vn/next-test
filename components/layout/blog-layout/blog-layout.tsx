import styles from "./Blog-layout.module.scss";
import React from "react";
import Link from "next/link";
import BlogPagesBanner from "../../page-components/blog-pages/blog-pages-banner/blog-pages-banner.tsx";
import BlogListPages from "../../page-components/blog-pages/blog-list-pages/blog-list-pages.tsx";
import BlogPagesConTacts from "../../page-components/blog-pages/blog-pages-contacts/blog-pages-form.tsx";

export function Blog() {
  return (
    <div className="content-blog__pages">
      <BlogPagesBanner />
      <BlogListPages />
      <BlogPagesConTacts />
    </div>
  );
}

export default Blog;
