import { footerLinks, FooterImageLinks } from "../assets/products/footerLinks";
import "../Footer_Info/FooterInfo.css";

const FooterInfoLink = () => {
  return (
    <>
      <div className={"footer-info-link-container"}>
        <div className="footer-link-outer-container">
        <div className="footer-link__container">
          {footerLinks &&
            footerLinks.map((linksObject, ind) => {
              const { Title, links } = linksObject;
              return (
                <ul key={ind} className="footer-link__section">
                  <h3 className="footer-link__header">{Title}</h3>
                  {links.map((link, ind) => (
                    <li key={ind} className="footer-link__links">
                      {link}
                    </li>
                  ))}
                </ul>
              );
            })}
        </div>
        </div>

        <div className="footer-link__copyright">
          <div className="footer-link__copyright-first">
            <span className="footer-text">
              Visit our corporate website at www.jdplc.com
            </span>
            <span className="footer-text">
              Copyright © 2024 JD Sports All rights reserved.
            </span>
          </div>

          <div className="footer-link__copyright-second">
            <span className="footer-text">
              we accept the following payment methods
            </span>
            <span className="footer-image-container">
              {FooterImageLinks.map((ele, i) => {
                return (
                  <img
                    src={ele}
                    alt="payment__logo"
                    className="footer__payment-logo"
                    key={i}
                  />
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfoLink;
