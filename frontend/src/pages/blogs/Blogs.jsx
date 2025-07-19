import React from "react";
import blogData from "../../data/blogs.json";

const Blogs = () => {
  // console.log(blogData);
  return (
    <section className="section__container blog__container">
      <h2 className="section__header">Latest From BLogs</h2>
      <p className="section__subheader">
        Lorem ipsum dolor sit. Aenean commodo ligula eget dolor
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {/* blog image */}
            <img src={blog.imageUrl} alt="blog images" />

            {/* blog subtitle */}
            <div className="blog__card__content">
              <h6>{blog.subtitle}</h6>
              <h4>{blog.title}</h4>
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
