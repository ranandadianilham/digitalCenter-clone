import React from "react";

const navContent = {
  title: "",
};

const Header = () => {
  return (
    <nav className="flex justify-between items-center sticky top-0 w-full bg-white z-50 px-16">
      <div className="nav-icon ml-10">
        <div>
          <img src="Logo-web-DCT-Footer.webp" width={200} />
        </div>
      </div>
      <div className="nav-links">
        <div
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
        >
          Digital Service
        </div>
        <div
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
        >
          Case Study
        </div>
        <div
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
        >
          Company
        </div>
        <div
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
        >
          Blog
        </div>
        <div
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
        >
          Others
        </div>
      </div>
      <div className="">
        <MenuIcon />
      </div>
    </nav>
  );
};

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 500 500"
    width={30}
  >
    <title>grid</title>
    <circle cx="50" cy="50" r="50" />
    <circle cx="250" cy="50" r="50" />
    <circle cx="450" cy="50" r="50" />
    <circle cx="50" cy="250" r="50" />
    <circle cx="250" cy="250" r="50" />
    <circle cx="450" cy="250" r="50" />
    <circle cx="50" cy="450" r="50" />
    <circle cx="250" cy="450" r="50" />
    <circle cx="450" cy="450" r="50" />
  </svg>
);

export default Header;
