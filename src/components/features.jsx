import React from "react";

export const Features = () => {
  const featuresData = [
    {
      icon: "fa fa-line-chart",
      title: "Advanced SEO",
      text: "Boost your visibility with data-driven SEO strategies that deliver results."
    },
    {
      icon: "fa fa-code",
      title: "Web Development",
      text: "Custom, responsive, and scalable websites built for your business goals."
    },
    {
      icon: "fa fa-calculator",
      title: "Estimation Services",
      text: "Accurate project estimation to save costs and ensure timely delivery."
    },
    {
      icon: "fa fa-comments",
      title: "Reliable Communication",
      text: "Transparent and responsive support throughout every project phase."
    }
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {featuresData.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
