import "../Footer_Info/FooterInfo.css";

const FooterInfoLink = () => {
  return (
    <>
      <div className={"footer-info-link-container"}>
        <div className="footer-link__container">
          <ul className="footer-link__section">
            <h3 className="footer-link__header">header</h3>
            <li className="footer-link__links">link</li>
            <li className="footer-link__links">link</li>
            <li className="footer-link__links">link</li>
            <li className="footer-link__links">link</li>
            <li className="footer-link__links">link</li>
          </ul>
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
            <span className="footer-text">
              Copyright © 2024 JD Sports All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfoLink;
