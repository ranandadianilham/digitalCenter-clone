import React from "react";

const HowWorkSection = () => {
  const contents = [
    {
      img: "./1-4-1.png",
      title: "Teamwork",
      subtitle:
        "Providing the best results is a lengthy process that requires cooperation",
    },
    {
      img: "./2-5-1.png",
      title: "Problem Solvers",
      subtitle:
        "Always giving you the newest ideas and information that fits your needs",
    },
    {
      img: "./3-5-1.png",
      title: "Offer Solutions",
      subtitle:
        "Ensuring that you achieve the desired outcomes effectively and efficiently",
    },
  ];
  return (
    <div className="howWeWork_section">
      <div
        style={{
          borderRadius: "20px",
          border: "2px solid black",
          padding: "5px 10px",
        }}
        className="roboto-bold"
      >
        <p>Processing</p>
      </div>
      <div
        style={{
          fontSize: "40px",
        }}
        className="roboto-black"
      >
        How We Work
      </div>
      <div className="roboto-medium">
        Find out how the digital center can help you work together.
      </div>
      <div className="content-items">
        {contents.map((item, i) => {
          return (
            <div key={item.title + "-" + i + "-" + item.title}>
              <div className="content-img">
                <img src={item.img} />
              </div>
              <div className="content-title roboto-black">{item.title}</div>
              <div className="content-sub roboto-medium">{item.subtitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWorkSection;
