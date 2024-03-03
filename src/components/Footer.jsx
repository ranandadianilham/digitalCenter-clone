import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white ">
      <div className="footer-top grid grid-cols-12 w-full px-10">
        <div className="col-span-4 h-full flex flex-col justify-center">
          <img src="Logo-web-DCT-Putih.webp" width={100} />
          <p>
            Transform your business to maximize its potential growth through
            in-depth business analysis and the implementation of the latest
            technology
          </p>
        </div>
        <div className="col-span-1 flex flex-col border border-gray-700">
          <a className="border-b border-gray-700 py-5 text-center" href="#">
            LINKEDIN
          </a>
          <a className="border-b border-gray-700 py-10 text-center" href="#">
            INSTAGRAM
          </a>
        </div>
        <div className="col-span-7 text-right ">
          <a
            style={{
              fontSize: "158px",
            }}
            href="#"
          >
            LET'S TALK
          </a>
        </div>
      </div>
      <div className="footer-bottom border-t border-gray-700 flex justify-between px-10 h-28 ">
        <div className="my-auto">
          <p className="flex flex-col">
            © 2023 | Alrights reserved by{" "}
            <a href="#" target="_blank">
              Digitalcenter.id
            </a>
          </p>
        </div>
        <div className="flex items-center gap-10 roboto-medium">
          <div>
            <a>ABOUT US</a>
          </div>
          <div>
            <a>FAQ</a>
          </div>
          <div>
            <a>CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
