import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router"; 
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/commons/header/header.tsx";
import Footer from "../components/commons/footer/footer.tsx";
import BlogPagesBanner from "../components/layout/blog-layout/blog-layout.tsx";

function Apps() {
  return (
    <div classNames="wraper">
      <Header />
      <BlogPagesBanner />
      <Footer />
    </div>
  );
}

export default Apps;
