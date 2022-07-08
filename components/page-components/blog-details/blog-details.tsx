import styles from "./Blog-layout.module.scss";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function BlogDetailsContent() {
  const [title, setTitle] = useState("");
  const [postsss, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=xay-dung-ung-dung-web-tien-bo-voi-kien-truc-jamstack"
    )
      .then((res) => res.json())
      .then((postsss) => {
        setPosts(postsss);
      });
  }, []);

  return (
    <div className="list-news__alls">
      <div className="flex flex-wrap mx-[-15px]">
        {postsss.map((postsss) => (
          <div className="content-news__details">
            <h2 className="post-title">{postsss.title.rendered}</h2>
            <p className="post-category__details"> {postsss.acf.cat.name} </p>
            <div className="text-news__details">{postsss.content.rendered}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetailsContent;
