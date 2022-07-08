import styles from "./Blog-layout.module.scss";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function BlogListItems() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1"
    )
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="list-news__alls">
      <div className="flex flex-wrap mx-[-15px]">
        {posts.map((post) => (
          <div className="w-[33.33%] px-[15px]" key={post.id}>
            <div className="items-news__pages">
              <div className="img-news__pages">
                <Link href="../../page-components/blog-details/blog-details.tsx">
                  <a>
                    <img src={post.acf.avtq} alt={post.title.rendered} />
                  </a>
                </Link>
              </div>
              <div className="intros-news__pages">
                <h2>
                  <Link href="/">
                    <a className="names-news__pages fs-18s titles-semi__alls">
                      {post.title.rendered}
                    </a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogListItems;
