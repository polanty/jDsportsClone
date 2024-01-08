import SignUp from "./SignUp.jsx";
import FooterCTA from "./Footer-CTA/FooterCTA.jsx";
import FooterInfoLink from "./Footer_Info/FooterInfo.jsx";

const Footer = () => {
  return (
    <>
      <div className="footer-socials">
        <div className="footer-socials-content">
          <h3 className="small-header">join the conversation</h3>
        </div>
      </div>
      <SignUp />
      <FooterCTA />
      <FooterInfoLink />
    </>
  );
};

export default Footer;
