import React from 'react'
import section_img from "../../assets/media/services-page.jpg";
import "./BlogsPage.css"
import PageHeading from '../../components/PageHeading/PageHeading';
import blog_img_1 from "../../assets/media/blog-1.png"
import blog_img_2 from "../../assets/media/blog-2.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { NavLink } from "react-router-dom";

const BlogsPage = () => {
   const blogs = [
     {
       id: 1,
       title: "Welcome to EMS Training",
       img: blog_img_1,
       btn_text: "Read now",
       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     },
     {
       id: 2,
       title: "CUSTOM BUILT CENTRE 2022",
       img: blog_img_2,
       btn_text: "Read now",
       text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
     },
   ];

  return (
    <div className="page">
      <PageHeading img={section_img} title={"Blogs"} />

      <section className="blogs">
        <div className="container">
          {blogs.map((blog) => {
            return (
              <NavLink to="/blogDetail">
                <ProjectCard key={blog.id} title={blog.title} img={blog.img} btn_text={blog.btn_text} />
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default BlogsPage
