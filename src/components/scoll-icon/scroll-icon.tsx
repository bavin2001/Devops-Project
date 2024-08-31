import Image from "next/image";

import mouse from "@app/assets/img/mouse-icon.png";
import "./style.scss";

export default function ScrollIcon() {
    return (
        <div className="banner-btm-scroll">
            <span>
                <a href="#about">
                    <Image src={mouse} alt="mouse" />
                </a>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 185 85"
                    // style={{ enableBackground: "new 0 0 185 85" }}
                    xmlSpace="preserve"
                >
                    <path className="st0" d="M0.4,85L92.6,6.1l92,78.9H0.4z" />
                    <path className="st1" d="M12.7,79.8L92.5,0l79.8,79.8H12.7z" />
                </svg>
            </span>
        </div>

    );
}