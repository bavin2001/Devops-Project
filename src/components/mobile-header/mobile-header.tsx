import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import "./style.scss";
import Services from "./services/services";

type PropType = {
  mobileToggle: Boolean,
  setMobileTogge: Dispatch<SetStateAction<Boolean>>
}

export default function MobileHeader({ mobileToggle, setMobileTogge }: PropType) {
  function closeHeader() {
    setMobileTogge(!mobileToggle);
  }

  return (
    <div className="mobile-menu-wrapper" style={{ top: mobileToggle ? "0" : "100%" }}>
      <button className="menuclose-btn" onClick={closeHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="m254-238-16-16 226-226-226-226 16-16 226 226 226-226 16 16-226 226 226 226-16 16-226-226-226 226Z" />
        </svg>
      </button>
      <div className="container-fluid">
        <div className="row">
          <div className="mobileleft-menu">
            <div className="mobile-menu-wrap">
              <div className="menu-mobile-menu-container">
                <ul id="menu-mobile-menu" className="menu">
                  <li
                    id="menu-item-49"
                    className="menu-item current-menu-item"
                  >
                    <Link href="/" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li
                    id="menu-item-51"
                    className="menu-item"
                  >
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li
                    id="menu-item-54"
                    className="menu-item"
                  >
                    <Link href="/services">Services</Link>
                  </li>
                  <li
                    id="menu-item-53"
                    className="menu-item"
                  >
                    <Link href="/works">Portfolio</Link>
                  </li>
                  <li
                    id="menu-item-55"
                    className="menu-item"
                  >
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li
                    id="menu-item-50"
                    className="menu-item"
                  >
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li
                    id="menu-item-52"
                    className="menu-item"
                  >
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services-menu-con">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
