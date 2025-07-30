import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinFilled,
  XOutlined,
} from "@ant-design/icons";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
            <h5 className="font-bold text-4xl mb-4">
              <button>
                <Link
                  to={"https://www.linkedin.com/in/emmanuel-ihenacho-6513731b2"}
                >
                  <LinkedinFilled className="mr-2" />
                </Link>
                <Link to={"https://www.instagram.com/_ihenacho"}>
                  <InstagramOutlined className="mr-2" />
                </Link>
                <Link to={"https://x.com/utdtariq"}>
                  <XOutlined className="mr-2" />
                </Link>
                <Link to={"https://github.com/Tariq-Ihenacho"}>
                  <GithubOutlined className="mr-2" />
                </Link>
              </button>
            </h5>
            <p className="text-black">Follow my Social Media Accounts.</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
            <h5 className="font-bold text-3xl mb-4">Contacts</h5>
            <p className="text-black font-semibold flex items-center mb-2">
              <FaLocationDot className="mr-2 text-black" />
              <span className="text-black">Location: England, UK.</span>
            </p>
            <p className="text-black font-semibold flex items-center mb-2">
              <MdEmail className="mr-2 text-black" />
              <span className="text-black">
                Email: ihenachoemma2512@gmail.com
              </span>
            </p>
            <p className="text-black font-semibold flex items-center mb-2">
              <FaPhoneVolume className="mr-2 text-black" />
              <span className="text-black">Call: +44-78811-79898</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-white">
            &copy; Copyright{" "}
            <span className="text-black">Emmanuel Ihenacho (TariQ)</span> | All
            rights reserved.
          </p>
          <p className="text-white">
            Developed by <span className="text-black">TariQ Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
