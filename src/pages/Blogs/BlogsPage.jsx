import React from 'react'
import section_img from "../../assets/media/services-page.jpg";
import "./BlogsPage.css"
import PageHeading from '../../components/PageHeading/PageHeading';

const BlogsPage = () => {
  return (
    <div className="page">
      <PageHeading img={section_img} title={"Blogs"} />
    </div>
  );
}

export default BlogsPage
