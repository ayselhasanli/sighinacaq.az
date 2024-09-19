import React, {useState, useEffect} from 'react'
import section_img from "../../assets/media/services-page.jpg";
import "./BlogsPage.css"
import PageHeading from '../../components/PageHeading/PageHeading';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { NavLink } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="page">
      <PageHeading img={section_img} title={"Blogs"} />

      <section className="blogs">
        <div className="container">
          {blogs.map((blog) => {
            return (
              <NavLink to={`/blogs/${blog.id}`}>
                <ProjectCard key={blog.id} name={blog.name} img={blog.img} btn_text={blog.btn_text} />
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default BlogsPage
