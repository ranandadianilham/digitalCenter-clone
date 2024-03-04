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
        <a
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
          href="#"
        >
          Digital Service
        </a>
        <a
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
          href="#"
        >
          Case Study
        </a>
        <a
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
          href="#"
        >
          Company
        </a>
        <a
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
          href="#"
        >
          Blog
        </a>
        <a
          className="roboto-medium"
          style={{
            fontSize: "23px",
          }}
          href="#"
        >
          Others
        </a>
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
