import "../Footer-card/footerCompCard.css";
import FormInput from "../Form-input/Form-input.components";
import { Button } from "../../components/Button.componets";
import { CardImage } from "../FullImage/FullImage-components";

const Footer_Card = () => {
  return (
    <div className="Footer_Card_container">
      <div className="Footer_Card_card">
        <h3>GIFT CARDS</h3>
        <CardImage
          src={
            "https://i8.amplience.net/i/jpl/gift-card-51957bf8d10960c66dfdb00cc39fe99a?qlt=80"
          }
          cardimage={"card-image-small"}
        />
        <h3>£5 - £300</h3>
        <p>
          The JD eGift card and JD gift card are available instore and online,
          and can be sent via post, email or text. <br /> Please Note: eGift
          Cards take upto 12 hours to deliver.
        </p>

        <Button
          btnclass={"footer-btn-primary btn-secondary"}
          title={"BUY GIFT CARDS"}
        />
      </div>
      <div className="Footer_Card_card">
        <h3>OUR STORES</h3>
        <CardImage
          src={
            "https://www.jdsports.co.uk/skins/jdsportsuk-desktop/public/img/footer/stores.png"
          }
          cardimage={"card-image-smaller"}
        />
        <h3>&nbsp;</h3>
        <p>
          Find your local store more, view opening hours and find out where you
          can get delivery to collect your order from! <br /> Just enter your
          postcode below to find your nearest store.
        </p>
        <FormInput
          placeholder={"ENTER POSTCODE..."}
          signupinput={"SignUp-input"}
          classType={"GO"}
        />
      </div>
      <div className="Footer_Card_Last">
        <CardImage
          src={
            "https://i8.amplience.net/i/jpl/footer-450x500px-1-42a11b8436094d85648c701782d9837b"
          }
          cardimage={"card-image"}
        />
      </div>
    </div>
  );
};

export default Footer_Card;
