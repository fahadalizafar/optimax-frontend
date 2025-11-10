import React from "react";

export const Services = () => {
  const servicesData = [
    {
      icon: "fa-search", // SEO icon
      name: "SEO",
      text: "Rank higher on search engines with data-driven SEO strategies that increase traffic, enhance visibility, and attract the right audience to your business."
    },
    {
      icon: "fa-code", // Web Development icon
      name: "Web Development",
      text: "Modern, responsive, and scalable websites with chatbot solutions, workflow automation, and Python scripting — perfectly tailored to your business goals."
    },
    {
      icon: "fa-calculator", // Estimation icon
      name: "Estimation Services",
      text: "Accurate and transparent project estimation that helps you stay on budget, meet deadlines, and achieve flawless execution."
    }
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide professional SEO, Web Development, and Estimation
            services to help international clients grow their businesses.
          </p>
        </div>
        <div className="row">
          {servicesData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <i className={`fa ${d.icon}`}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
