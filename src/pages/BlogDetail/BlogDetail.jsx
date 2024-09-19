import React, {useState, useEffect} from "react";
import "./BlogDetail.css";
import blog_img_1 from "../../assets/media/blog-1.png";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  console.log(id)
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36)),
    url(${blog_img_1})`,
    backgroundSize: "cover",
    width: "100%",
    maxHeight: "43rem",
    height: "43rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
  };
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <section className="blog-detail">
        {blogs.map((blog) => {
          if(blog.id == id){
            return (
              <div className="container">
                <div
                  className="blog-img "
                  style={{
                    background: `url(${blog.img})`,
                    backgroundSize: "cover",
                    width: "100%",
                    maxHeight: "43rem",
                    height: "43rem",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1rem",
                  }}
                >
                  <h3>{blog.name}</h3>
                </div>

                <div className="blog-content">
                  <p>{blog.text}</p>
                </div>
              </div>
            );
          }
        })}
    </section>
  );
};

export default BlogDetail;
