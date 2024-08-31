
import "./style.scss";
import DigitalMarketing from "@app/components/animated-svgs/digital-marketing/digital-marketing-svg";
import Designing from "@app/components/animated-svgs/designing/designing-svg";
import Development from "@app/components/animated-svgs/development/development-svg";

export default function Services() {
  return (
    <div className="service-middlealign">
      <h2>
        Explore Our Wide Range <br />
        of Customized Services and Solutions
      </h2>
      <div className="sm-row">
        <div className="col-item-mob">
          <a href="service/digital-marketing" className="digital-marketing">
            <span>
              <span className="digitalmarketing-svg">
                <DigitalMarketing style={{ height: "90px" }} />
              </span>
              <h6>Digital</h6>
              <h4>Marketing</h4>
            </span>
          </a>
        </div>
        <div className="col-item-mob">
          <a href="service/website-designing" className="website-designing">
            <span>
              <span className="websitedesigning-svg">
                <Designing style={{ height: "90px" }} />
              </span>
              <h6>Website</h6>
              <h4>Designing</h4>
            </span>
          </a>
        </div>
        <div className="col-item-mob">
          <a
            href="service/software-development"
            className="software-development"
          >
            <span>
              <span className="softwaredevelopment-svg">
                <Development style={{ height: "90px" }} />
              </span>
              <h6>Software</h6>
              <h4>Development</h4>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
