import React from "react";

export const Testimonials = () => {
  const testimonialsData = [
    {
      img: "img/testimonials/01.jpg",
      text: "OptiMax Solutions completely transformed our online presence. Within months, our website traffic doubled and leads increased significantly. Their team is highly professional and truly understands SEO.",
      name: "Sarah L., Marketing Manager (USA)",
    },
    {
      img: "img/testimonials/02.jpg",
      text: "We were struggling with slow and outdated websites, but OptiMax Solutions delivered a modern, fast, and user-friendly platform. The whole process was smooth and stress-free.",
      name: "James K., Founder of StartupHub (UK)",
    },
    {
      img: "img/testimonials/03.jpg",
      text: "Their estimation services are spot on. We saved both time and costs on our projects thanks to their detailed and reliable insights.",
      name: "Maria P., Project Manager (Canada)",
    },
    {
      img: "img/testimonials/04.jpg",
      text: "OptiMax Solutions is a partner we can truly rely on. Their communication, creativity, and technical expertise set them apart from others in the industry.",
      name: "Daniel R., Business Owner (Australia)",
    },
    {
      img: "img/testimonials/05.jpg",
      text: "We wanted to expand our reach internationally and OptiMax Solutions helped us achieve exactly that. Their SEO strategies brought us consistent clients from Europe and beyond.",
      name: "Emma T., Marketing Lead (Germany)",
    },
    {
      img: "img/testimonials/06.jpg",
      text: "From start to finish, their team was cooperative and transparent. They delivered a website that not only looks great but also performs perfectly.",
      name: "Ahmed K., Entrepreneur (UAE)",
    },
  ];

  return (
    <div id="testimonials" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: "30px" }}>
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {testimonialsData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4" style={{ marginBottom: "25px" }}>
              <div
                className="testimonial-box"
                style={{
                  background: "#fff",
                  padding: "18px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  textAlign: "center",
                  minHeight: "280px", // fix same height cards
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <div>
                  <div className="testimonial-image" style={{ marginBottom: "12px" }}>
                    <img
                      src={d.img}
                      alt={d.name}
                      style={{
                        width: "75px",
                        height: "75px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        margin: "auto",
                      }}
                    />
                  </div>
                  <p style={{ fontStyle: "italic", fontSize: "14px", color: "#555", margin: 0 }}>
                    "{d.text}"
                  </p>
                </div>
                <div
                  className="testimonial-meta"
                  style={{
                    marginTop: "10px",
                    fontWeight: "600",
                    color: "#333",
                    fontSize: "14px",
                  }}
                >
                  - {d.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
