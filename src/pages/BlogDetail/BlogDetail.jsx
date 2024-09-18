import React from "react";
import "./BlogDetail.css";
import blog_img_1 from "../../assets/media/blog-1.png";

const BlogDetail = () => {
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
       borderRadius: "1rem"
     };
  return (
    <section className="blog-detail">
      <div className="container">
        <div className="blog-img " style={sectionStyle}>
          <h3>Welcome to EMS Training</h3>
        </div>

        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium reiciendis facere doloribus sed sint libero, quia autem
            aperiam. Commodi dignissimos velit, numquam temporibus quas
            consectetur facilis placeat nulla optio est. here are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
